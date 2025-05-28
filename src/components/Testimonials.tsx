
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      location: "Paris 15ème",
      rating: 5,
      comment: "Excellent travail ! L'équipe de RénoPro a transformé notre salon avec un professionnalisme remarquable. Finitions parfaites et délais respectés.",
      project: "Rénovation salon et cuisine",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?q=80&w=150"
    },
    {
      id: 2,
      name: "Jean-Pierre Martin",
      location: "Boulogne-Billancourt",
      rating: 5,
      comment: "Ravalement de façade impeccable. L'équipe est ponctuelle, soigneuse et de très bon conseil. Je recommande vivement leurs services.",
      project: "Ravalement façade",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150"
    },
    {
      id: 3,
      name: "Sophie Leroy",
      location: "Neuilly-sur-Seine",
      rating: 5,
      comment: "Rénovation complète de notre appartement. Travail de qualité, équipe professionnelle et très bon rapport qualité-prix. Parfait !",
      project: "Rénovation appartement",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150"
    },
    {
      id: 4,
      name: "Michel Rousseau",
      location: "Issy-les-Moulineaux",
      rating: 5,
      comment: "Service exceptionnel du devis à la livraison. Très satisfait du résultat et de l'accompagnement tout au long du projet.",
      project: "Peinture intérieure",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Témoignages Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez ce que nos clients pensent de nos services et de la qualité de nos réalisations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  {/* Avatar */}
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                  
                  <div className="flex-1">
                    {/* En-tête */}
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {testimonial.location}
                        </p>
                      </div>
                      
                      {/* Étoiles */}
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, index) => (
                          <Star
                            key={index}
                            size={16}
                            className="text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Citation */}
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 text-blue-200" size={24} />
                      <p className="text-gray-700 leading-relaxed mb-4 pl-6">
                        {testimonial.comment}
                      </p>
                    </div>

                    {/* Type de projet */}
                    <div className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistiques de satisfaction */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Satisfaction Client
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
                <div className="text-gray-600">Note moyenne</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Recommandations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
