import React, { useState } from 'react';
import {
  Car,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Award,
  ThumbsUp,
  Wallet,
  Zap,
  Umbrella,
  Star,
  Quote,
  ArrowBigLeft,
  ArrowBigRight
} from 'lucide-react';

import Testimonials from './sections/testimonials';
import Contact from './sections/contact';
import Footer from './sections/footer';
import Navbar from './sections/navbar';
import CarouselComponent from './sections/carroussel';

function App() {
  const [departureDate, setDepartureDate] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [airport, setAirport] = useState('');
  const [service, setService] = useState('standard');

  const prices = {
    standard: 49,
    premium: 79,
    luxe: 129,
  };

  const seasonalPrices = [
    {
      duration: '1-3 jours',
      lowSeason: 49,
      highSeason: 59,
    },
    {
      duration: '4-7 jours',
      lowSeason: 89,
      highSeason: 99,
    },
    {
      duration: '8-14 jours',
      lowSeason: 129,
      highSeason: 149,
    },
    {
      duration: '15-21 jours',
      lowSeason: 169,
      highSeason: 189,
    },
    {
      duration: '22-30 jours',
      lowSeason: 199,
      highSeason: 229,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="relative min-h-screen">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1593780261803-f444c8488a44?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhcmtpbmd8ZW58MHx8MHx8fDA%3D')",
              backgroundAttachment: 'fixed',
            }}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <Navbar />

        <div className="relative z-10 flex items-center justify-center min-h-screen pt-20 pb-12 px-6">
          <div className="w-full max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl md:text-5xl font-bold text-white mb-6">
                Service Voiturier <span className='text-brand-gold'>Premium</span> 
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                Un service d'excellence pour vos événements prestigieux
              </p>
            </div>

            <div className="bg-white backdrop-blur rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Réserver un voiturier
              </h3>
              <form className="space-y-6">
              <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">Aéroport</label>
    <select
      value={airport}
      onChange={(e) => setAirport(e.target.value)}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      required
    >
      <option value="" disabled>
        Sélectionnez un aéroport
      </option>
      <option value="Nice">Aéroport de Nice</option>
      <option value="Marseille">Aéroport de Marseille</option>
      <option value="Nîmes">Aéroport de Nîmes</option>
    </select>
  </div>
           
               
                <div className="grid md:grid-cols-2 gap-4"> 
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Date de départ
                    </label>
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Heure de départ
                    </label>
                    <input
                      type="time"
                      value={departureTime}
                      onChange={(e) => setDepartureTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Date d'arrivée
                    </label>
                    <input
                      type="date"
                      value={arrivalDate}
                      onChange={(e) => setArrivalDate(e.target.value)}
                      min={
                        departureDate || new Date().toISOString().split('T')[0]
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Heure d'arrivée
                    </label>
                    <input
                      type="time"
                      value={arrivalTime}
                      onChange={(e) => setArrivalTime(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Service
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    required
                  >
                    <option value="standard">
                      Standard - {prices.standard}€
                    </option>
                    <option value="premium">Premium - {prices.premium}€</option>
                    <option value="luxe">Luxe - {prices.luxe}€</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gray-800 text-white px-6 py-4 rounded-full font-semibold hover:bg-blue-500 transition text-lg"
                  >
                    Obtenir mon Tarifs
                  </button>
                </div>

                <div className="text-center text-sm text-gray-600">
                  <p>Prix à partir de {prices.standard}€</p>
                  <p className="mt-1">Réservation instantanée 24/7</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </header>
                    

      <section className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-6 mb-20">
    <div>
      <p className="text-3xl md:text-3xl text-brand-blue">Comment ça marche ?</p>
      <h2 className="text-5xl md:text-5xl font-bold mb-6">
        Votre parking avec service voiturier privé
      </h2>
      <p className="text-xl mb-3 text-gray-700">
        French Voiturier réceptionne votre véhicule à l’aéroport, puis le gare
        dans son parking sécurisé et vous le ramène sans délai à votre retour.
      </p>
      <p className="text-xl text-gray-700">
        À votre arrivée au terminal, un de nos voituriers professionnels vous
        attendra pour récupérer votre véhicule. Nous effectuons un état des
        lieux gratuit et complet de votre véhicule sur place, vous assurant une
        totale transparence.
      </p>
    </div>
  </div>

  <div className="relative mx-auto p-20 bg-brand-blue text-center ">
    <div className="relative z-10 md:max-w-2xl mx-auto">
      <h3 className="text-xl text-brand-gold font-semibold">
        Des Experts du domaine
      </h3>
      <h2 className="text-5xl md:text-5xl font-bold text-white mb-6">
        Pourquoi choisir French Voiturier & Co ?
      </h2>
      <p className="text-xl text-gray-200 mb-10">
        Des prix transparents et compétitifs pour votre stationnement à
        l'aéroport de Lyon, Marseille, Nîmes, Nice.
      </p>

      <a
        href="https://parkboost-app.netlify.app"
        target="_blank"
        className="hover:border hover:border-white hover:border-2 hover:transition bg-gray-900 rounded-full px-12 py-4 mt-4 font-semibold text-white"
        rel="noopener noreferrer"
      >
        Réservez maintenant
      </a>
    </div>

    <img
      src="public/img/plane-icon.png"
      className="absolute right-10 -bottom-20 w-64 h-64 z-0"
      alt="plane icon"
    />
  </div>
</section>


      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Un service aux multiples avantages
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Découvrez pourquoi nos clients nous font confiance
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 ">
            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wallet className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Budget</h3>
              <p className="text-gray-600">
                Trouvez un parking au meilleur prix sur le marché
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Rapide</h3>
              <p className="text-gray-600">
                Profitez d'un service qui ne vous fait pas perdre de temps
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Sécurisé</h3>
              <p className="text-gray-600">
                Voyagez sereinement en laissant votre voiture entre de bonnes
                mains
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6 ">
                <Umbrella className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Parking couvert
              </h3>
              <p className="text-gray-600">
                Protégez votre voiture des intempéries en la laissant dans un
                parking couvert
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50 ">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Nos Services
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Service Voiturier</h3>
              <p className="text-gray-600">
                Service professionnel pour vos événements et soirées
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sécurité Garantie</h3>
              <p className="text-gray-600">
                Protection et surveillance de vos véhicules
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">Service Premium</h3>
              <p className="text-gray-600">
                Une expérience haut de gamme personnalisée
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            Nos Tarifs
          </h2>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Des prix transparents et compétitifs pour votre stationnement à
            l'aéroport de Lyon
          </p>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="py-4 px-6 text-left">Durée</th>
                    <th className="py-4 px-6 text-center">Basse Saison</th>
                    <th className="py-4 px-6 text-center">Haute Saison*</th>
                  </tr>
                </thead>
                <tbody>
                  {seasonalPrices.map((price, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      } hover:bg-gray-100 transition-colors`}
                    >
                      <td className="py-4 px-6 font-medium">
                        {price.duration}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {price.lowSeason}€
                      </td>
                      <td className="py-4 px-6 text-center">
                        {price.highSeason}€
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="max-w-6xl mx-auto py-10 relative">
            <h2 className="text-3xl font-bold text-center mb-8">Nos Options</h2>
            {/* Carousel Wrapper */}
            <CarouselComponent />
          </div>

          <div className="text-sm text-gray-500 mb-12">
            * Les tarifs haute saison s'appliquent pendant les vacances
            scolaires et les périodes de forte affluence
          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-500 transition-colors text-lg group"
            >
              <Car className="w-5 h-5 mr-2 transition-transform group-hover:translate-x-1" />
              Réserver maintenant
            </a>
            <p className="mt-4 text-gray-600">
              Réservation simple et rapide - Confirmation immédiate
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
              <Shield className="w-10 h-10 text-gray-900 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Paiement Sécurisé</h3>
              <p className="text-gray-600 text-sm">
                Transactions protégées et sécurisées
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
              <Clock className="w-10 h-10 text-gray-900 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Disponible 24/7</h3>
              <p className="text-gray-600 text-sm">
                Service client joignable à tout moment
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-gray-200">
              <ThumbsUp className="w-10 h-10 text-gray-900 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Satisfaction Garantie</h3>
              <p className="text-gray-600 text-sm">
                Plus de 50 000 clients satisfaits
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
