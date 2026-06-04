import React, { useEffect } from 'react';
import Navbar from '@/components/landingnew/Navbar/Navbar';
import Footer from '@/components/landingnew/Footer/Footer';
import CTA from '@/components/landingnew/CTA/CTA';

const DigitalisationCommerceLocal = () => {
  // SEO: Update document title and meta description
  useEffect(() => {
    document.title = 'Pack Digitalisation Commerce Local et Fidélité NFC | Clicom';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Attirez plus de clients dans votre commerce avec notre pack : site web, Google My Business, carte de fidélité NFC sans application et SMS marketing.');
    }

    // Update OG tags for social sharing
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Pack Digitalisation Commerce Local et Fidélité NFC | Clicom');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Attirez plus de clients dans votre commerce avec notre pack : site web, Google My Business, carte de fidélité NFC sans application et SMS marketing.');
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', 'Pack Digitalisation Commerce Local et Fidélité NFC | Clicom');
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', 'Attirez plus de clients dans votre commerce avec notre pack : site web, Google My Business, carte de fidélité NFC sans application et SMS marketing.');
    }
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Dominez votre quartier : le pack digital conçu pour les commerçants suisses
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Une solution complète pour attirer plus de clients et les fidéliser durablement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/contact" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Demander un devis
              </a>
              <a 
                href="#piliers" 
                className="inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300"
              >
                Découvrir la solution
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Vos clients vous cherchent en ligne */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
              Vos clients vous cherchent en ligne
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>
                <strong>91 % des consommateurs suisses</strong> effectuent des recherches en ligne avant d'acheter localement, et <strong>73 % consultent Google Maps</strong> avant de visiter un nouveau commerce.
              </p>
              <p>
                Si votre commerce n'est pas visible en ligne, vous perdez des clients chaque jour au profit de vos concurrents qui ont pris le virage digital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Les 4 piliers de notre solution intégrée */}
      <section id="piliers" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Les 4 piliers de notre solution intégrée
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Une approche complète pour digitaliser votre commerce local et fidéliser vos clients
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Pilier 1 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Site vitrine optimisé SEO local
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Un site web professionnel, rapide et optimisé pour apparaître en première page des recherches locales. Vos clients vous trouvent facilement quand ils cherchent vos produits ou services.
                </p>
              </div>

              {/* Pilier 2 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-green-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Fiche Google My Business performante
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Optimisation complète de votre présence sur Google Maps et les recherches locales. Apparaissez dans le "Local Pack" et attirez les clients qui cherchent près de chez eux.
                </p>
              </div>

              {/* Pilier 3 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-purple-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Carte de fidélité digitale NFC
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sans application à télécharger ! Une simple plaquette en bois sur votre comptoir permet à vos clients de scanner leur téléphone et accumuler des points. Simple, écologique et efficace.
                </p>
              </div>

              {/* Pilier 4 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-orange-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Campagnes SMS ciblées
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Avec un taux d'ouverture de 98 %, les SMS sont l'outil marketing le plus efficace. Informez vos clients de vos promotions, nouveautés et événements spéciaux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Simplicité et rentabilité */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                <svg className="w-12 h-12 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Fini les abonnements multiples, optez pour la simplicité
              </h2>
              <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/20">
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
                Une solution tout-en-un est beaucoup plus rentable que de payer des agences classiques et 4 abonnements séparés.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="text-sm text-blue-200 mb-2">Investissement initial</div>
                  <div className="text-4xl font-bold text-white mb-2">~990 CHF</div>
                  <div className="text-sm text-blue-200">Configuration complète du pack</div>
                </div>
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="text-sm text-blue-200 mb-2">Coût annuel</div>
                  <div className="text-4xl font-bold text-white mb-2">~120 CHF</div>
                  <div className="text-sm text-blue-200">Maintenance et hébergement</div>
                </div>
              </div>
              
              <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-semibold text-white mb-2">Économisez des milliers de francs</div>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Comparé à l'achat séparé d'un site web (2000-5000 CHF), d'un système de fidélité (500-1000 CHF/an), d'une gestion Google My Business (300-600 CHF/an) et d'une plateforme SMS (200-400 CHF/an).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Statistiques clés */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Des résultats mesurables
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100">
                <div className="text-5xl font-bold text-blue-600 mb-2">91%</div>
                <div className="text-gray-700 font-medium">Recherchent en ligne avant d'acheter</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-100">
                <div className="text-5xl font-bold text-green-600 mb-2">73%</div>
                <div className="text-gray-700 font-medium">Consultent Google Maps</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-100">
                <div className="text-5xl font-bold text-purple-600 mb-2">98%</div>
                <div className="text-gray-700 font-medium">Taux d'ouverture des SMS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
};

export default DigitalisationCommerceLocal;
