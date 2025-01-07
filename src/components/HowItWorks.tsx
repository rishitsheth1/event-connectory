import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Create Your Profile",
    description: "Sign up and tell us about your skills and interests",
  },
  {
    title: "Select Your Tags",
    description: "Choose 5 things you're good at and 5 things you want to learn",
  },
  {
    title: "Get Matched",
    description: "We'll connect you with people who complement your profile",
  },
];

export const HowItWorks = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Three simple steps to start networking effectively
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="animate-float">
                  <div className="absolute flex items-center justify-center w-12 h-12 rounded-md bg-primary text-white">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <p className="ml-16 text-lg font-medium text-gray-900">
                    {step.title}
                  </p>
                  <p className="mt-2 ml-16 text-base text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};