import React, { useEffect } from 'react';
import Navbar from '@/components/landingnew/Navbar/Navbar';
import Footer from '@/components/landingnew/Footer/Footer';
import CTA from '@/components/landingnew/CTA/CTA';

const PerformanceWebSEO = () => {
  // SEO: Update document title and meta description
  useEffect(() => {
    document.title = 'Performance Web & SEO | Optimisation Vitesse et Référencement | Clicom';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Optimisez la vitesse de votre site web et votre référencement Google. Core Web Vitals, SEO technique et performance pour dominer les résultats de recherche.');
    }

    // Update OG tags for social sharing
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Performance Web & SEO | Optimisation Vitesse et Référencement | Clicom');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Optimisez la vitesse de votre site web et votre référencement Google. Core Web Vitals, SEO technique et performance pour dominer les résultats de recherche.');
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', 'Performance Web & SEO | Optimisation Vitesse et Référencement | Clicom');
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', 'Optimisez la vitesse de votre site web et votre référencement Google. Core Web Vitals, SEO technique et performance pour dominer les résultats de recherche.');
    }
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section - Premium Design */}
      <section className="relative bg-gradient-to-br from-slate-950 via-orange-950 to-slate-900 text-white py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-orange-600/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 inline-block">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full text-orange-200 text-sm font-semibold tracking-wide">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Performance & Référencement
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-10 tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-100 to-white drop-shadow-2xl">
                Performance Web
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 mt-2">
                & SEO 2026
              </span>
            </h1>
            
            <div className="mb-12 p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-md border border-red-400/20 rounded-2xl inline-block">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                1 seconde de retard
              </p>
              <p className="text-lg md:text-xl text-orange-200">
                = 7 % de conversions en moins. La vitesse, c'est de l'argent.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <a 
                href="/contact" 
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold px-10 py-5 rounded-xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-lg"
              >
                <span>Audit gratuit</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#performance" 
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold px-10 py-5 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 text-lg"
              >
                Découvrir nos solutions
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Section: La vitesse, facteur critique */}
      <section id="performance" className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-6 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Vitesse = Conversion
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                La vitesse, <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">facteur critique</span> de succès
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-10 rounded-full"></div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 via-white to-red-50 rounded-3xl p-10 md:p-14 shadow-xl border border-orange-100">
              <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed">
                <p className="font-light">
                  <span className="font-black text-red-600 text-2xl">1 seconde de retard</span> = <span className="font-black text-orange-600 text-2xl">7 % de conversions en moins</span>. Google pénalise les sites lents dans son classement.
                </p>
                <p className="font-light">
                  Les <span className="font-bold text-gray-900">Core Web Vitals</span> (LCP, FID, CLS) sont désormais des critères de référencement officiels. Un site rapide, c'est plus de clients et un meilleur positionnement.
                </p>
                <div className="pt-8 border-t border-gray-200">
                  <p className="text-xl md:text-2xl font-light">
                    Nous optimisons chaque milliseconde pour <span className="font-bold text-gray-900">maximiser vos conversions et votre visibilité</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Nos optimisations de performance */}
      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Optimisations Techniques
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Nos optimisations de performance
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-10 rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Optimisation 1 */}
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-gray-100 hover:border-orange-300 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    Optimisation des images
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Compression intelligente, formats modernes (WebP, AVIF), lazy loading et responsive images pour des temps de chargement ultra-rapides.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Réduction jusqu'à 80% du poids</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Formats nouvelle génération</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Optimisation 2 */}
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-gray-100 hover:border-red-300 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-500/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    Minification du code
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Compression et optimisation du HTML, CSS et JavaScript pour réduire la taille des fichiers et accélérer le chargement.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Code optimisé et léger</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Suppression du code inutile</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Optimisation 3 */}
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-gray-100 hover:border-blue-300 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    CDN et mise en cache
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Distribution mondiale via CDN et stratégies de cache avancées pour servir votre contenu à la vitesse de l'éclair partout dans le monde.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Serveurs proches de vos clients</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Cache intelligent</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Optimisation 4 */}
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-gray-100 hover:border-green-300 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-500/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    Core Web Vitals
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Optimisation des métriques Google essentielles (LCP, FID, CLS) pour un référencement optimal et une expérience utilisateur parfaite.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Scores Google parfaits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Meilleur référencement</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: SEO - Dominez Google */}
      <section className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block p-5 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl mb-8 shadow-lg">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    SEO technique
                  </span>
                  <br />
                  pour dominer Google
                </h2>
                <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mb-10 rounded-full"></div>
                <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                  <p className="font-light">
                    <span className="font-bold text-gray-900">75 % des utilisateurs</span> ne dépassent jamais la première page de Google. Si vous n'y êtes pas, vous êtes invisible.
                  </p>
                  <p className="font-light">
                    Notre expertise SEO technique vous positionne en première page pour <span className="font-semibold text-gray-900">attirer un trafic qualifié et gratuit</span>.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-10 md:p-12 border-2 border-blue-100 shadow-2xl">
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="font-black text-gray-900 text-xl">Recherche de mots-clés</span>
                    </div>
                    <p className="text-gray-600 text-lg">Identification des termes stratégiques pour votre secteur</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      <span className="font-black text-gray-900 text-xl">Optimisation on-page</span>
                    </div>
                    <p className="text-gray-600 text-lg">Balises, structure, contenu optimisé pour Google</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      <span className="font-black text-gray-900 text-xl">Netlinking stratégique</span>
                    </div>
                    <p className="text-gray-600 text-lg">Backlinks de qualité pour booster votre autorité</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="font-black text-gray-900 text-xl">Suivi et reporting</span>
                    </div>
                    <p className="text-gray-600 text-lg">Analyses mensuelles de vos positions et trafic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Résultats garantis */}
      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-orange-950 via-red-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-400">
                  Des résultats mesurables
                </span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto mb-10 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-10 border-2 border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:-translate-y-2">
                <div className="text-7xl font-black text-orange-300 mb-5">-7%</div>
                <div className="text-2xl font-bold mb-3">Conversions perdues</div>
                <div className="text-orange-200 text-lg">par seconde de retard</div>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-10 border-2 border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:-translate-y-2">
                <div className="text-7xl font-black text-yellow-300 mb-5">75%</div>
                <div className="text-2xl font-bold mb-3">Ne vont pas en page 2</div>
                <div className="text-orange-200 text-lg">Soyez en première page</div>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-10 border-2 border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:-translate-y-2">
                <div className="text-7xl font-black text-red-300 mb-5">100%</div>
                <div className="text-2xl font-bold mb-3">Score Performance</div>
                <div className="text-orange-200 text-lg">Notre objectif pour vous</div>
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

export default PerformanceWebSEO;
