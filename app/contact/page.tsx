import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/shared/ContactForm';
import { buildMetadata, routeMetadata } from '@/lib/constants/seo';

export const metadata: Metadata = buildMetadata(routeMetadata.contact);

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+880-1910336341',
    href: 'tel:+8801910336341',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@comfavor.com',
    href: 'mailto:info@comfavor.com',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'Dhaka, Bangladesh',
    href: null,
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Sat–Thu, 9:00 AM – 6:00 PM',
    href: null,
  },
];

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/comfavor' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/comfavor' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/8801910336341' },
];

export default function ContactPage() {
  return (
    <div>
      <section className="bg-gray-50 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-(--primary-color) underline decoration-4 underline-offset-8">
          Contact Us
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Have a project in mind? We would love to hear from you. Reach out and let us discuss how
          we can help.
        </p>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="mb-6 text-2xl font-bold text-gray-800">Send Us a Message</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-800">Contact Information</h2>

              <div className="space-y-6">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50">
                        <Icon className="h-5 w-5 text-(--primary-color)" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">{detail.label}</p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-gray-800 hover:text-(--primary-color)"
                            rel="noopener noreferrer"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-gray-800">{detail.value}</p>
                        )}
                      </div>
                    </div>
                  );
                  return <div key={detail.label}>{content}</div>;
                })}
              </div>

              <div className="mt-10">
                <h3 className="mb-4 text-lg font-semibold text-gray-800">Follow Us</h3>
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
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-(--primary-color) transition-colors hover:bg-(--primary-color) hover:text-white"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="mt-10 overflow-hidden rounded-2xl shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9024424301397!2d90.3910!3d23.7505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzAxLjgiTiA5MMKwMjMnMjcuNiJF!5e0!3m2!1sen!2sbd!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Comfavor Office Location"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
