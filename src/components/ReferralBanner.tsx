export const ReferralBanner = () => {
    return (
      <div className="bg-secondary/10 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            Love Our Platform? Spread the Word!
          </h3>
          <p className="mt-2 text-gray-700">
            Invite a friend and both of you get exclusive perks.
          </p>
          <button
            onClick={() => alert("Refer a friend logic here")}
            className="mt-4 bg-secondary text-white px-6 py-2 rounded-md hover:bg-secondary/90"
          >
            Refer a Friend
          </button>
        </div>
      </div>
    );
  };
  