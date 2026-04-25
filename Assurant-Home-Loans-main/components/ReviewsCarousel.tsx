import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  name: string;
  badge?: string;
  timeAgo: string;
  text: string;
  rating: number;
  highlight?: string;
}

const allReviews: Review[] = [
  {
    name: "Bimal S.",
    badge: "Local Guide",
    timeAgo: "3 months ago",
    text: "Assurant Home Loan was an absolute lifesaver. They helped me close on my home in a record two weeks — something that is nearly impossible with large financial institutions. Sunil Gudala was exceptional throughout the entire process. Their interest rate was also better than other offers I had in the market.",
    rating: 5,
    highlight: "Closed in 2 weeks"
  },
  {
    name: "Ram V.",
    timeAgo: "8 months ago",
    text: "From start to finish, the process was smooth, transparent, and efficient. The team was incredibly knowledgeable and took the time to explain every step. They helped me secure a great rate and made the entire lending process stress-free.",
    rating: 5,
    highlight: "Stress-free process"
  },
  {
    name: "Gopal C.",
    timeAgo: "5 months ago",
    text: "Had a great experience getting my home loan through Assurant home loans. Their team helped me through every step of the way till the loan close. Will work with them again in future should there be any chance.",
    rating: 5,
    highlight: "End-to-end guidance"
  },
  {
    name: "Alok J.",
    timeAgo: "9 months ago",
    text: "Leveraged Assurant for my financing needs and was thoroughly impressed by the level of service and professionalism. What stood out most was their communication — clear, timely, and always focused on keeping things moving without surprises.",
    rating: 5,
    highlight: "Clear communication"
  },
  {
    name: "Rohit K.",
    timeAgo: "10 months ago",
    text: "Excellent experience working with Assurant Home Loans on multiple occasions. They took the time to explain every step clearly, answered all my questions promptly, and made sure I felt confident in my decisions. I highly recommend Sunil Gudala and his team.",
    rating: 5,
    highlight: "Repeat client"
  },
  {
    name: "Srini A.",
    badge: "Local Guide",
    timeAgo: "10 months ago",
    text: "Assurance Home Loans made the loan process feel way too easy. Closed in 20 days. Big shoutout to Sunil, Kiran, and Madhavi — absolute rockstars. They were responsive, available, and on top of everything from start to finish.",
    rating: 5,
    highlight: "Closed in 20 days"
  },
  {
    name: "Kiran K.",
    timeAgo: "1 year ago",
    text: "Assurant team has been super helpful in buying my first home. I had an amazing experience with Sunil and the team. Their professionalism, clear communication, and dedication made my home buying process a breeze.",
    rating: 5,
    highlight: "First-time buyer"
  },
  {
    name: "Prajwal D.",
    badge: "Local Guide",
    timeAgo: "1 year ago",
    text: "Sunil did an excellent job communicating and always being available with full transparency. This is the second time we have worked with Sunil at Assurant home loans. He gave me the best rate — better than any other rate after shopping around.",
    rating: 5,
    highlight: "Best rate guaranteed"
  },
  {
    name: "Dhruv M.",
    badge: "Local Guide",
    timeAgo: "3 months ago",
    text: "Great service by Sunil. Good guidance and promptness shown by the entire team. Highly recommend.",
    rating: 5,
    highlight: "Prompt service"
  },
  {
    name: "Shaiju K.",
    timeAgo: "1 year ago",
    text: "I had opportunity to partner with Assurant home loans not once but three times. I am sure I will reach out to them again in future. Experienced professionals with guidance in every step of home lending process. Hassle-free follow-ups and transparency.",
    rating: 5,
    highlight: "3x repeat client"
  },
  {
    name: "Eddie A.",
    timeAgo: "1 year ago",
    text: "Sunil is highly knowledgeable and very professional. It was a great experience working with him. Looking forward to work with him again.",
    rating: 5,
    highlight: "Deep expertise"
  },
  {
    name: "Sanjeeb",
    timeAgo: "1 year ago",
    text: "Very professional associates and meticulously take care of your requirements and provide competitive products.",
    rating: 5,
    highlight: "Competitive products"
  },
  {
    name: "Santosh V.",
    badge: "Local Guide",
    timeAgo: "9 months ago",
    text: "Outstanding service from start to finish. The team's dedication and professionalism made the entire mortgage process smooth and efficient. Highly recommended for anyone seeking reliable home loan services.",
    rating: 5,
    highlight: "Outstanding service"
  }
];

