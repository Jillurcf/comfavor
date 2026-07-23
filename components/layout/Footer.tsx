import Link from 'next/link';
import { Facebook, Linkedin, MessageCircle } from 'lucide-react';

const footerNav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/aboutus' },
  { label: 'Products', href: '/products' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blogs' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/comfavor' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/comfavor' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/8801910336341' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Comfavor</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Empowering Bangladeshi businesses with modern technology solutions — web development,
              mobile apps, UI/UX design, and digital marketing.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {footerNav.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors hover:bg-[var(--primary-color)] hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            <div className="mt-6">
              <h3 className="mb-2 text-lg font-semibold text-white">Contact</h3>
              <p className="text-sm text-gray-400">Dhaka, Bangladesh</p>
              <a
                href="tel:+8801910336341"
                className="block text-sm text-gray-400 transition-colors hover:text-white"
              >
                +880-1910336341
              </a>
              <a
                href="mailto:info@comfavor.com"
                className="block text-sm text-gray-400 transition-colors hover:text-white"
              >
                info@comfavor.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Comfavor Information Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
