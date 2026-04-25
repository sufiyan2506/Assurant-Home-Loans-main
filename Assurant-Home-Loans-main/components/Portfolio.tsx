import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  year: string;
  image: string;
}

const projects: Project[] = [
  { id: 1, title: "Preston Hollow estate", location: "Dallas, Texas", category: "Jumbo loan", year: "2024", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "Las Colinas penthouse", location: "Irving, Texas", category: "Fixed-rate", year: "2024", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "Southlake family home", location: "Southlake, Texas", category: "First-time buyer", year: "2023", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800" },
  { id: 4, title: "Downtown Austin condo", location: "Austin, Texas", category: "Refinance", year: "2023", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800" },
  { id: 5, title: "Uptown loft conversion", location: "Dallas, Texas", category: "Investment", year: "2023", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800" },
];

const Portfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="portfolio" className="py-20 md:py-24 bg-white relative z-0">
      <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
        <div>
           <span className="text-brand-600 font-semibold tracking-widest text-xs uppercase mb-2 block">Success stories</span>
           <h2 className="font-serif text-3xl md:text-5xl text-navy-900">Recent closings</h2>
        </div>
        <div className="hidden md:flex gap-6 items-center">
            <span className="text-xs font-medium tracking-widest text-gray-400 uppercase">Scroll to explore</span>
            <div className="w-12 h-[1px] bg-gray-200" />
        </div>
      </div>

      {/* Horizontal Scroll Area */}
      <div 
        ref={containerRef}
        className="pl-6 md:pl-[max(1.5rem,calc((100vw-1280px)/2))] overflow-x-auto no-scrollbar flex gap-6 md:gap-8 pb-12 snap-x snap-mandatory cursor-grab active:cursor-grabbing"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            className="flex-none w-[85vw] md:w-[560px] group cursor-pointer snap-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[360px] md:h-[440px] overflow-hidden bg-warm-stone mb-5 rounded-[1.5rem]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-900/15 group-hover:bg-navy-900/5 transition-colors" />
              <div className="absolute top-5 right-5 bg-white/90 backdrop-blur px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider rounded-full text-navy-800">
                {project.category}
              </div>
            </div>
            <div className="flex justify-between items-start px-1">
              <div>
                <h3 className="font-serif text-xl md:text-2xl mb-1 group-hover:text-brand-600 transition-colors text-navy-900">{project.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm">{project.location} — {project.year}</p>
              </div>
              <div className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center group-hover:bg-navy-900 group-hover:border-navy-900 group-hover:text-white transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
        <div className="w-6 md:w-[20vw] flex-none" />
      </div>
      
      {/* Mobile Scroll Indicator */}
      <div className="md:hidden container mx-auto px-6 flex justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest mt-2">
         <span>Swipe to see more</span>
         <ChevronRight className="w-4 h-4 text-brand-500" />
      </div>

      {/* Desktop Progress Bar */}
      <div className="hidden md:block container mx-auto px-6 mt-4">
        <div className="w-full h-[2px] bg-gray-100 relative overflow-hidden rounded-full">
            <motion.div 
                className="absolute top-0 left-0 h-full bg-brand-500"
                style={{ scaleX, transformOrigin: "0%" }} 
            />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;