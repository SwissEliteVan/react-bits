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
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Travaillez moins, convertissez plus : l'Intelligence Artificielle au service de votre PME
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
              Automatisez vos processus, personnalisez vos interactions et centralisez vos données pour une croissance durable
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/contact" 
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Découvrir nos solutions
              </a>
              <a 
                href="#automatisation" 
                className="inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section: L'automatisation pour libérer votre temps */}
      <section id="automatisation" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block p-4 bg-purple-100 rounded-full mb-6">
                  <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  L'automatisation pour libérer votre temps
                </h2>
                <div className="w-24 h-1 bg-purple-600 mb-8"></div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    L'automatisation IA permet aux PME d'économiser en moyenne <strong>30 heures par mois</strong> et <strong>15 000 CHF par an</strong>.
                  </p>
                  <p>
                    Libérez-vous des tâches répétitives et concentrez-vous sur ce qui compte vraiment : développer votre entreprise et servir vos clients.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-8 border border-purple-100 shadow-lg">
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-purple-600">30h</div>
                        <div className="text-sm text-gray-600">économisées par mois</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-green-600">15 000 CHF</div>
                        <div className="text-sm text-gray-600">économisés par an</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-2">Retour sur investissement</div>
                      <div className="text-purple-100">Rentabilisé en moins de 6 mois</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: IA Générative et Hyper-personnalisation */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-blue-100 shadow-lg">
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <div className="text-5xl font-bold text-blue-600 mb-2">+40%</div>
                      <div className="text-gray-600">Augmentation de la productivité</div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center gap-3 mb-2">
                          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span className="font-semibold text-gray-900">Création de contenu</span>
                        </div>
                        <p className="text-sm text-gray-600">Articles, emails, posts sociaux générés en quelques secondes</p>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center gap-3 mb-2">
                          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                          </svg>
                          <span className="font-semibold text-gray-900">Hyper-personnalisation</span>
                        </div>
                        <p className="text-sm text-gray-600">Le bon message au bon moment pour chaque client</p>
                      </div>

                      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 text-white">
                        <div className="text-center">
                          <div className="text-3xl font-bold mb-1">+40%</div>
                          <div className="text-sm text-green-100">de revenus supplémentaires pour les entreprises à forte croissance</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  IA Générative et Hyper-personnalisation
                </h2>
                <div className="w-24 h-1 bg-blue-600 mb-8"></div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    L'IA générative transforme la création de contenu et augmente la productivité de <strong>40 %</strong>.
                  </p>
                  <p>
                    L'hyper-personnalisation envoie le bon message au bon moment, ce qui génère <strong>40 % de revenus supplémentaires</strong> pour les entreprises à forte croissance.
                  </p>
                  <ul className="space-y-3 mt-6">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Contenu personnalisé à grande échelle</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Segmentation intelligente de votre audience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Automatisation des campagnes marketing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Optimisation continue basée sur les données</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Centralisation de vos données avec un CRM */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block p-4 bg-indigo-100 rounded-full mb-6">
                  <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Centralisation de vos données avec un CRM
                </h2>
                <div className="w-24 h-1 bg-indigo-600 mb-8"></div>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Le CRM regroupe les données éparpillées et unifie la vue client.
                  </p>
                  <p>
                    Fini les informations dispersées dans des emails, des feuilles Excel et des notes manuscrites. Centralisez tout au même endroit pour une vision complète de vos clients.
                  </p>
                  <ul className="space-y-3 mt-6">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Vue client à 360° en un seul endroit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Historique complet des interactions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Automatisation du suivi commercial</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Rapports et analyses en temps réel</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-8 border border-indigo-100 shadow-lg">
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div className="font-semibold text-gray-900">Avant le CRM</div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        <span>Données éparpillées dans plusieurs outils</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        <span>Perte d'informations clients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        <span>Suivi manuel et chronophage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500">•</span>
                        <span>Aucune vision d'ensemble</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-white rounded-lg p-6 border border-green-200 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="font-semibold text-gray-900">Avec le CRM</div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Toutes les données centralisées</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Historique complet accessible</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Automatisation intelligente</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Vue client à 360°</span>
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
      <section className="py-20 md:py-28 bg-gradient-to-br from-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                La puissance de l'automatisation intelligente
              </h2>
              <div className="w-24 h-1 bg-purple-400 mx-auto mb-8"></div>
              <p className="text-xl text-purple-100 leading-relaxed">
                Combinez IA, automatisation et CRM pour transformer votre PME en machine de croissance
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-5xl font-bold text-purple-300 mb-3">30h</div>
                <div className="text-lg font-semibold mb-2">Temps économisé</div>
                <div className="text-purple-200 text-sm">par mois grâce à l'automatisation</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-5xl font-bold text-blue-300 mb-3">+40%</div>
                <div className="text-lg font-semibold mb-2">Revenus supplémentaires</div>
                <div className="text-purple-200 text-sm">avec l'hyper-personnalisation</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-5xl font-bold text-green-300 mb-3">360°</div>
                <div className="text-lg font-semibold mb-2">Vue client complète</div>
                <div className="text-purple-200 text-sm">grâce au CRM centralisé</div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a 
                href="/contact" 
                className="inline-block bg-white text-purple-900 font-semibold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
