import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatarUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jane Doe",
    role: "Startup Founder",
    quote:
      "Thanks to this platform, I found my co-founder in just one week. The AI matching is spot on!",
    avatarUrl: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "John Smith",
    role: "Marketing Director",
    quote:
      "I never liked networking, but this made it effortless. Met three amazing leads at my last event!",
    avatarUrl: "https://images.unsplash.com/photo-1514626585111-9aa86183ac98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhY2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Alice Chen",
    role: "Freelance Designer",
    quote:
      "The best part is how it aligns skill sets. I'm now collaborating with a developer I met here.",
    avatarUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHNob3R8ZW58MHx8MHx8fDI%3D",
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Users Are Saying
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Real stories from real people who’ve grown their networks
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="flex items-center mb-4">
                {testimonial.avatarUrl && (
                  <img
                    src={testimonial.avatarUrl}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover" 
                  />
                )}
                <div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex space-x-1 text-primary">
                <Star className="w-5 h-5" />
                <Star className="w-5 h-5" />
                <Star className="w-5 h-5" />
                <Star className="w-5 h-5" />
                <Star className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
