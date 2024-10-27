import React from 'react';
import { Shield } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-teal-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Risikomanagement im Gesundheitswesen
            </h1>
            <p className="text-xl mb-6">
              Mehr als nur Prävention – ein entscheidender Pfeiler der Qualitätssicherung, der die Patientensicherheit in den Mittelpunkt stellt.
            </p>
            <a
              href="#ueber-uns"
              className="inline-block bg-white text-teal-700 font-bold py-3 px-6 rounded-full hover:bg-teal-100 transition-colors duration-300"
            >
              Mehr erfahren
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Shield size={200} className="text-white opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;