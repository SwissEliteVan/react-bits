import React, { useEffect } from 'react';
import Navbar from '@/components/landingnew/Navbar/Navbar';
import Footer from '@/components/landingnew/Footer/Footer';
import CTA from '@/components/landingnew/CTA/CTA';

const AutomatisationIAPME = () => {
  // SEO: Update document title and meta description
  useEffect(() => {
    document.title = 'Automatisation IA et CRM pour PME | Clicom';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Gagnez du temps et personnalisez vos ventes. Clicom intègre l\'intelligence artificielle générative et les CRM pour automatiser votre marketing.');
    }

    // Update OG tags for social sharing
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Automatisation IA et CRM pour PME | Clicom');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Gagnez du temps et personnalisez vos ventes. Clicom intègre l\'intelligence artificielle générative et les CRM pour automatiser votre marketing.');
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', 'Automatisation IA et CRM pour PME | Clicom');
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', 'Gagnez du temps et personnalisez vos ventes. Clicom intègre l\'intelligence artificielle générative et les CRM pour automatiser votre marketing.');
    }
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section - Premium Design */}
      <section className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white py-32 md:py-40 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8 inline-block">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500/20 backdrop-blur-sm border border-indigo-400/30 rounded-full text-indigo-200 text-sm font-semibold tracking-wide">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Intelligence Artificielle & Automatisation
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-10 tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-white drop-shadow-2xl">
                Travaillez moins,
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-400 mt-2">
                convertissez plus
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-indigo-100 mb-12 leading-relaxed font-light max-w-4xl mx-auto">
              <span className="font-semibold text-white">L'Intelligence Artificielle</span> au service de votre PME
            </p>
            
            <p className="text-lg md:text-xl text-indigo-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Automatisez vos processus, personnalisez vos interactions et centralisez vos données pour une croissance durable
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="/contact" 
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold px-10 py-5 rounded-xl shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-lg"
              >
                <span>Découvrir nos solutions</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#automatisation" 
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold px-10 py-5 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 text-lg"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Section: L'automatisation pour libérer votre temps */}
      <section id="automatisation" className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block p-5 bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl mb-8 shadow-lg">
                  <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                    L'automatisation
                  </span>
                  <br />
                  pour libérer votre temps
                </h2>
                <div className="w-32 h-2 bg-gradient-to-r from-purple-600 to-indigo-600 mb-10 rounded-full"></div>
                <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                  <p className="font-light">
                    L'automatisation IA permet aux PME d'économiser en moyenne <span className="font-bold text-gray-900">30 heures par mois</span> et <span className="font-bold text-gray-900">15 000 CHF par an</span>.
                  </p>
                  <p className="font-light">
                    Libérez-vous des tâches répétitives et concentrez-vous sur ce qui compte vraiment : <span className="font-semibold text-gray-900">développer votre entreprise et servir vos clients</span>.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 rounded-3xl p-10 md:p-12 border-2 border-purple-100 shadow-2xl">
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-6 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-5xl font-black text-purple-600">30h</div>
                        <div className="text-lg text-gray-600 font-medium">économisées par mois</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-6 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-5xl font-black text-green-600">15 000 CHF</div>
                        <div className="text-lg text-gray-600 font-medium">économisés par an</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
                    <div className="text-center">
                      <div className="text-3xl font-black mb-3">Retour sur investissement</div>
                      <div className="text-xl text-purple-100">Rentabilisé en moins de 6 mois</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: IA Générative et Hyper-personnalisation */}
      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-10 md:p-12 border-2 border-blue-100 shadow-2xl">
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <div className="inline-block p-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-4 shadow-lg">
                        <div className="text-6xl font-black text-white">+40%</div>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mt-4">Augmentation de la productivité</div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-md">
                        <div className="flex items-center gap-4 mb-3">
                          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span className="font-black text-gray-900 text-xl">Création de contenu</span>
                        </div>
                        <p className="text-gray-600 text-lg">Articles, emails, posts sociaux générés en quelques secondes</p>
                      </div>

                      <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-md">
                        <div className="flex items-center gap-4 mb-3">
                          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                          </svg>
                          <span className="font-black text-gray-900 text-xl">Hyper-personnalisation</span>
                        </div>
                        <p className="text-gray-600 text-lg">Le bon message au bon moment pour chaque client</p>
                      </div>

                      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white shadow-xl">
                        <div className="text-center">
                          <div className="text-5xl font-black mb-3">+40%</div>
                          <div className="text-lg text-green-100">de revenus supplémentaires pour les entreprises à forte croissance</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="inline-block p-5 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl mb-8 shadow-lg">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    IA Générative
                  </span>
                  <br />
                  et Hyper-personnalisation
                </h2>
                <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mb-10 rounded-full"></div>
                <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                  <p className="font-light">
                    L'IA générative transforme la création de contenu et augmente la productivité de <span className="font-bold text-gray-900">40 %</span>.
                  </p>
                  <p className="font-light">
                    L'hyper-personnalisation envoie le bon message au bon moment, ce qui génère <span className="font-bold text-gray-900">40 % de revenus supplémentaires</span> pour les entreprises à forte croissance.
                  </p>
                  <ul className="space-y-5 mt-8">
                    <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-transparent p-4 rounded-xl">
                      <svg className="w-7 h-7 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Contenu personnalisé à grande échelle</span>
                    </li>
                    <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-transparent p-4 rounded-xl">
                      <svg className="w-7 h-7 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Segmentation intelligente de votre audience</span>
                    </li>
                    <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-transparent p-4 rounded-xl">
                      <svg className="w-7 h-7 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Automatisation des campagnes marketing</span>
                    </li>
                    <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-transparent p-4 rounded-xl">
                      <svg className="w-7 h-7 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Optimisation continue basée sur les données</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Centralisation de vos données avec un CRM */}
      <section className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block p-5 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-3xl mb-8 shadow-lg">
                  <svg className="w-16 h-16 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                    Centralisation
                  </span>
                  <br />
                  de vos données avec un CRM
                </h2>
                <div className="w-32 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 mb-10 rounded-full"></div>
                <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
                  <p className="font-light">
                    Le CRM <span className="font-semibold text-gray-900">regroupe les données éparpillées et unifie la vue client</span>.
                  </p>
                  <p className="font-light">
                    Fini les informations dispersées dans des emails, des feuilles Excel et des notes manuscrites. <span className="font-semibold text-gray-900">Centralisez tout au même endroit</span> pour une vision complète de vos clients.
                  </p>
                  <ul className="space-y-5 mt-8">
                    <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-transparent p-4 rounded-xl">
                      <svg className="w-7 h-7 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Vue client à 360° en un seul endroit</span>
                    </li>
                    <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-transparent p-4 rounded-xl">
                      <svg className="w-7 h-7 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Historique complet des interactions</span>
                    </li>
                    <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-transparent p-4 rounded-xl">
                      <svg className="w-7 h-7 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Automatisation du suivi commercial</span>
                    </li>
                    <li className="flex items-start gap-4 bg-gradient-to-r from-green-50 to-transparent p-4 rounded-xl">
                      <svg className="w-7 h-7 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">Rapports et analyses en temps réel</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 rounded-3xl p-10 md:p-12 border-2 border-indigo-100 shadow-2xl">
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl p-8 border-2 border-red-200 shadow-md">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center">
                        <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div className="font-black text-gray-900 text-2xl">Avant le CRM</div>
                    </div>
                    <ul className="space-y-3 text-lg text-gray-600">
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 text-xl">•</span>
                        <span>Données éparpillées dans plusieurs outils</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 text-xl">•</span>
                        <span>Perte d'informations clients</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 text-xl">•</span>
                        <span>Suivi manuel et chronophage</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 text-xl">•</span>
                        <span>Aucune vision d'ensemble</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border-2 border-green-200 shadow-md">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="font-black text-gray-900 text-2xl">Avec le CRM</div>
                    </div>
                    <ul className="space-y-3 text-lg text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 text-xl font-bold">✓</span>
                        <span className="font-medium">Toutes les données centralisées</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 text-xl font-bold">✓</span>
                        <span className="font-medium">Historique complet accessible</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 text-xl font-bold">✓</span>
                        <span className="font-medium">Automatisation intelligente</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-green-500 text-xl font-bold">✓</span>
                        <span className="font-medium">Vue client à 360°</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Bénéfices combinés */}
      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                  La puissance de l'automatisation intelligente
                </span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mb-10 rounded-full"></div>
              <p className="text-2xl text-indigo-100 leading-relaxed font-light">
                Combinez IA, automatisation et CRM pour transformer votre PME en machine de croissance
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-10 border-2 border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:-translate-y-2">
                <div className="text-7xl font-black text-purple-300 mb-5">30h</div>
                <div className="text-2xl font-bold mb-3">Temps économisé</div>
                <div className="text-purple-200 text-lg">par mois grâce à l'automatisation</div>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-10 border-2 border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:-translate-y-2">
                <div className="text-7xl font-black text-blue-300 mb-5">+40%</div>
                <div className="text-2xl font-bold mb-3">Revenus supplémentaires</div>
                <div className="text-purple-200 text-lg">avec l'hyper-personnalisation</div>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-10 border-2 border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:-translate-y-2">
                <div className="text-7xl font-black text-green-300 mb-5">360°</div>
                <div className="text-2xl font-bold mb-3">Vue client complète</div>
                <div className="text-purple-200 text-lg">grâce au CRM centralisé</div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <a 
                href="/contact" 
                className="inline-block bg-white text-indigo-900 font-black px-12 py-6 rounded-xl shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105 text-xl"
              >
                Démarrer votre transformation digitale
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
};

export default AutomatisationIAPME;
