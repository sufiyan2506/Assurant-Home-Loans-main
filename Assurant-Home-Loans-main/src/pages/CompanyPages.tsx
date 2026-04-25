import React from 'react';
import Hero from '../../components/Hero';
import ReviewsCarousel from '../../components/ReviewsCarousel';
import { motion } from 'framer-motion';
import { Award, Users, ShieldCheck, MapPin, Phone, Mail, Star, Clock } from 'lucide-react';
import { useUI } from '../context/UIContext';

export const About: React.FC<{ onOpenInquiry?: () => void }> = ({ onOpenInquiry: propOpenInquiry }) => {
  const { openInquiry } = useUI();
  const handleOpenInquiry = propOpenInquiry || openInquiry;
  return (
  <div className="pb-20">
    <Hero 
      onOpenInquiry={handleOpenInquiry}
      badge="NMLS #1767773 · Irving, Texas"
      title="People-first home lending since day one"
      description="Assurant Home Loans is committed to delivering tailored mortgage solutions with transparency, expertise, and a personal touch — because behind every application is a family and a dream."
      image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200"
      showStats={true}
      primaryCTA="Work with us"
    />

    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="font-serif text-4xl mb-8 text-navy-900">The Assurant commitment</h2>
        <p className="text-xl text-gray-500 leading-relaxed mb-12">
          Founded in Irving, Texas, we combine institutional-grade lending service with the attention to detail only a client-focused broker can provide. Our team has helped hundreds of families across the DFW metroplex close on their dream homes — often in as little as 14 days.
        </p>
        <div className="grid md:grid-cols-3 gap-12 text-left">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center">
              <Award className="text-brand-600 w-6 h-6" />
            </div>
            <h3 className="font-semibold text-xl text-navy-900">Excellence</h3>
            <p className="text-gray-500">We strive for accuracy in every loan file we process, backed by real-time status updates.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center">
              <Users className="text-brand-600 w-6 h-6" />
            </div>
            <h3 className="font-semibold text-xl text-navy-900">Empathy</h3>
            <p className="text-gray-500">We remember that behind every application is a family and a dream. We're available on weekends.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="text-brand-600 w-6 h-6" />
            </div>
            <h3 className="font-semibold text-xl text-navy-900">Trust</h3>
            <p className="text-gray-500">No hidden fees, no fine print. Just clear, honest communication from pre-approval to closing.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Reviews embedded right on About page */}
    <ReviewsCarousel 
      title="Why families choose us"
      subtitle="5.0 stars across 13 verified reviews. Speed, transparency, and competitive rates — every time."
      variant="dark"
    />

    {/* Contact strip */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-warm-cream rounded-[2rem] p-10 flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <h3 className="font-serif text-2xl mb-2 text-navy-900">Visit our office</h3>
            <div className="flex items-start gap-3 text-gray-500 text-sm mt-4">
              <MapPin className="w-4 h-4 text-brand-500 mt-0.5" />
              <span>1212 Corporate Dr #117, Irving, TX 75038</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500 text-sm mt-3">
              <Clock className="w-4 h-4 text-brand-500" />
              <span>Mon–Fri 8am–7pm CT · Weekends by appointment</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <a href="tel:9402069406" className="flex items-center gap-2 text-navy-900 font-semibold hover:text-brand-600 transition-colors">
              <Phone className="w-4 h-4" /> 940-206-9406
            </a>
            <a href="mailto:sunil@assuranthomeloans.com" className="flex items-center gap-2 text-gray-500 hover:text-brand-600 transition-colors text-sm">
              <Mail className="w-4 h-4" /> sunil@assuranthomeloans.com
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export const Team: React.FC<{ onOpenInquiry?: () => void }> = ({ onOpenInquiry: propOpenInquiry }) => {
  const { openInquiry } = useUI();
  const handleOpenInquiry = propOpenInquiry || openInquiry;
  const members = [
    { 
      name: "Sunil Gudala", 
      role: "Managing Director · Loan Officer",
      nmls: "NMLS #1722464",
      specialties: ["First-time buyers", "Investors", "Jumbo"],
      phone: "940-206-9406",
      email: "sunil@assuranthomeloans.com",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    { 
      name: "Sangeeta Ganti", 
      role: "Loan Officer",
      nmls: "NMLS #1733745",
      specialties: ["Self-employed", "Refinance", "FHA/VA"],
      phone: "940-206-9406",
      email: "sunil@assuranthomeloans.com",
      img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400"
    },
    { 
      name: "Kiran",
      role: "Processing Specialist",
      nmls: "",
      specialties: ["Document review", "Underwriting prep"],
      phone: "",
      email: "",
      img: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?auto=format&fit=crop&q=80&w=400"
    },
    { 
      name: "Madhavi",
      role: "Operations Support",
      nmls: "",
      specialties: ["Client coordination", "Closing support"],
      phone: "",
      email: "",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="pb-20">
      <section className="pt-40 pb-20 bg-warm-ivory">
        <div className="container mx-auto px-6 text-center">
          <span className="text-brand-600 font-semibold uppercase tracking-widest text-xs">Meet the team</span>
          <h1 className="font-serif text-5xl md:text-7xl mt-4 mb-8 text-navy-900">
            The <span className="italic text-brand-600">experts</span> behind <br /> your closing.
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto mb-20">
            Our clients consistently name Sunil, Kiran, and Madhavi in their reviews. Here's the team that makes 14-day closings possible.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {members.map((member, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-warm-stone hover:shadow-xl hover:shadow-brand-500/5 transition-shadow"
              >
                <img src={member.img} alt={member.name} className="w-full h-72 object-cover" />
                <div className="p-6 text-left">
                  <h3 className="font-semibold text-xl mb-1 text-navy-900">{member.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{member.role}</p>
                  {member.nmls && (
                    <p className="text-[10px] font-semibold text-brand-600 tracking-widest mb-3">{member.nmls}</p>
                  )}
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.map(s => (
                      <span key={s} className="px-2.5 py-1 bg-brand-50 text-brand-700 text-[10px] font-semibold rounded-full tracking-wide">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews on team page too */}
      <ReviewsCarousel 
        title="What clients say about our team"
        subtitle="Sunil, Kiran, and Madhavi are mentioned by name in multiple reviews."
        variant="light"
        showStats={false}
      />
    </div>
  );
};
