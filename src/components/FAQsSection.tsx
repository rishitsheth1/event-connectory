import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is the platform free to use?",
    answer:
      "Yes! Basic networking features are free. We also offer premium features for event organizers or power users.",
  },
  {
    question: "How does the AI matching work?",
    answer:
      "Our proprietary algorithm looks at shared interests, skills, and professional goals to suggest the most relevant connections.",
  },
  {
    question: "Can I opt out of certain event matches?",
    answer:
      "Absolutely. You’re always in control of which matches you accept or decline.",
  },
];

export const FAQsSection = () => {
  const [openIndex, setOpenIndex] = useState<null | number>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Quick answers to common queries
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4 bg-white rounded-lg shadow">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <span className="text-gray-900 font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-500 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
