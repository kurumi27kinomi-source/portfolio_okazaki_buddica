import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Cover from './components/slides/Cover';
import AboutMe from './components/slides/AboutMe';
import Philosophy from './components/slides/Philosophy';
import Groppy from './components/slides/Groppy';
import AiDriven from './components/slides/AiDriven';
import TechStack from './components/slides/TechStack';
import Credo from './components/slides/Credo';
import FutureVision from './components/slides/FutureVision';

const slides = [
  { component: Cover, title: 'カバー' },
  { component: AboutMe, title: '自己紹介' },
  { component: Philosophy, title: '理念共感' },
  { component: Groppy, title: 'Groppy構想' },
  { component: AiDriven, title: 'AI×人協働' },
  { component: TechStack, title: 'Tech Stack' },
  { component: Credo, title: 'CREDO' },
  { component: FutureVision, title: '今後の展望' },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="relative w-full h-screen">
      <div ref={scrollContainerRef} className="absolute inset-0 overflow-y-auto">
        <CurrentSlideComponent />
      </div>
      

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="fixed left-6 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-200 hover:bg-white transition-all hover:scale-110 disabled:opacity-50 disabled:hover:scale-100 z-50"
        disabled={currentSlide === 0}
      >
        <ChevronLeft className="w-6 h-6 text-slate-700" />
      </button>
      
      <button
        onClick={nextSlide}
        className="fixed right-6 top-1/2 -translate-y-1/2 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-200 hover:bg-white transition-all hover:scale-110 disabled:opacity-50 disabled:hover:scale-100 z-50"
        disabled={currentSlide === slides.length - 1}
      >
        <ChevronRight className="w-6 h-6 text-slate-700" />
      </button>
      
      {/* Slide Indicators */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-200 z-50">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? 'w-8 h-2 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full'
                : 'w-2 h-2 bg-slate-300 rounded-full hover:bg-slate-400'
            }`}
            title={slide.title}
          />
        ))}
      </div>
      
      {/* Slide Counter */}
      <div className="fixed top-8 right-8 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-slate-200 z-50">
        <span className="text-slate-700">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}
