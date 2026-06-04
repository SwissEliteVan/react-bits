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
      
      {/* Hero Section - Premium Design */}
      <section className="relative bg-gradient-to-br from-slate-950 via-green-950 to-slate-900 text-white py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-green-600/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 inline-block">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 backdrop-blur-sm border border-green-400/30 rounded-full text-green-200 text-sm font-semibold tracking-wide">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Pack Commerce Local
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-10 tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-green-100 to-white drop-shadow-2xl">
                Dominez votre quartier :
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-300 to-green-400 mt-2">
                le pack digital
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-4">
                conçu pour les commerçants suisses
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-green-100 mb-12 leading-relaxed font-light max-w-4xl mx-auto">
              Une solution complète pour <span className="font-semibold text-white">attirer plus de clients</span> et les fidéliser durablement
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="/contact" 
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-10 py-5 rounded-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-lg"
              >
                <span>Demander un devis</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#piliers" 
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold px-10 py-5 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 text-lg"
              >
                Découvrir la solution
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Section: Vos clients vous cherchent en ligne */}
      <section className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-6 py-2 bg-red-100 text-red-700 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                La Réalité du Marché
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Vos clients vous cherchent en ligne
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-10 rounded-full"></div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 via-white to-orange-50 rounded-3xl p-10 md:p-14 shadow-xl border border-red-100">
              <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed">
                <p className="font-light">
                  <span className="font-black text-red-600 text-2xl">91 % des consommateurs suisses</span> effectuent des recherches en ligne avant d'acheter localement, et <span className="font-black text-orange-600 text-2xl">73 % consultent Google Maps</span> avant de visiter un nouveau commerce.
                </p>
                <div className="pt-8 border-t border-gray-200">
                  <p className="text-xl md:text-2xl font-light">
                    Si votre commerce n'est pas visible en ligne, vous <span className="font-bold text-gray-900">perdez des clients chaque jour</span> au profit de vos concurrents qui ont pris le virage digital.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Les 4 piliers de notre solution intégrée */}
      <section id="piliers" className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Solution Complète
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Les 4 piliers de notre solution intégrée
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-10 rounded-full"></div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
                Une approche complète pour <span className="font-semibold text-gray-900">digitaliser votre commerce local</span> et fidéliser vos clients
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Pilier 1 */}
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-gray-100 hover:border-blue-300 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4">
                    Pilier 1
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    Site vitrine optimisé SEO local
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Un site web professionnel, rapide et optimisé pour apparaître en première page des recherches locales. Vos clients vous trouvent facilement quand ils cherchent vos produits ou services.
                  </p>
                </div>
              </div>

              {/* Pilier 2 */}
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-gray-100 hover:border-green-300 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-4">
                    Pilier 2
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    Fiche Google My Business performante
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Optimisation complète de votre présence sur Google Maps et les recherches locales. Apparaissez dans le "Local Pack" et attirez les clients qui cherchent près de chez eux.
                  </p>
                </div>
              </div>

              {/* Pilier 3 */}
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-gray-100 hover:border-purple-300 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    </svg>
                  </div>
                  <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-4">
                    Pilier 3
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    Carte de fidélité digitale NFC
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    <span className="font-bold text-purple-600">Sans application à télécharger !</span> Une simple plaquette en bois sur votre comptoir permet à vos clients de scanner leur téléphone et accumuler des points. Simple, écologique et efficace.
                  </p>
                </div>
              </div>

              {/* Pilier 4 */}
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-gray-100 hover:border-orange-300 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-bold mb-4">
                    Pilier 4
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    Campagnes SMS ciblées
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Avec un taux d'ouverture de <span className="font-bold text-orange-600">98 %</span>, les SMS sont l'outil marketing le plus efficace. Informez vos clients de vos promotions, nouveautés et événements spéciaux.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Simplicité et rentabilité */}
      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-green-950 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block p-6 bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-md rounded-3xl mb-10 border border-green-400/30">
                <svg className="w-16 h-16 text-green-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                Fini les abonnements multiples, <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-400">
                  optez pour la simplicité
                </span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-10 rounded-full"></div>
            </div>
            
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-10 md:p-14 border-2 border-white/20">
              <p className="text-2xl md:text-3xl text-green-100 leading-relaxed mb-12 text-center font-light">
                Une solution <span className="font-bold text-white">tout-en-un</span> est beaucoup plus rentable que de payer des agences classiques et 4 abonnements séparés.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10">
                  <div className="text-lg text-green-200 mb-3 font-semibold">Investissement initial</div>
                  <div className="text-6xl font-black text-white mb-3">~990 CHF</div>
                  <div className="text-lg text-green-200">Configuration complète du pack</div>
                </div>
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10">
                  <div className="text-lg text-blue-200 mb-3 font-semibold">Coût annuel</div>
                  <div className="text-6xl font-black text-white mb-3">~120 CHF</div>
                  <div className="text-lg text-blue-200">Maintenance et hébergement</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-2 border-green-400/30 rounded-2xl p-8">
                <div className="flex items-start gap-6">
                  <svg className="w-10 h-10 text-green-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="font-black text-white mb-4 text-2xl">Économisez des milliers de francs</div>
                    <p className="text-green-100 text-lg leading-relaxed">
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
      <section className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                Des résultats mesurables
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center p-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl border-2 border-blue-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="text-7xl font-black text-blue-600 mb-4">91%</div>
                <div className="text-xl font-bold text-gray-900 mb-2">Recherchent en ligne</div>
                <div className="text-gray-600 text-lg">avant d'acheter localement</div>
              </div>
              <div className="text-center p-10 bg-gradient-to-br from-green-50 via-white to-blue-50 rounded-3xl border-2 border-green-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="text-7xl font-black text-green-600 mb-4">73%</div>
                <div className="text-xl font-bold text-gray-900 mb-2">Consultent Google Maps</div>
                <div className="text-gray-600 text-lg">avant de visiter un commerce</div>
              </div>
              <div className="text-center p-10 bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-3xl border-2 border-purple-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="text-7xl font-black text-purple-600 mb-4">98%</div>
                <div className="text-xl font-bold text-gray-900 mb-2">Taux d'ouverture</div>
                <div className="text-gray-600 text-lg">des SMS marketing</div>
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
