import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-20 md:py-28">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Make Every Event</span>
              <span className="block text-primary">Count with Smart Networking</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Find and connect with the right people at your next event. Our AI-powered matching helps you make meaningful connections based on complementary skills and interests.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Button
                onClick={() => navigate("/signup")}
                className="rounded-md shadow px-8 py-3 text-base font-medium bg-primary hover:bg-primary/90"
              >
                Join Your Next Event
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};