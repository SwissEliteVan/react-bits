import React, { useEffect } from 'react';
import Navbar from '@/components/landingnew/Navbar/Navbar';
import Footer from '@/components/landingnew/Footer/Footer';
import CTA from '@/components/landingnew/CTA/CTA';

const CreationSiteWebDesign = () => {
  // SEO: Update document title and meta description
  useEffect(() => {
    document.title = 'Création de Sites Web et Webdesign 2026 | Clicom';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Des sites vitrines et e-commerce ultra-rapides, éco-conçus et optimisés pour le mobile. Clicom crée des expériences web qui convertissent vos visiteurs.');
    }

    // Update OG tags for social sharing
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Création de Sites Web et Webdesign 2026 | Clicom');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Des sites vitrines et e-commerce ultra-rapides, éco-conçus et optimisés pour le mobile. Clicom crée des expériences web qui convertissent vos visiteurs.');
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', 'Création de Sites Web et Webdesign 2026 | Clicom');
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', 'Des sites vitrines et e-commerce ultra-rapides, éco-conçus et optimisés pour le mobile. Clicom crée des expériences web qui convertissent vos visiteurs.');
    }
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section - Premium Design */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 inline-block">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200 text-sm font-semibold tracking-wide">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Webdesign Premium 2026
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-10 tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-2xl">
                Création de Sites Web
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 mt-2">
                & Webdesign 2026
              </span>
            </h1>
            
            <div className="mb-12 p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-md border border-red-400/20 rounded-2xl inline-block">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                40 % des internautes
              </p>
              <p className="text-lg md:text-xl text-blue-200">
                abandonnent une page web après 3 secondes d'attente, d'où l'importance vitale de la vitesse de chargement
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <a 
                href="/contact" 
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-10 py-5 rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-lg"
              >
                <span>Demander un devis</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#approche" 
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold px-10 py-5 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 text-lg"
              >
                Notre approche
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Section: Notre approche mobile-first */}
      <section id="approche" className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-6 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Notre Philosophie
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Une approche <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">mobile-first</span> pour un web moderne
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-10 rounded-full"></div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-10 md:p-14 shadow-xl border border-blue-100">
              <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed">
                <p className="font-light">
                  Nous utilisons une approche <span className="font-bold text-gray-900">"mobile-first"</span>, sachant que <span className="font-bold text-blue-600">plus de 60 % du trafic web</span> se joue sur mobile aujourd'hui.
                </p>
                <p className="font-light">
                  Notre webdesign est <span className="font-bold text-gray-900">éco-conçu</span>, à la fois bon pour la planète (le web pèse <span className="font-bold text-green-600">4 % des émissions mondiales de CO2</span>) et bénéfique pour le référencement Google.
                </p>
                <p className="font-light">
                  Nous misons sur un <span className="font-bold text-gray-900">minimalisme utile et une interface humaine</span>, pour compenser la froideur potentielle de l'IA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Nos principes de webdesign */}
      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Nos Principes
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Nos principes de webdesign
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-10 rounded-full"></div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-light">
                Des sites web performants, rapides et conçus pour <span className="font-semibold text-gray-900">convertir vos visiteurs en clients fidèles</span>.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Principe 1 */}
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-gray-100 hover:border-blue-300 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    Vitesse Ultra-Rapide
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Chargement en moins de 3 secondes pour retenir vos visiteurs et améliorer votre référencement Google.
                  </p>
                </div>
              </div>

              {/* Principe 2 */}
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-gray-100 hover:border-green-300 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    Éco-Conception
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Sites web respectueux de l'environnement avec une empreinte carbone réduite, sans compromis sur la performance.
                  </p>
                </div>
              </div>

              {/* Principe 3 */}
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-gray-100 hover:border-purple-300 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    Mobile-First
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Optimisation prioritaire pour mobile, où se trouve plus de 60 % de votre audience aujourd'hui.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Statistiques clés */}
      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-3xl mb-10 border border-blue-400/30">
              <svg className="w-16 h-16 text-blue-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              Des chiffres qui parlent d'eux-mêmes
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-10 rounded-full"></div>
            <p className="text-2xl md:text-3xl text-blue-100 leading-relaxed mb-16 font-light">
              La performance web n'est pas une option, c'est une <span className="font-bold text-white">nécessité pour votre succès en ligne</span>.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-7xl font-black text-red-300 mb-4">40%</div>
                <div className="text-xl font-semibold text-white mb-2">Abandonnent après 3 secondes</div>
                <div className="text-blue-200">Vitesse = Conversion</div>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-7xl font-black text-purple-300 mb-4">60%</div>
                <div className="text-xl font-semibold text-white mb-2">Du trafic vient du mobile</div>
                <div className="text-blue-200">Mobile-first obligatoire</div>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-7xl font-black text-green-300 mb-4">4%</div>
                <div className="text-xl font-semibold text-white mb-2">Émissions CO2 mondiales</div>
                <div className="text-blue-200">Éco-conception essentielle</div>
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

export default CreationSiteWebDesign;
