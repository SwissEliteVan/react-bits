import React, { useEffect } from 'react';
import Navbar from '@/components/landingnew/Navbar/Navbar';
import Footer from '@/components/landingnew/Footer/Footer';
import CTA from '@/components/landingnew/CTA/CTA';

const AcquisitionPerformanceMarketing = () => {
  // SEO: Update document title and meta description
  useEffect(() => {
    document.title = 'Acquisition de Clients en Continu : SEO & Google Ads | Clicom';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transformez votre site web en machine à clients. Clicom combine le SEO (long terme) et Google Ads (court terme) pour maximiser votre Retour sur Investissement.');
    }

    // Update OG tags for social sharing
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Acquisition de Clients en Continu : SEO & Google Ads | Clicom');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Transformez votre site web en machine à clients. Clicom combine le SEO (long terme) et Google Ads (court terme) pour maximiser votre Retour sur Investissement.');
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', 'Acquisition de Clients en Continu : SEO & Google Ads | Clicom');
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', 'Transformez votre site web en machine à clients. Clicom combine le SEO (long terme) et Google Ads (court terme) pour maximiser votre Retour sur Investissement.');
    }
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section - Premium Design */}
      <section className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 inline-block">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 rounded-full text-purple-200 text-sm font-semibold tracking-wide">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Performance Marketing
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-10 tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-white drop-shadow-2xl">
                Un trafic qualifié,
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 mt-2">
                des leads mesurables,
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-300 to-green-400 mt-2">
                un ROI garanti
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-purple-100 mb-12 leading-relaxed font-light max-w-4xl mx-auto">
              Transformez votre site web en <span className="font-semibold text-white">machine à clients</span> avec notre approche combinée SEO et Google Ads
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="/contact" 
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold px-10 py-5 rounded-xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-lg"
              >
                <span>Demander un audit gratuit</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#strategie" 
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold px-10 py-5 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 text-lg"
              >
                Découvrir notre approche
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Section: Google Ads */}
      <section className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block p-5 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl mb-8 shadow-lg">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                  Google Ads : <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                    Des résultats immédiats
                  </span>
                </h2>
                <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-blue-400 mb-10 rounded-full"></div>
                <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                  <p className="font-light">
                    Avec Google Ads, vos annonces apparaissent en <span className="font-semibold text-gray-900">première position dès le premier jour</span>. Vous payez uniquement lorsqu'un client potentiel clique sur votre annonce.
                  </p>
                  <ul className="space-y-5 mt-8">
                    <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-transparent p-4 rounded-xl">
                      <svg className="w-7 h-7 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Génération de leads dès le premier mois</span>
                    </li>
                    <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-transparent p-4 rounded-xl">
                      <svg className="w-7 h-7 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Ciblage précis de votre audience idéale</span>
                    </li>
                    <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-transparent p-4 rounded-xl">
                      <svg className="w-7 h-7 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Contrôle total de votre budget publicitaire</span>
                    </li>
                    <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-transparent p-4 rounded-xl">
                      <svg className="w-7 h-7 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Mesure précise du retour sur investissement</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-10 md:p-12 border-2 border-blue-100 shadow-2xl">
                <div className="text-center mb-10">
                  <div className="inline-block p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-4 shadow-lg">
                    <div className="text-6xl font-black text-white">1</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mt-4">Jour</div>
                  <div className="text-gray-600 text-lg">Premiers résultats visibles</div>
                </div>
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold text-gray-700">Impressions</span>
                      <span className="font-black text-blue-600 text-xl">Immédiat</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-500 h-4 rounded-full shadow-inner" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold text-gray-700">Clics qualifiés</span>
                      <span className="font-black text-green-600 text-xl">Jour 1</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-green-600 to-green-500 h-4 rounded-full shadow-inner" style={{width: '90%'}}></div>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-lg font-semibold text-gray-700">Conversions</span>
                      <span className="font-black text-purple-600 text-xl">Semaine 1</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="bg-gradient-to-r from-purple-600 to-purple-500 h-4 rounded-full shadow-inner" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: SEO */}
      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 rounded-3xl p-10 md:p-12 border-2 border-green-100 shadow-2xl">
                  <div className="text-center mb-10">
                    <div className="inline-block p-4 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl mb-4 shadow-lg">
                      <div className="text-5xl font-black text-white">6-12</div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mt-4">Mois</div>
                    <div className="text-gray-600 text-lg">Réduction drastique du coût par acquisition</div>
                  </div>
                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold text-gray-700">Coût par lead (Ads seul)</span>
                        <span className="font-black text-red-600 text-2xl">50 CHF</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-5">
                        <div className="bg-gradient-to-r from-red-600 to-red-500 h-5 rounded-full shadow-inner" style={{width: '100%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold text-gray-700">Coût par lead (Ads + SEO)</span>
                        <span className="font-black text-green-600 text-2xl">15 CHF</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-5">
                        <div className="bg-gradient-to-r from-green-600 to-green-500 h-5 rounded-full shadow-inner" style={{width: '30%'}}></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 mt-6 shadow-xl">
                      <div className="text-center">
                        <div className="text-6xl font-black text-white mb-3">-70%</div>
                        <div className="text-xl font-semibold text-white">Économie sur le coût d'acquisition</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-block p-5 bg-gradient-to-br from-green-100 to-green-50 rounded-3xl mb-8 shadow-lg">
                  <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                  SEO : <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-400">
                    L'actif qui travaille pour vous
                  </span>
                  <br />
                  <span className="text-3xl md:text-4xl lg:text-5xl">sur le long terme</span>
                </h2>
                <div className="w-32 h-2 bg-gradient-to-r from-green-600 to-green-400 mb-10 rounded-full"></div>
                <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                  <p className="font-light">
                    Le référencement naturel est un <span className="font-semibold text-gray-900">investissement qui génère des résultats croissants</span> dans le temps. Contrairement aux publicités, le trafic SEO ne s'arrête pas quand vous cessez de payer.
                  </p>
                  <ul className="space-y-5 mt-8">
                    <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-transparent p-4 rounded-xl">
                      <svg className="w-7 h-7 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Trafic organique gratuit et pérenne</span>
                    </li>
                    <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-transparent p-4 rounded-xl">
                      <svg className="w-7 h-7 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Crédibilité et confiance accrues</span>
                    </li>
                    <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-transparent p-4 rounded-xl">
                      <svg className="w-7 h-7 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Réduction progressive du coût par acquisition</span>
                    </li>
                    <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-transparent p-4 rounded-xl">
                      <svg className="w-7 h-7 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Indépendance vis-à-vis des plateformes publicitaires</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Stratégie combinée */}
      <section id="strategie" className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-blue-950 via-purple-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-3xl mb-10 border border-blue-400/30">
                <svg className="w-16 h-16 text-blue-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  La stratégie la plus rentable
                </span>
                <br />
                sur 24 mois
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-10 rounded-full"></div>
            </div>
            
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-10 md:p-14 border-2 border-white/20">
              <p className="text-2xl md:text-3xl text-blue-100 leading-relaxed mb-12 text-center font-light">
                Combiner Ads et SEO est la <span className="font-bold text-white">stratégie la plus rentable sur 24 mois</span>. Google Ads génère des leads dès le premier mois, tandis que le SEO diminue drastiquement le coût par acquisition après 6 à 12 mois.
              </p>
              
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-400/30 rounded-2xl p-8 mb-12">
                <div className="flex items-start gap-6">
                  <svg className="w-10 h-10 text-yellow-300 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <div className="font-black text-white mb-4 text-2xl">La réalité que personne ne vous dit</div>
                    <p className="text-blue-100 text-xl leading-relaxed font-light">
                      Un site web à <span className="font-bold text-white">8 000 CHF</span> qui n'a pas de trafic est un prospectus que personne ne lit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-black text-2xl">1</span>
                    </div>
                    <div className="font-black text-white text-xl">Court terme</div>
                  </div>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Google Ads génère des leads immédiats pendant que votre SEO se construit
                  </p>
                </div>
                <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-black text-2xl">2</span>
                    </div>
                    <div className="font-black text-white text-xl">Long terme</div>
                  </div>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Le SEO prend le relais et réduit progressivement votre dépendance aux publicités
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Approche Clicom */}
      <section className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Nos Tarifs
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                L'approche Clicom : <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Des abonnements (Retainers)
                </span>
                <br />
                orientés rentabilité
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-10 rounded-full"></div>
              <p className="text-2xl text-gray-700 leading-relaxed font-light">
                En dessous de <span className="font-bold text-gray-900">1 000 CHF par mois</span>, les résultats sont trop dilués.
              </p>
            </div>
            
            <div className="space-y-8 mb-16">
              <div className="group bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-10 md:p-12 border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center shadow-xl">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Indépendants & Freelances</h3>
                    <div className="text-5xl md:text-6xl font-black text-blue-600 mb-6">Dès 1 500 CHF<span className="text-2xl text-gray-600">/mois</span></div>
                    <ul className="space-y-4 text-lg text-gray-700">
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">Gestion Google Ads ciblée</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">Optimisation SEO de base</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">Rapports mensuels de performance</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-3xl p-10 md:p-12 border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl flex items-center justify-center shadow-xl">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">PME Locales</h3>
                    <div className="text-5xl md:text-6xl font-black text-purple-600 mb-6">3 000 - 5 000 CHF<span className="text-2xl text-gray-600">/mois</span></div>
                    <p className="text-xl text-gray-700 mb-6 font-light">
                      Pour générer <span className="font-bold text-gray-900">20 à 40 leads qualifiés par mois</span>
                    </p>
                    <ul className="space-y-4 text-lg text-gray-700">
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">Campagnes Google Ads multi-canaux</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">Stratégie SEO complète et création de contenu</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">Optimisation continue et A/B testing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="font-medium">Suivi ROI détaillé et recommandations stratégiques</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 md:p-12 text-white shadow-2xl">
              <div className="flex items-start gap-6">
                <svg className="w-10 h-10 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-2xl md:text-3xl font-black mb-5">Pourquoi un budget minimum ?</h4>
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                    Le marketing digital nécessite du temps pour l'analyse, l'optimisation et la création de contenu. Un budget trop faible dilue les efforts et ne permet pas d'atteindre la masse critique nécessaire pour générer des résultats mesurables. Nous préférons être transparents : si votre budget est inférieur à 1 000 CHF/mois, nous vous recommandons d'attendre d'avoir les ressources nécessaires pour un investissement rentable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Statistiques */}
      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
                Des résultats mesurables et transparents
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center p-10 bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl border-2 border-blue-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="text-7xl font-black text-blue-600 mb-4">-70%</div>
                <div className="text-xl font-bold text-gray-900 mb-2">Réduction du coût par lead</div>
                <div className="text-gray-600 text-lg">avec SEO + Ads</div>
              </div>
              <div className="text-center p-10 bg-gradient-to-br from-green-50 via-white to-blue-50 rounded-3xl border-2 border-green-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="text-7xl font-black text-green-600 mb-4">24</div>
                <div className="text-xl font-bold text-gray-900 mb-2">Mois</div>
                <div className="text-gray-600 text-lg">Période optimale pour maximiser le ROI</div>
              </div>
              <div className="text-center p-10 bg-gradient-to-br from-purple-50 via-white to-blue-50 rounded-3xl border-2 border-purple-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2">
                <div className="text-7xl font-black text-purple-600 mb-4">20-40</div>
                <div className="text-xl font-bold text-gray-900 mb-2">Leads qualifiés/mois</div>
                <div className="text-gray-600 text-lg">pour une PME</div>
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

export default AcquisitionPerformanceMarketing;
