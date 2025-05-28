
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Clock, CheckCircle } from "lucide-react";

const InteractiveMap = () => {
  const [mapboxToken, setMapboxToken] = useState("");
  const [showTokenInput, setShowTokenInput] = useState(true);

  const interventionZones = [
    { name: "Paris", postal: "75001-75020", delay: "24h" },
    { name: "Hauts-de-Seine", postal: "92xxx", delay: "48h" },
    { name: "Seine-Saint-Denis", postal: "93xxx", delay: "48h" },
    { name: "Val-de-Marne", postal: "94xxx", delay: "48h" },
    { name: "Yvelines", postal: "78xxx", delay: "72h" },
    { name: "Essonne", postal: "91xxx", delay: "72h" },
    { name: "Seine-et-Marne", postal: "77xxx", delay: "72h" },
    { name: "Val-d'Oise", postal: "95xxx", delay: "72h" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Zones d'Intervention
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nous intervenons dans toute l'Île-de-France avec des délais d'intervention optimisés.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Carte interactive */}
          <div className="space-y-6">
            {showTokenInput ? (
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-800">
                    <MapPin className="mr-2" size={24} />
                    Configuration de la carte
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-blue-700 text-sm">
                    Pour afficher la carte interactive, veuillez entrer votre token Mapbox public.
                    Vous pouvez l'obtenir gratuitement sur{" "}
                    <a 
                      href="https://mapbox.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="underline font-medium"
                    >
                      mapbox.com
                    </a>
                  </p>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="pk.eyJ1IjoiZXhhbXBsZS..."
                      value={mapboxToken}
                      onChange={(e) => setMapboxToken(e.target.value)}
                      className="flex-1"
                    />
                    <Button 
                      onClick={() => {
                        if (mapboxToken.trim()) {
                          setShowTokenInput(false);
                        }
                      }}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Afficher
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700">
                  <div className="text-center text-white">
                    <MapPin size={48} className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Carte Interactive</h3>
                    <p className="text-blue-100">Zones d'intervention Île-de-France</p>
                  </div>
                </div>
                {/* Simulation de marqueurs */}
                <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                
                <Button
                  className="absolute top-4 right-4 bg-white text-gray-700 hover:bg-gray-100"
                  size="sm"
                  onClick={() => setShowTokenInput(true)}
                >
                  Configurer
                </Button>
              </div>
            )}

            {/* Informations contact */}
            <Card className="bg-gray-50 border-0">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <Phone className="text-blue-600 mb-2" size={24} />
                    <h3 className="font-semibold text-gray-900">Contact</h3>
                    <p className="text-gray-600 text-sm">06 12 34 56 78</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Clock className="text-blue-600 mb-2" size={24} />
                    <h3 className="font-semibold text-gray-900">Horaires</h3>
                    <p className="text-gray-600 text-sm">Lun-Ven 8h-18h</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <CheckCircle className="text-blue-600 mb-2" size={24} />
                    <h3 className="font-semibold text-gray-900">Devis</h3>
                    <p className="text-gray-600 text-sm">Gratuit sous 24h</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Liste des zones */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Départements couverts
            </h3>
            
            <div className="space-y-3">
              {interventionZones.map((zone, index) => (
                <Card key={index} className="border border-gray-200 hover:border-blue-300 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{zone.name}</h4>
                          <p className="text-sm text-gray-600">{zone.postal}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-green-600">
                          Délai : {zone.delay}
                        </div>
                        <div className="text-xs text-gray-500">
                          Intervention rapide
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-blue-600 text-white border-0 mt-6">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Votre zone n'est pas listée ?
                </h3>
                <p className="text-blue-100 mb-4">
                  Contactez-nous ! Nous étudions toutes les demandes et pouvons intervenir 
                  dans d'autres départements selon la nature du projet.
                </p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  Nous contacter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
