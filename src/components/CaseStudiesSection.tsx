interface CaseStudy {
    title: string;
    excerpt: string;
    imageUrl: string;
    link: string;
  }
  
  const caseStudies: CaseStudy[] = [
    {
      title: "How Jane Found Her Co-Founder",
      excerpt:
        "When Jane joined our platform, she was looking for a technical co-founder. Two weeks later...",
      imageUrl: "https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fDQwMCoyMDAlMjBidXNpbmVzc3xlbnwwfHwwfHx8Mg%3D%3D",
      link: "/case-studies/jane-cofounder",
    },
    {
      title: "Scaling a Freelance Business",
      excerpt:
        "Discover how Mark used targeted networking at just two virtual events to land multiple new clients...",
      imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8NDAwKjIwMCUyMGJ1c2luZXNzfGVufDB8fDB8fHwy",
      link: "/case-studies/scaling-freelance",
    },
  ];
  
  export const CaseStudiesSection = () => {
    return (
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Success Stories
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Learn how our users achieve their goals
            </p>
          </div>
  
          <div className="grid gap-8 sm:grid-cols-2">
            {caseStudies.map((cs, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow bg-gray-50"
              >
                <img
                  src={cs.imageUrl}
                  alt={cs.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {cs.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{cs.excerpt}</p>
                  <a
                    href={cs.link}
                    className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  