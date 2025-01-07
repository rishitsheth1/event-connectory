import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface User {
  name: string;
  email: string;
  skills: string[];
  interests: string[];
  linkedinProfile?: string;
  eventId: string;
}

interface UserMatchCardProps {
  user: User;
  score: number;
  currentUserSkills: string[];
  currentUserInterests: string[];
  onConnect: (user: User) => void;
  onViewProfile: (user: User) => void;
  isRequestSent: boolean;
}

export const UserMatchCard = ({
  user,
  score,
  currentUserSkills,
  currentUserInterests,
  onConnect,
  onViewProfile,
  isRequestSent,
}: UserMatchCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span 
            className="cursor-pointer hover:text-primary"
            onClick={() => onViewProfile(user)}
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
                .filter((skill) => currentUserInterests.includes(skill))
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
                .filter((interest) => currentUserSkills.includes(interest))
                .map((interest) => (
                  <Badge key={interest} variant="secondary">
                    {interest}
                  </Badge>
                ))}
            </div>
          </div>
          <Button
            onClick={() => onConnect(user)}
            disabled={isRequestSent}
            className="w-full mt-4"
          >
            {isRequestSent ? "Request Sent" : "Connect"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};