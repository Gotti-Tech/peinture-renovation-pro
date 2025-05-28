
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Calculator, Send } from "lucide-react";

const QuoteForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    projectType: "",
    surface: "",
    budget: "",
    description: "",
    urgency: "",
    newsletter: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons dans les 24h pour établir votre devis personnalisé.",
    });

    setIsLoading(false);
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      projectType: "",
      surface: "",
      budget: "",
      description: "",
      urgency: "",
      newsletter: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Demande de Devis Gratuit
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Obtenez une estimation personnalisée pour vos travaux de peinture et rénovation.
            Réponse sous 24h garantie.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informations contact */}
            <div className="lg:col-span-1">
              <Card className="bg-blue-600 text-white border-0">
                <CardHeader>
                  <CardTitle className="flex items-center text-white">
                    <Calculator className="mr-2" size={24} />
                    Devis Personnalisé
                  </CardTitle>
                  <CardDescription className="text-blue-100">
                    Gratuit et sans engagement
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Pourquoi nous choisir ?</h3>
                    <ul className="space-y-2 text-sm text-blue-100">
                      <li>• Devis détaillé sous 24h</li>
                      <li>• Artisans qualifiés RGE</li>
                      <li>• Garantie décennale</li>
                      <li>• Matériaux de qualité</li>
                      <li>• Suivi personnalisé</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Contact direct</h3>
                    <div className="space-y-2 text-sm text-blue-100">
                      <p>📞 06 12 34 56 78</p>
                      <p>✉️ contact@renopro.fr</p>
                      <p>📍 Zone d'intervention : Île-de-France</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Informations personnelles */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Téléphone *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Adresse du chantier *</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        required
                        className="mt-1"
                        placeholder="Adresse complète du projet"
                      />
                    </div>

                    {/* Détails du projet */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="projectType">Type de projet *</Label>
                        <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="peinture-interieure">Peinture intérieure</SelectItem>
                            <SelectItem value="peinture-exterieure">Peinture extérieure</SelectItem>
                            <SelectItem value="ravalement">Ravalement de façade</SelectItem>
                            <SelectItem value="renovation">Rénovation complète</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="surface">Surface approximative</Label>
                        <Input
                          id="surface"
                          value={formData.surface}
                          onChange={(e) => handleInputChange("surface", e.target.value)}
                          className="mt-1"
                          placeholder="ex: 100 m²"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="budget">Budget approximatif</Label>
                        <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="moins-5000">Moins de 5 000€</SelectItem>
                            <SelectItem value="5000-15000">5 000€ - 15 000€</SelectItem>
                            <SelectItem value="15000-30000">15 000€ - 30 000€</SelectItem>
                            <SelectItem value="plus-30000">Plus de 30 000€</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="urgency">Délai souhaité</Label>
                        <Select value={formData.urgency} onValueChange={(value) => handleInputChange("urgency", value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Sélectionnez" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">Urgent (< 1 mois)</SelectItem>
                            <SelectItem value="rapide">Rapide (1-3 mois)</SelectItem>
                            <SelectItem value="normal">Normal (3-6 mois)</SelectItem>
                            <SelectItem value="flexible">Flexible (> 6 mois)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">Description du projet</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        className="mt-1"
                        rows={4}
                        placeholder="Décrivez votre projet en détail : pièces concernées, finitions souhaitées, contraintes particulières..."
                      />
                    </div>

                    {/* Newsletter */}
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", !!checked)}
                      />
                      <Label htmlFor="newsletter" className="text-sm text-gray-600">
                        Je souhaite recevoir des conseils et offres spéciales par email
                      </Label>
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        "Envoi en cours..."
                      ) : (
                        <>
                          <Send className="mr-2" size={20} />
                          Demander mon devis gratuit
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      En soumettant ce formulaire, vous acceptez d'être contacté par nos équipes. 
                      Vos données sont protégées et ne seront jamais transmises à des tiers.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
