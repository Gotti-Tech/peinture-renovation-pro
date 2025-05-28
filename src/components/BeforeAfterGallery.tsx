
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BeforeAfterGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Rénovation salon moderne",
      before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800",
      after: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&sat=-50",
      description: "Transformation complète d'un salon avec peinture moderne et aménagement."
    },
    {
      id: 2,
      title: "Façade maison familiale",
      before: "https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=800&sat=-30",
      after: "https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=800",
      description: "Ravalement complet de façade avec isolation et peinture haute qualité."
    },
    {
      id: 3,
      title: "Cuisine contemporaine",
      before: "https://images.unsplash.com/photo-1556909045-f7c6c73b4241?q=80&w=800&sat=-40",
      after: "https://images.unsplash.com/photo-1556909045-f7c6c73b4241?q=80&w=800",
      description: "Rénovation cuisine avec peinture et aménagements sur mesure."
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="realisations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez la transformation de nos projets à travers notre galerie avant/après.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Projet principal */}
          <Card className="bg-white shadow-xl border-0 overflow-hidden mb-8">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Avant */}
                <div className="relative group">
                  <img
                    src={currentProject.before}
                    alt="Avant rénovation"
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Avant
                  </div>
                </div>

                {/* Image Après */}
                <div className="relative group">
                  <img
                    src={currentProject.after}
                    alt="Après rénovation"
                    className="w-full h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Après
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {currentProject.title}
                    </h3>
                    <p className="text-gray-600">
                      {currentProject.description}
                    </p>
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={prevProject}
                      className="w-10 h-10 p-0"
                    >
                      <ChevronLeft size={16} />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={nextProject}
                      className="w-10 h-10 p-0"
                    >
                      <ChevronRight size={16} />
                    </Button>
                  </div>
                </div>

                {/* Indicateurs */}
                <div className="flex justify-center space-x-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Miniatures */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`cursor-pointer transition-all duration-300 border-2 ${
                  index === currentIndex
                    ? 'border-blue-600 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-video">
                    <img
                      src={project.after}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-t"
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="font-medium text-sm text-gray-900 truncate">
                      {project.title}
                    </h4>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
