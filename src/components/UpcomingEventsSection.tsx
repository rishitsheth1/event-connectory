interface EventItem {
    title: string;
    date: string;
    location: string;
    description: string;
  }
  
  const upcomingEvents: EventItem[] = [
    {
      title: "Startup Innovators Meetup",
      date: "Feb 10, 2025",
      location: "New York, NY",
      description:
        "A gathering of entrepreneurs, founders, and VCs looking to build the next big thing.",
    },
    {
      title: "Marketing Masterclass",
      date: "Mar 05, 2025",
      location: "Virtual Event",
      description:
        "Learn advanced marketing strategies from top industry experts.",
    },
    {
      title: "Tech Networking Night",
      date: "Apr 15, 2025",
      location: "San Francisco, CA",
      description:
        "Connect with developers, designers, and product managers in the Bay Area tech scene.",
    },
  ];
  
  export const UpcomingEventsSection = () => {
    return (
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Upcoming Events
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Join or explore any of these upcoming events
            </p>
          </div>
  
          <div className="grid gap-8 md:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {event.title}
                </h3>
                <p className="mt-2 text-primary font-medium">
                  {event.date} · {event.location}
                </p>
                <p className="mt-2 text-gray-600">{event.description}</p>
                <button
                  className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
                  onClick={() => alert("Register or view details")}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  