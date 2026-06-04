import React, { useEffect } from 'react';
import Navbar from '@/components/landingnew/Navbar/Navbar';
import Footer from '@/components/landingnew/Footer/Footer';
import CTA from '@/components/landingnew/CTA/CTA';

const Accueil = () => {
  // SEO: Update document title and meta description
  useEffect(() => {
    document.title = 'Clicom - Agence Web Suisse | Sites Web, IA & Marketing Digital 2026';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Clicom : votre agence web suisse spécialisée en création de sites, automatisation IA, digitalisation commerce local et conformité RGPD. Solutions digitales pour PME.');
    }

    // Update OG tags for social sharing
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Clicom - Agence Web Suisse | Sites Web, IA & Marketing Digital 2026');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Clicom : votre agence web suisse spécialisée en création de sites, automatisation IA, digitalisation commerce local et conformité RGPD. Solutions digitales pour PME.');
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', 'Clicom - Agence Web Suisse | Sites Web, IA & Marketing Digital 2026');
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', 'Clicom : votre agence web suisse spécialisée en création de sites, automatisation IA, digitalisation commerce local et conformité RGPD. Solutions digitales pour PME.');
    }
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section - Premium Design */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-white py-32 md:py-40 lg:py-56 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8 inline-block">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200 text-sm font-semibold tracking-wide">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Agence Web Suisse 2026
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-10 tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-2xl">
                Transformez votre PME
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 mt-2">
                avec le digital
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-12 leading-relaxed font-light max-w-4xl mx-auto">
              Sites web ultra-rapides, automatisation IA, digitalisation commerce local et conformité RGPD
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <a 
                href="/contact" 
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-10 py-5 rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-lg"
              >
                <span>Démarrer votre projet</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#services" 
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold px-10 py-5 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 text-lg"
              >
                Découvrir nos services
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Section: Nos Services */}
      <section id="services" className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Nos Services
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Des solutions digitales <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">complètes pour votre PME</span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-10 rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Service 1 - Webdesign */}
              <a href="/creation-site-web-design" className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-gray-100 hover:border-blue-300 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    Création de Sites Web & Webdesign
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Sites vitrines et e-commerce ultra-rapides, éco-conçus et optimisés mobile-first pour convertir vos visiteurs.
                  </p>
                  <div className="inline-flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all">
                    <span>En savoir plus</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Service 2 - Commerce Local */}
              <a href="/digitalisation-commerce-local" className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-gray-100 hover:border-green-300 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    Pack Digitalisation Commerce Local
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Site web, Google My Business, carte de fidélité NFC sans app et SMS marketing pour dominer votre quartier.
                  </p>
                  <div className="inline-flex items-center gap-2 text-green-600 font-bold group-hover:gap-4 transition-all">
                    <span>En savoir plus</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Service 3 - Performance */}
              <a href="/performance-web-seo" className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-gray-100 hover:border-orange-300 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    Performance Web & SEO
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Optimisation vitesse, référencement Google et Core Web Vitals pour maximiser votre visibilité en ligne.
                  </p>
                  <div className="inline-flex items-center gap-2 text-orange-600 font-bold group-hover:gap-4 transition-all">
                    <span>En savoir plus</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Service 4 - Automatisation IA */}
              <a href="/automatisation-ia-pme" className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-gray-100 hover:border-purple-300 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    Automatisation IA & CRM
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Gagnez 30h/mois et 15'000 CHF/an avec l'IA générative, l'hyper-personnalisation et un CRM centralisé.
                  </p>
                  <div className="inline-flex items-center gap-2 text-purple-600 font-bold group-hover:gap-4 transition-all">
                    <span>En savoir plus</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Service 5 - Conformité */}
              <a href="/conformite-rgpd-accessibilite" className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-gray-100 hover:border-red-300 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-500/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    Conformité RGPD & Accessibilité
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Protégez votre entreprise avec la conformité RGPD, accessibilité web et mentions légales suisses.
                  </p>
                  <div className="inline-flex items-center gap-2 text-red-600 font-bold group-hover:gap-4 transition-all">
                    <span>En savoir plus</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </a>

              {/* Service 6 - Contact */}
              <a href="/contact" className="group bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-blue-500 transform hover:-translate-y-3 relative overflow-hidden text-white">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-5 leading-tight">
                    Contactez-nous
                  </h3>
                  <p className="text-lg text-blue-100 leading-relaxed mb-6">
                    Discutons de votre projet et trouvons ensemble la solution digitale parfaite pour votre PME.
                  </p>
                  <div className="inline-flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                    <span>Démarrer maintenant</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Pourquoi Clicom */}
      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                Pourquoi choisir <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Clicom</span> ?
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-10 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-10 border-2 border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl mb-6">🇨🇭</div>
                <h3 className="text-2xl font-bold mb-4">100% Suisse</h3>
                <p className="text-blue-200 text-lg leading-relaxed">
                  Agence locale qui comprend les besoins spécifiques des PME suisses et la législation locale
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-10 border-2 border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold mb-4">Performance Garantie</h3>
                <p className="text-blue-200 text-lg leading-relaxed">
                  Sites ultra-rapides, optimisés SEO et conçus pour convertir vos visiteurs en clients
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-10 border-2 border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl mb-6">🤖</div>
                <h3 className="text-2xl font-bold mb-4">Expertise IA</h3>
                <p className="text-blue-200 text-lg leading-relaxed">
                  Intégration de l'intelligence artificielle pour automatiser et optimiser vos processus
                </p>
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

export default Accueil;
