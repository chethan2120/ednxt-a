import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from 'lucide-react';

export const metadata = {
  title: 'Contact Us | EdNxt Academy Admissions',
  description: 'Reach our admissions team in Dubai, UAE. Inquire about CBSE and British KS3 learning streams, term enrolment, or customised timetables.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow py-16 bg-gradient-to-b from-white via-soft-blue/20 to-edbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Information (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-soft-blue text-brand-blue text-xs font-bold uppercase tracking-wider">
                  Direct Admissions Support
                </div>

                <h1 className="text-3xl sm:text-4xl font-black text-navy leading-tight tracking-tight">
                  Get in Touch with <span className="highlight-lime">Our Team</span>
                </h1>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Have questions about our CBSE or British curriculum pathways? Want advice on which learning stream best fits your child? We are here to help.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-soft-blue text-brand-blue flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">Email Admissions</div>
                    <a
                      href="mailto:admissions@ednxt.co"
                      className="text-sm font-bold text-navy hover:text-brand-blue transition-colors mt-0.5 block"
                    >
                      admissions@ednxt.co
                    </a>
                    <div className="text-[11px] text-slate-500 mt-0.5">Response typically within 4 business hours</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-soft-green text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">Phone & WhatsApp</div>
                    <a
                      href="tel:+97142345678"
                      className="text-sm font-bold text-navy hover:text-brand-blue transition-colors mt-0.5 block"
                    >
                      +971 4 234 5678 (Dubai Landline)
                    </a>
                    <div className="text-xs font-bold text-emerald-700 mt-1">
                      WhatsApp: +971 50 123 4567
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-soft-purple text-purple-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">Academic Office</div>
                    <div className="text-sm font-bold text-navy mt-0.5">
                      Dubai Knowledge Park, Block 12
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Dubai, United Arab Emirates</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-soft-orange text-amber-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase">Admissions Hours</div>
                    <div className="text-sm font-bold text-navy mt-0.5">
                      Sunday – Thursday: 9:00 AM – 7:00 PM (GST)
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Friday – Saturday: 10:00 AM – 4:00 PM (GST)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
