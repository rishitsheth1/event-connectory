import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

interface User {
  name: string;
  email: string;
  skills: string[];
  interests: string[];
}

// Mock data for demonstration
const MOCK_USERS: User[] = [
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    skills: ["Programming", "Design", "Marketing", "Project Management", "Writing"],
    interests: ["Leadership", "Public Speaking", "Finance", "Sales", "Data Analysis"],
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    skills: ["Leadership", "Sales", "Networking", "Public Speaking", "Event Planning"],
    interests: ["Programming", "Design", "Data Analysis", "Writing", "Marketing"],
  },
];

export const Dashboard = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [matches, setMatches] = useState<Array<{ user: User; score: number }>>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [sentRequests, setSentRequests] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const savedRequests = localStorage.getItem("sentRequests");
    if (userData) {
      setCurrentUser(JSON.parse(userData));
    }
    if (savedRequests) {
      setSentRequests(JSON.parse(savedRequests));
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      const calculatedMatches = MOCK_USERS.map((user) => {
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
  }, [currentUser]);

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
      <h1 className="text-3xl font-bold mb-6">Your Matches</h1>
      <div className="space-y-4">
        {matches.map(({ user, score }) => (
          <Card key={user.email} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span 
                  className="cursor-pointer hover:text-primary"
                  onClick={() => setSelectedUser(user)}
                >
                  {user.name}
                </span>
                <Badge variant="secondary">{score.toFixed(0)}% Match</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Skills you're interested in:</h3>
                  <div className="flex flex-wrap gap-2">
                    {user.skills
                      .filter((skill) => currentUser.interests.includes(skill))
                      .map((skill) => (
                        <Badge key={skill} variant="default">
                          {skill}
                        </Badge>
                      ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Interested in your skills:</h3>
                  <div className="flex flex-wrap gap-2">
                    {user.interests
                      .filter((interest) => currentUser.skills.includes(interest))
                      .map((interest) => (
                        <Badge key={interest} variant="secondary">
                          {interest}
                        </Badge>
                      ))}
                  </div>
                </div>
                <Button
                  onClick={() => handleConnect(user)}
                  disabled={sentRequests.includes(user.email)}
                  className="w-full mt-4"
                >
                  {sentRequests.includes(user.email) ? "Request Sent" : "Connect"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedUser?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">All Skills:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedUser?.skills.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">All Interests:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedUser?.interests.map((interest) => (
                  <Badge key={interest} variant="secondary">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
            <Button
              onClick={() => {
                if (selectedUser) handleConnect(selectedUser);
                setSelectedUser(null);
              }}
              disabled={selectedUser ? sentRequests.includes(selectedUser.email) : false}
              className="w-full mt-4"
            >
              {selectedUser && sentRequests.includes(selectedUser.email) 
                ? "Request Sent" 
                : "Connect"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};