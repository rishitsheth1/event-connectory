import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setCurrentUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      // Calculate matches based on complementary skills/interests
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

  if (!currentUser) {
    return <div>Please sign up first</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Matches</h1>
      <div className="space-y-4">
        {matches.map(({ user, score }) => (
          <Card key={user.email}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{user.name}</span>
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
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};