import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { KeyFeaturesSection } from "@/components/KeyFeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQsSection } from "@/components/FAQsSection";
import { FooterSection } from "@/components/FooterSection";

// Optional sections:
import { UpcomingEventsSection } from "@/components/UpcomingEventsSection";
import { NewsletterSignupSection } from "@/components/NewsletterSignupSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { ReferralBanner } from "@/components/ReferralBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <KeyFeaturesSection />
      <UpcomingEventsSection />      {/* Optional */}
      <TestimonialsSection />
      <ReferralBanner />            {/* Optional */}
      <CaseStudiesSection />        {/* Optional */}
      <FAQsSection />
      <NewsletterSignupSection />   {/* Optional */}
      <FooterSection />
    </div>
  );
};

export default Index;