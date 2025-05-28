
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Contenu principal du footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* À propos */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">RénoPro</h3>
            <p className="text-gray-300 leading-relaxed">
              Spécialistes en peinture et rénovation depuis 15 ans. 
              Nous transformons vos espaces avec passion et professionnalisme.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800">
                <Facebook size={16} />
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800">
                <Instagram size={16} />
              </Button>
              <Button variant="outline" size="sm" className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800">
                <Linkedin size={16} />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Nos Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Peinture intérieure</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Peinture extérieure</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Ravalement de façade</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Rénovation complète</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Conseil et expertise</a></li>
            </ul>
          </div>

          {/* Liens utiles */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Liens Utiles</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Devis gratuit</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Nos réalisations</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Témoignages</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog conseil</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Questions fréquentes</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span>06 12 34 56 78</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span>contact@renopro.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-blue-400" />
                <span>Île-de-France</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-blue-400" />
                <span>Lun-Ven : 8h-18h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de certification */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-blue-400 font-semibold">Certification RGE</div>
              <div className="text-gray-400 text-sm">Reconnu Garant de l'Environnement</div>
            </div>
            <div className="space-y-2">
              <div className="text-blue-400 font-semibold">Assurance Décennale</div>
              <div className="text-gray-400 text-sm">Travaux garantis 10 ans</div>
            </div>
            <div className="space-y-2">
              <div className="text-blue-400 font-semibold">Qualibat</div>
              <div className="text-gray-400 text-sm">Qualification professionnelle</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-gray-800 text-center text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>&copy; 2024 RénoPro. Tous droits réservés.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-blue-400 transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
