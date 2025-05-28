
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Paintbrush, Home, Wrench, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Paintbrush,
      title: "Peinture intérieure",
      description: "Peinture de tous vos espaces intérieurs avec des finitions impeccables et des produits de qualité.",
      features: ["Préparation des surfaces", "Peinture écologique", "Finitions soignées"]
    },
    {
      icon: Home,
      title: "Peinture extérieure", 
      description: "Ravalement de façades et peinture extérieure pour protéger et embellir votre habitat.",
      features: ["Ravalement façade", "Peinture anti-UV", "Protection longue durée"]
    },
    {
      icon: Wrench,
      title: "Rénovation complète",
      description: "Rénovation globale de vos espaces : sols, murs, plafonds, aménagements sur mesure.",
      features: ["Rénovation clé en main", "Aménagement", "Coordination métiers"]
    },
    {
      icon: Shield,
      title: "Expertise & Conseil",
      description: "Conseils personnalisés et expertise technique pour vos projets de rénovation.",
      features: ["Étude de faisabilité", "Choix des matériaux", "Suivi de chantier"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des prestations complètes pour tous vos projets de peinture et rénovation, 
            réalisées par des artisans qualifiés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-700 flex items-center justify-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
