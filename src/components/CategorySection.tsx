import React from "react";
import { Button } from "@/components/ui/button";

const CategorySection = () => {
  const categories = [
    {
      title: "EVERYDAY DEMIFINE JEWELLERY",
      description: "Elegant pieces for daily wear",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=300&fit=crop",
    },
    {
      title: "TENNIS COLLECTION",
      description: "Classic and timeless designs",
      image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=300&fit=crop",
    },
    {
      title: "OMBRE COLLECTION",
      description: "Gradient beauty in jewelry form",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=300&fit=crop",
    },

{
      title: "EVIL EYE PROTECTION",
      description: "Protective and stylish accessories",
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=400&h=300&fit=crop",
    },
    {
      title: "LGD DIAMOND COLLECTION",
      description: "Lab grown diamond luxury",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop",
    },
    {
      title: "MANGALSUTRA COLLECTION",
      description: "Traditional with modern twist",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-gradient-champagne">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          EVERYDAY DEMIFINE JEWELLERY
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-elegant hover:shadow-luxury transition-all duration-500 group-hover:scale-105">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-luxury-gold-light transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-4">
                    {category.description}
                  </p>
                  <Button variant="elegant" size="sm" className="w-fit">
                    Explore Collection
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;