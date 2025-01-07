import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AVAILABLE_TAGS = [
  "Programming", "Design", "Marketing", "Sales", "Writing",
  "Public Speaking", "Leadership", "Finance", "Data Analysis",
  "Project Management", "Social Media", "Video Production",
  "Event Planning", "Networking", "Business Strategy"
];

// Mock events data - in real app, this would come from an API
const MOCK_EVENTS = [
  { id: "1", name: "Tech Conference 2024", date: "2024-06-15" },
  { id: "2", name: "Business Summit", date: "2024-07-01" },
  { id: "3", name: "Startup Meetup", date: "2024-05-20" },
];

export const SignUpForm = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [linkedinProfile, setLinkedinProfile] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
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

  const analyzeLinkedInProfile = async () => {
    if (!linkedinProfile) return;
    
    setIsAnalyzing(true);
    // Mock AI analysis - in real app, this would call an AI service
    setTimeout(() => {
      const mockSkills = ["Leadership", "Marketing", "Sales"];
      setSkills(mockSkills);
      setIsAnalyzing(false);
      toast({
        title: "Profile Analyzed",
        description: "Skills have been extracted from your LinkedIn profile",
      });
    }, 1500);
  };

  const handleNextStep = () => {
    if (!name || !email || !selectedEvent) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
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
    localStorage.setItem("user", JSON.stringify({ 
      name, 
      email, 
      skills, 
      interests,
      linkedinProfile,
      eventId: selectedEvent,
      event: MOCK_EVENTS.find(e => e.id === selectedEvent)
    }));
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

        <div className="space-y-2">
          <Label htmlFor="event">Select Event</Label>
          <Select value={selectedEvent} onValueChange={setSelectedEvent}>
            <SelectTrigger>
              <SelectValue placeholder="Select an event" />
            </SelectTrigger>
            <SelectContent>
              {MOCK_EVENTS.map((event) => (
                <SelectItem key={event.id} value={event.id}>
                  {event.name} - {new Date(event.date).toLocaleDateString()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
          <Textarea
            id="linkedin"
            placeholder="Paste your LinkedIn profile content here..."
            value={linkedinProfile}
            onChange={(e) => setLinkedinProfile(e.target.value)}
            className="h-32"
          />
          {linkedinProfile && (
            <Button
              type="button"
              variant="outline"
              onClick={analyzeLinkedInProfile}
              disabled={isAnalyzing}
              className="w-full mt-2"
            >
              {isAnalyzing ? "Analyzing Profile..." : "Analyze Profile"}
            </Button>
          )}
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