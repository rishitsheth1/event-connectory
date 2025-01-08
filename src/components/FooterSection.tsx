import { Facebook, Twitter, Linkedin } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Left section */}
          <div className="mb-4 sm:mb-0">
            <h3 className="text-xl font-bold text-gray-900">SmartNetwork</h3>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} SmartNetwork. All rights reserved.
            </p>
          </div>

          {/* Middle section (links) */}
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Terms of Service
            </a>
          </div>

          {/* Right section (social icons) */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
