import { SignUpForm } from "@/components/SignUpForm";

const SignUp = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Create Your Profile
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Tell us about your skills and what you're interested in learning
          </p>
        </div>
        <div className="mt-8">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;