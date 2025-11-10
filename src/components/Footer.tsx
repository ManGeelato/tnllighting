import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="/8710b12e-a512-495f-b582-ffd4a525500b_removalai_preview.png"
              alt="TNLlighting"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm">
              Illuminating your world with quality lighting solutions and accessories.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Categories', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} TNLlighting. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Developed by: &nbsp;
             <a href="https://www.linkedin.com/in/emmanuel-kaome-0247b7224/" target="_blank"
                  > Emmanuel 'Gadaffi' Kaome</a
                >
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
