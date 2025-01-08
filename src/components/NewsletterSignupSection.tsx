import { useState } from "react";

export const NewsletterSignupSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Handle subscription logic (API call, etc.)
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <div className="bg-gradient-to-r from-primary/20 to-secondary/20 py-16">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Stay in the Loop
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Get updates on upcoming events, expert tips, and success stories.
        </p>
        <div className="mt-6 flex justify-center">
          <input
            type="email"
            className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubscribe}
            className="px-6 py-2 bg-primary text-white font-medium rounded-r-md hover:bg-primary/90"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
