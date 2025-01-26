import React, { useState, useEffect } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

interface ServiceOption {
  service: string;
  description: string;
  price: number;
  image?: string;
}

const CarouselComponent: React.FC = () => {
  const [isAtStart, setIsAtStart] = useState<boolean>(true);
  const [isAtEnd, setIsAtEnd] = useState<boolean>(false);
  const  ServicesOptions: ServiceOption[] = [
    {
      service: 'Lavage Auto',
      description:
        'Nettoyage intérieur et extérieur complet de votre véhicule.',
      price: 20,
      image : 'https://images.unsplash.com/photo-1605164599894-ca98960d41b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhdmFnZSUyMGF1dG98ZW58MHx8MHx8fDA%3D',
    },
    {
      service: 'Pression des Pneus',
      description: 'Vérification et ajustement de la pression des pneus.',
      price: 5,
      image : 'https://images.unsplash.com/photo-1605164599894-ca98960d41b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhdmFnZSUyMGF1dG98ZW58MHx8MHx8fDA%3D',
    },
    {
      service: 'Contrôle Technique',
      description: 'Préparation et passage au contrôle technique.',
      price: 70,
      image : 'https://images.unsplash.com/photo-1605164599894-ca98960d41b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhdmFnZSUyMGF1dG98ZW58MHx8MHx8fDA%3D',
    },
    {
      service: 'Nettoyage des Jantes',
      description:
        'Nettoyage approfondi des jantes pour leur redonner de l’éclat.',
      price: 15,
      image : 'https://images.unsplash.com/photo-1605164599894-ca98960d41b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhdmFnZSUyMGF1dG98ZW58MHx8MHx8fDA%3D',
    },
    {
      service: 'Traitement Anti-Rayures',
      description: 'Application d’un traitement pour atténuer les rayures.',
      price: 50,
      image : 'https://images.unsplash.com/photo-1605164599894-ca98960d41b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxhdmFnZSUyMGF1dG98ZW58MHx8MHx8fDA%3D',
    },
  ];
  useEffect(() => {
    const carousel = document.getElementById("carroussel") as HTMLDivElement;

    const handleScroll = () => {
      if (carousel) {
        setIsAtStart(carousel.scrollLeft === 0);
        setIsAtEnd(
          carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth
        );
      }
    };

    carousel?.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on component mount
    return () => carousel?.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollLeft = () => {
    const carousel = document.getElementById("carroussel") as HTMLDivElement;
    carousel?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    const carousel = document.getElementById("carroussel") as HTMLDivElement;
    carousel?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div>
      <div
        id="carroussel"
        className="overflow-x-auto flex space-x-6 py-4 px-6 scrollbar-hide"
      >
        {ServicesOptions.map((option, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-white border border-gray-300 rounded-xl shadow-lg flex flex-col"
          >
            <img
              src={option.image || ""}
              alt={option.service}
              className="w-full object-cover rounded-t-xl"
            />
            <div className="p-4 flex flex-col h-full">
              <h3 className="text-lg font-semibold mb-2">{option.service}</h3>
              <p className="text-gray-600 mb-4">{option.description}</p>
              <div className="mt-auto">
                <p className="text-gray-700">{option.price} €</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-8 mt-4">
        {/* Left Button */}
        {!isAtStart && (
          <button
            className="bg-gray-800 text-white p-3 rounded-full shadow hover:bg-gray-600 transition"
            onClick={scrollLeft}
            aria-label="Scroll Left"
          >
            <ArrowBigLeft />
          </button>
        )}

        {/* Right Button */}
        {!isAtEnd && (
          <button
            className="bg-gray-800 text-white p-3 rounded-full shadow hover:bg-gray-600 transition"
            onClick={scrollRight}
            aria-label="Scroll Right"
          >
            <ArrowBigRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default CarouselComponent;
