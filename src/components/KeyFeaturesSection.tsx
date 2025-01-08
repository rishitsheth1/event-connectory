import { Aperture, Rocket, Calendar } from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    title: "AI-Powered Matchmaking",
    description:
      "Leverage our proprietary algorithm to connect with like-minded people effortlessly.",
    icon: <Aperture className="w-6 h-6" />,
  },
  {
    title: "Personalized Recommendations",
    description:
      "Get suggestions for people, sessions, or groups you might find most relevant at an event.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: "Easy Scheduling",
    description:
      "Plan meetups or 1-on-1 chats ahead of time with our integrated calendar tool.",
    icon: <Calendar className="w-6 h-6" />,
  },
];

export const KeyFeaturesSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why You’ll Love Our Platform
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Key features that make networking more meaningful
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-primary text-white rounded-md mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
