import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface User {
  name: string;
  email: string;
  skills: string[];
  interests: string[];
  linkedinProfile?: string;
  eventId: string;
}

interface UserProfileDialogProps {
  user: User | null;
  onClose: () => void;
  onConnect: (user: User) => void;
  isRequestSent: boolean;
}

export const UserProfileDialog = ({
  user,
  onClose,
  onConnect,
  isRequestSent,
}: UserProfileDialogProps) => {
  if (!user) return null;

  return (
    <Dialog open={!!user} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{user.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          {user.linkedinProfile && (
            <div>
              <h3 className="font-semibold mb-2">LinkedIn Profile:</h3>
              <p className="text-sm text-gray-600">{user.linkedinProfile}</p>
            </div>
          )}
          <div>
            <h3 className="font-semibold mb-2">All Skills:</h3>
            <div className="flex flex-wrap gap-2">
              {user.skills.map((skill) => (
                <Badge key={skill} variant="default">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">All Interests:</h3>
            <div className="flex flex-wrap gap-2">
              {user.interests.map((interest) => (
                <Badge key={interest} variant="secondary">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
          <Button
            onClick={() => {
              onConnect(user);
              onClose();
            }}
            disabled={isRequestSent}
            className="w-full mt-4"
          >
            {isRequestSent ? "Request Sent" : "Connect"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};