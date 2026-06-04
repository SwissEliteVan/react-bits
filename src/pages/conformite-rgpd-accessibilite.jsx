import React, { useEffect } from 'react';
import Navbar from '@/components/landingnew/Navbar/Navbar';
import Footer from '@/components/landingnew/Footer/Footer';
import CTA from '@/components/landingnew/CTA/CTA';

const ConformiteRGPDAccessibilite = () => {
  // SEO: Update document title and meta description
  useEffect(() => {
    document.title = 'Conformité RGPD & Accessibilité Web | Protection Légale | Clicom';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Protégez votre entreprise avec la conformité RGPD, accessibilité web et mentions légales suisses. Évitez les amendes jusqu\'à 20 millions d\'euros.');
    }

    // Update OG tags for social sharing
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Conformité RGPD & Accessibilité Web | Protection Légale | Clicom');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Protégez votre entreprise avec la conformité RGPD, accessibilité web et mentions légales suisses. Évitez les amendes jusqu\'à 20 millions d\'euros.');
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', 'Conformité RGPD & Accessibilité Web | Protection Légale | Clicom');
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', 'Protégez votre entreprise avec la conformité RGPD, accessibilité web et mentions légales suisses. Évitez les amendes jusqu\'à 20 millions d\'euros.');
    }
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section - Premium Design */}
      <section className="relative bg-gradient-to-br from-slate-950 via-red-950 to-slate-900 text-white py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 inline-block">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-full text-red-200 text-sm font-semibold tracking-wide">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Protection Légale & Conformité
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-10 tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-red-100 to-white drop-shadow-2xl">
                Conformité RGPD
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-300 to-red-400 mt-2">
                & Accessibilité Web
              </span>
            </h1>
            
            <div className="mb-12 p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-md border border-red-400/20 rounded-2xl inline-block">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                Jusqu'à 20 millions d'euros d'amende
              </p>
              <p className="text-lg md:text-xl text-red-200">
                pour non-conformité RGPD. Protégez votre entreprise dès maintenant.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <a 
                href="/contact" 
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-10 py-5 rounded-xl shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-lg"
              >
                <span>Audit de conformité</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#rgpd" 
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold px-10 py-5 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 text-lg"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Section: Le RGPD, une obligation légale */}
      <section id="rgpd" className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-6 py-2 bg-red-100 text-red-700 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Obligation Légale
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Le RGPD, <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">une obligation légale</span> incontournable
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-10 rounded-full"></div>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 via-white to-orange-50 rounded-3xl p-10 md:p-14 shadow-xl border border-red-100">
              <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed">
                <p className="font-light">
                  Le <span className="font-bold text-gray-900">Règlement Général sur la Protection des Données (RGPD)</span> s'applique à toute entreprise qui collecte des données personnelles de citoyens européens.
                </p>
                <p className="font-light">
                  Les amendes peuvent atteindre <span className="font-black text-red-600 text-2xl">20 millions d'euros</span> ou <span className="font-black text-red-600 text-2xl">4 % du chiffre d'affaires annuel mondial</span>, selon le montant le plus élevé.
                </p>
                <div className="pt-8 border-t border-gray-200">
                  <p className="text-xl md:text-2xl font-light">
                    Au-delà des amendes, la non-conformité peut <span className="font-bold text-gray-900">détruire votre réputation et la confiance de vos clients</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Nos services de conformité RGPD */}
      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Services RGPD
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Nos services de conformité RGPD
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-10 rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Service 1 */}
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-gray-100 hover:border-red-300 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-500/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    Politique de confidentialité
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Rédaction d'une politique de confidentialité claire et conforme au RGPD, adaptée à votre activité et vos traitements de données.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Conforme RGPD et LPD suisse</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Adaptée à votre secteur</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service 2 */}
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-gray-100 hover:border-orange-300 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    Gestion des cookies
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Bannière de consentement conforme, gestion des cookies et tracking respectueux de la vie privée de vos visiteurs.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Bannière personnalisée</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Consentement explicite</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service 3 */}
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-gray-100 hover:border-blue-300 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    Mentions légales suisses
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Rédaction complète de vos mentions légales conformes à la législation suisse et européenne pour protéger votre entreprise.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Conformité légale totale</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Protection juridique</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Service 4 */}
              <div className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border-2 border-gray-100 hover:border-purple-300 transform hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
                    Sécurisation des données
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Mise en place de mesures techniques et organisationnelles pour protéger les données personnelles de vos clients.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Chiffrement SSL/TLS</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">Sauvegardes sécurisées</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Accessibilité Web */}
      <section className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block p-5 bg-gradient-to-br from-green-100 to-green-50 rounded-3xl mb-8 shadow-lg">
                  <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600">
                    Accessibilité web
                  </span>
                  <br />
                  pour tous vos visiteurs
                </h2>
                <div className="w-32 h-2 bg-gradient-to-r from-green-600 to-blue-600 mb-10 rounded-full"></div>
                <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                  <p className="font-light">
                    <span className="font-bold text-gray-900">15 % de la population mondiale</span> vit avec un handicap. Un site accessible, c'est plus de clients potentiels et un meilleur référencement.
                  </p>
                  <p className="font-light">
                    L'accessibilité web (WCAG 2.1) est <span className="font-semibold text-gray-900">obligatoire dans de nombreux pays</span> et améliore l'expérience pour tous vos utilisateurs.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 rounded-3xl p-10 md:p-12 border-2 border-green-100 shadow-2xl">
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="font-black text-gray-900 text-xl">Contrastes optimisés</span>
                    </div>
                    <p className="text-gray-600 text-lg">Lisibilité parfaite pour tous les utilisateurs</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <span className="font-black text-gray-900 text-xl">Navigation au clavier</span>
                    </div>
                    <p className="text-gray-600 text-lg">Accessible sans souris pour tous</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                      </svg>
                      <span className="font-black text-gray-900 text-xl">Lecteurs d'écran</span>
                    </div>
                    <p className="text-gray-600 text-lg">Compatible avec les technologies d'assistance</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span className="font-black text-gray-900 text-xl">Balises sémantiques</span>
                    </div>
                    <p className="text-gray-600 text-lg">Structure HTML claire et logique</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Protégez votre entreprise */}
      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-red-950 via-orange-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-400">
                  Protégez votre entreprise
                </span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-red-400 to-orange-400 mx-auto mb-10 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-10 border-2 border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:-translate-y-2">
                <div className="text-7xl font-black text-red-300 mb-5">20M€</div>
                <div className="text-2xl font-bold mb-3">Amende maximale</div>
                <div className="text-red-200 text-lg">pour non-conformité RGPD</div>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-10 border-2 border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:-translate-y-2">
                <div className="text-7xl font-black text-orange-300 mb-5">15%</div>
                <div className="text-2xl font-bold mb-3">De la population</div>
                <div className="text-red-200 text-lg">vit avec un handicap</div>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-10 border-2 border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:-translate-y-2">
                <div className="text-7xl font-black text-yellow-300 mb-5">100%</div>
                <div className="text-2xl font-bold mb-3">Conformité</div>
                <div className="text-red-200 text-lg">Notre engagement</div>
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

export default ConformiteRGPDAccessibilite;
