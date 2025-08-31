import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroImage1 from "@/assets/hero-jewelry.jpg";
import heroImage2 from "@/assets/hero-jewelry-1.jpg"
// Add 2 more images (use your own or Unsplash links)
const heroImages = [
  heroImage1,
  heroImage2,
  // add more images here as you import them
];


const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: `url(${heroImages[current]})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider">
            BUY 1 GET 1
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            FREE
          </h2>
          <div className="text-2xl md:text-3xl font-semibold mb-8">
            CODE: B1G1
          </div>

          <Button variant="hero" size="lg" className="text-lg px-12 py-6">
            Shop Now
          </Button>

          <p className="mt-4 text-lg opacity-90">
            Apply code at checkout
          </p>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === current ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
export default HeroSection