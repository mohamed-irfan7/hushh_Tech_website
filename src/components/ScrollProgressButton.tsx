import React, { useState, useEffect } from 'react';

export default function ScrollProgressButton() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (windowHeight === 0) {
        setScrollProgress(0);
        return;
      }

      const progress = totalScroll / windowHeight;
      setScrollProgress(progress);

      // Show button after scrolling down 200px
      if (totalScroll > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // SVG Circle parameters
  const radius = 22;
  const strokeWidth = 3;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      className={`fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-[100] group flex items-center justify-center rounded-full p-1 bg-white/80 dark:bg-[#151515]/80 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      {/* SVG Progress Ring */}
      <svg
        height={radius * 2}
        width={radius * 2}
        className="absolute inset-0 -rotate-90 pointer-events-none"
      >
        {/* Background track circle */}
        <circle
          stroke="currentColor"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="text-gray-100 dark:text-white/5"
        />
        {/* Progress fill circle */}
        <circle
          stroke="currentColor"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.1s linear' }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="text-[#2F80ED] dark:text-[#2F80ED]"
          strokeLinecap="round"
        />
      </svg>

      {/* Up Arrow Icon */}
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent text-gray-700 dark:text-gray-200 group-hover:text-[#2F80ED] dark:group-hover:text-[#2F80ED] transition-colors relative z-10">
        <span className="material-symbols-outlined !text-[1.3rem] font-medium transition-transform duration-300 group-hover:-translate-y-0.5">
          arrow_upward
        </span>
      </div>
    </button>
  );
}
