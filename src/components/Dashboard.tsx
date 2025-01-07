import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { EventSelector } from "./EventSelector";
import { UserMatchCard } from "./UserMatchCard";
import { UserProfileDialog } from "./UserProfileDialog";

interface User {
  name: string;
  email: string;
  skills: string[];
  interests: string[];
  linkedinProfile?: string;
  eventId: string;
  event?: {
    id: string;
    name: string;
    date: string;
  };
}

// Mock events data
const MOCK_EVENTS = [
  { id: "1", name: "Tech Conference 2024", date: "2024-06-15" },
  { id: "2", name: "Business Summit", date: "2024-07-01" },
  { id: "3", name: "Startup Meetup", date: "2024-05-20" },
];

// Mock data for demonstration
const MOCK_USERS: User[] = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    skills: ["Programming", "Design", "Marketing", "Project Management", "Writing"],
    interests: ["Leadership", "Public Speaking", "Finance", "Sales", "Data Analysis"],
    eventId: "1",
    linkedinProfile: "Senior Software Engineer with 5+ years of experience...",
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    skills: ["Leadership", "Sales", "Networking", "Public Speaking", "Event Planning"],
    interests: ["Programming", "Design", "Data Analysis", "Writing", "Marketing"],
    eventId: "1",
    linkedinProfile: "Business Development Manager specializing in...",
  },
];

export const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<string>("");
  const [matches, setMatches] = useState<Array<{ user: User; score: number }>>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [sentRequests, setSentRequests] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const savedRequests = localStorage.getItem("sentRequests");
    if (userData) {
      const user = JSON.parse(userData);
      setCurrentUser(user);
      setSelectedEvent(user.eventId);
    }
    if (savedRequests) {
      setSentRequests(JSON.parse(savedRequests));
    }
  }, []);

  useEffect(() => {
    if (currentUser && selectedEvent) {
      const eventUsers = MOCK_USERS.filter(user => user.eventId === selectedEvent);
      const calculatedMatches = eventUsers.map((user) => {
        const skillsMatch = user.skills.filter((skill) => 
          currentUser.interests.includes(skill)
        ).length;
        const interestsMatch = user.interests.filter((interest) => 
          currentUser.skills.includes(interest)
        ).length;
        const score = ((skillsMatch + interestsMatch) / 10) * 100;
        return { user, score };
      });

      setMatches(calculatedMatches.sort((a, b) => b.score - a.score));
    }
  }, [currentUser, selectedEvent]);

  const handleConnect = (user: User) => {
    if (!sentRequests.includes(user.email)) {
      const newRequests = [...sentRequests, user.email];
      setSentRequests(newRequests);
      localStorage.setItem("sentRequests", JSON.stringify(newRequests));
      toast({
        title: "Connection request sent!",
        description: `Your request has been sent to ${user.name}.`,
      });
    }
  };

  if (!currentUser) {
    return <div>Please sign up first</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <EventSelector
        events={MOCK_EVENTS}
        selectedEvent={selectedEvent}
        onEventChange={setSelectedEvent}
      />

      <h1 className="text-3xl font-bold mb-6">Your Matches</h1>
      <div className="space-y-4">
        {matches.map(({ user, score }) => (
          <UserMatchCard
            key={user.email}
            user={user}
            score={score}
            currentUserSkills={currentUser.skills}
            currentUserInterests={currentUser.interests}
            onConnect={handleConnect}
            onViewProfile={setSelectedUser}
            isRequestSent={sentRequests.includes(user.email)}
          />
        ))}
      </div>

      <UserProfileDialog
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
        onConnect={handleConnect}
        isRequestSent={selectedUser ? sentRequests.includes(selectedUser.email) : false}
      />
    </div>
  );
};