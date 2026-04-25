import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { id: 1, label: "Years of excellence", value: "12", suffix: "+" },
  { id: 2, label: "Loans funded", value: "850", suffix: "+" },
  { id: 3, label: "Client satisfaction", value: "99", suffix: "%" },
  { id: 4, label: "Capital deployed", value: "500", suffix: "M+" },
];

const TrustIndicators: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-white relative z-0">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-4xl md:text-5xl font-serif text-navy-900 mb-2 tabular-nums">
                {stat.value}<span className="text-brand-500 text-2xl">{stat.suffix}</span>
              </h3>
              <p className="text-gray-400 uppercase tracking-widest text-xs font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;