interface ReviewsCarouselProps {
  /** Optional title to display above the carousel */
  title?: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Whether to show the aggregate stats bar */
  showStats?: boolean;
  /** How many reviews to display (defaults to all) */
  count?: number;
  /** Background variant */
  variant?: 'light' | 'dark';
}

const ReviewCard: React.FC<{ review: Review; variant: 'light' | 'dark' }> = ({ review, variant }) => {
  const isDark = variant === 'dark';
  
  return (
    <div 
      className={`flex-none w-[380px] md:w-[420px] p-8 rounded-[1.75rem] border transition-all duration-300 hover:-translate-y-1 ${
        isDark 
          ? 'bg-white/5 border-white/10 backdrop-blur-sm hover:border-brand-500/30' 
          : 'bg-white border-warm-stone hover:border-brand-400/40 hover:shadow-xl hover:shadow-brand-500/5'
      }`}
      style={{ minHeight: '260px' }}
    >
      {/* Top: Stars + Highlight tag */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex gap-0.5">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-brand-500 text-brand-500" />
          ))}
        </div>
        {review.highlight && (
          <span className={`text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${
            isDark ? 'bg-brand-500/15 text-brand-400' : 'bg-brand-50 text-brand-700'
          }`}>
            {review.highlight}
          </span>
        )}
      </div>

      {/* Quote */}
      <p className={`text-sm leading-relaxed mb-6 line-clamp-5 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        "{review.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${
          isDark ? 'bg-brand-500/20 text-brand-400' : 'bg-brand-50 text-brand-700'
        }`}>
          {review.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-navy-900'}`}>{review.name}</p>
          <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            {review.badge ? `${review.badge} · ` : ''}{review.timeAgo}
          </p>
        </div>
        <div className="ml-auto">
          <svg className={`w-5 h-5 ${isDark ? 'text-white/20' : 'text-gray-200'}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

const ReviewsCarousel: React.FC<ReviewsCarouselProps> = ({ 
  title,
  subtitle,
  showStats = true,
  count,
  variant = 'light'
}) => {
  const isDark = variant === 'dark';
  const reviews = count ? allReviews.slice(0, count) : allReviews;
  // Duplicate for infinite scroll
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section className={`py-20 md:py-28 overflow-hidden relative ${
      isDark 
        ? 'bg-navy-900 text-white' 
        : 'bg-warm-cream'
    }`}>
      {/* Header */}
      <div className="container mx-auto px-6 mb-12">
        {title && (
          <div className="max-w-3xl">
            <span className={`text-xs font-semibold tracking-[0.2em] uppercase mb-4 block ${
              isDark ? 'text-brand-400' : 'text-brand-600'
            }`}>
              5.0 ★ on Google · 13 verified reviews
            </span>
            <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 text-balance ${
              isDark ? 'text-white' : 'text-navy-900'
            }`}>
              {title}
            </h2>
            {subtitle && (
              <p className={`text-lg font-light max-w-xl ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Stats strip */}
        {showStats && (
          <div className={`flex flex-wrap gap-6 md:gap-12 mt-8 pt-6 border-t ${
            isDark ? 'border-white/10' : 'border-warm-stone'
          }`}>
            {[
              { label: 'Google rating', value: '5.0', suffix: '★' },
              { label: 'Verified reviews', value: '13', suffix: '' },
              { label: 'Avg close time', value: '18', suffix: 'days' },
              { label: 'Repeat clients', value: '40', suffix: '%+' },
            ].map((stat, i) => (
              <div key={i}>
                <div className={`text-2xl md:text-3xl font-serif tabular-nums ${isDark ? 'text-white' : 'text-navy-900'}`}>
                  {stat.value}<span className="text-brand-500 text-lg ml-1">{stat.suffix}</span>
                </div>
                <p className={`text-xs font-medium uppercase tracking-widest mt-1 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative">
        {/* Left fade */}
        <div className={`absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none ${
          isDark 
            ? 'bg-gradient-to-r from-navy-900 to-transparent' 
            : 'bg-gradient-to-r from-warm-cream to-transparent'
        }`} />
        {/* Right fade */}
        <div className={`absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none ${
          isDark 
            ? 'bg-gradient-to-l from-navy-900 to-transparent' 
            : 'bg-gradient-to-l from-warm-cream to-transparent'
        }`} />

        <div className="flex gap-6 animate-scroll-left" style={{ width: 'max-content' }}>
          {doubledReviews.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} variant={variant} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
export { allReviews };
export type { Review };
