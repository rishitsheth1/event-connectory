import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const AVAILABLE_TAGS = [
  "Programming", "Design", "Marketing", "Sales", "Writing",
  "Public Speaking", "Leadership", "Finance", "Data Analysis",
  "Project Management", "Social Media", "Video Production",
  "Event Planning", "Networking", "Business Strategy"
];

export const SignUpForm = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleTagClick = (tag: string, type: "skills" | "interests") => {
    if (type === "skills") {
      if (skills.includes(tag)) {
        setSkills(skills.filter((t) => t !== tag));
      } else if (skills.length < 5) {
        setSkills([...skills, tag]);
      } else {
        toast({
          title: "Maximum Skills Reached",
          description: "You can only select up to 5 skills",
          variant: "destructive",
        });
      }
    } else {
      if (interests.includes(tag)) {
        setInterests(interests.filter((t) => t !== tag));
      } else if (interests.length < 5) {
        setInterests([...interests, tag]);
      } else {
        toast({
          title: "Maximum Interests Reached",
          description: "You can only select up to 5 interests",
          variant: "destructive",
        });
      }
    }
  };

  const handleNextStep = () => {
    if (!name || !email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (skills.length !== 5 || interests.length !== 5) {
      toast({
        title: "Invalid Selection",
        description: "Please select exactly 5 skills and 5 interests",
        variant: "destructive",
      });
      return;
    }
    localStorage.setItem("user", JSON.stringify({ name, email, skills, interests }));
    toast({
      title: "Profile Created!",
      description: "You've successfully created your profile",
    });
    navigate("/dashboard");
  };

  if (step === 1) {
    return (
      <form onSubmit={(e) => { e.preventDefault(); handleNextStep(); }} className="space-y-8 max-w-md mx-auto">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <Button type="submit" className="w-full">
          Next Step
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-md mx-auto">
      <div className="space-y-2">
        <Label>Skills (Select 5)</Label>
        <div className="flex flex-wrap gap-2">
          {AVAILABLE_TAGS.map((tag) => (
            <Badge
              key={`skill-${tag}`}
              variant={skills.includes(tag) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => handleTagClick(tag, "skills")}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label>Interests (Select 5)</Label>
        <div className="flex flex-wrap gap-2">
          {AVAILABLE_TAGS.map((tag) => (
            <Badge
              key={`interest-${tag}`}
              variant={interests.includes(tag) ? "secondary" : "outline"}
              className="cursor-pointer"
              onClick={() => handleTagClick(tag, "interests")}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-x-4">
        <Button type="button" variant="outline" onClick={() => setStep(1)} className="w-1/3">
          Back
        </Button>
        <Button type="submit" className="w-2/3">
          Create Profile
        </Button>
      </div>
    </form>
  );
};