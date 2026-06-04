import React, { useEffect } from 'react';
import Navbar from '@/components/landingnew/Navbar/Navbar';
import Footer from '@/components/landingnew/Footer/Footer';
import CTA from '@/components/landingnew/CTA/CTA';

const Acquisition = () => {
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
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-white py-32 md:py-40 lg:py-56 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8 inline-block">
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200 text-sm font-semibold tracking-wide">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Acquisition de Clients
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] mb-10 tracking-tight">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-2xl">
                Un trafic qualifié,
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 mt-2">
                des leads mesurables,
              </span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white drop-shadow-2xl mt-2">
                un ROI garanti
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-blue-100 mb-12 leading-relaxed font-light max-w-4xl mx-auto">
              Transformez votre site web en machine à clients avec notre approche combinée SEO + Google Ads
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <a 
                href="/contact" 
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-10 py-5 rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-lg"
              >
                <span>Démarrer votre acquisition</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a 
                href="#strategie" 
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold px-10 py-5 rounded-xl border-2 border-white/30 hover:border-white/50 transition-all duration-300 text-lg"
              >
                Découvrir la stratégie
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Section: Stratégie Combinée */}
      <section id="strategie" className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                La Stratégie Gagnante
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Pourquoi combiner <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">SEO et Google Ads</span> ?
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-10 rounded-full"></div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                La combinaison du SEO et de Google Ads est la stratégie la plus rentable sur 24 mois. Voici pourquoi : Google Ads génère des leads dès le premier mois, tandis que le SEO diminue drastiquement le coût par acquisition après 6 à 12 mois. Ensemble, ils créent un flux constant de clients qualifiés tout en optimisant votre budget marketing.
              </p>
            </div>

            {/* Graphique de comparaison visuel */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-10 md:p-16 mb-20 border-2 border-blue-100">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Évolution du coût par acquisition sur 24 mois
              </h3>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">Google Ads</h4>
                  </div>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold mt-1">✓</span>
                      <span><strong>Mois 1-3 :</strong> Résultats immédiats, leads dès le premier jour</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold mt-1">✓</span>
                      <span><strong>Mois 4-12 :</strong> Optimisation continue, coût stable</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-orange-600 font-bold mt-1">✓</span>
                      <span><strong>Mois 13-24 :</strong> Coût par lead constant, volume prévisible</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900">SEO</h4>
                  </div>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span><strong>Mois 1-6 :</strong> Fondations, premiers résultats organiques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span><strong>Mois 7-12 :</strong> Croissance exponentielle du trafic</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <span><strong>Mois 13-24 :</strong> Coût par lead réduit de 60-80%, actif durable</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
                <p className="text-2xl md:text-3xl font-bold mb-4">
                  Résultat : ROI optimisé sur 24 mois
                </p>
                <p className="text-lg md:text-xl text-blue-100">
                  Ads couvre vos besoins immédiats pendant que le SEO construit votre actif long terme
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Google Ads */}
      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center shadow-xl">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                  Google Ads : <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-red-600">Des résultats immédiats</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    <strong>Besoin de leads maintenant ?</strong> Google Ads est votre solution. Dès le premier jour de campagne, votre entreprise apparaît en tête des résultats de recherche Google pour les mots-clés stratégiques de votre secteur.
                  </p>
                  <p>
                    Contrairement au SEO qui nécessite du temps pour porter ses fruits, Google Ads génère du trafic qualifié instantanément. Vous payez uniquement lorsqu'un prospect clique sur votre annonce, ce qui garantit un contrôle total sur votre budget.
                  </p>
                  <p>
                    <strong>Notre approche :</strong> Nous créons des campagnes ultra-ciblées, optimisons vos pages de destination pour maximiser les conversions, et ajustons continuellement vos enchères pour réduire le coût par acquisition tout en augmentant le volume de leads.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-2xl p-10 border-2 border-orange-200">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                  Avantages Google Ads
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-orange-600 font-bold text-xl">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Résultats en 24-48h</h4>
                      <p className="text-gray-600">Vos annonces sont actives et génèrent des clics dès la validation de la campagne</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-orange-600 font-bold text-xl">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Ciblage ultra-précis</h4>
                      <p className="text-gray-600">Géolocalisation, horaires, appareils, intentions de recherche spécifiques</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-orange-600 font-bold text-xl">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Budget maîtrisé</h4>
                      <p className="text-gray-600">Vous définissez votre budget quotidien et ne payez que pour les clics réels</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-orange-600 font-bold text-xl">4</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Mesure précise du ROI</h4>
                      <p className="text-gray-600">Tracking complet : impressions, clics, conversions, coût par lead</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: SEO */}
      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-3xl shadow-2xl p-10 border-2 border-green-200">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                    Pourquoi le SEO est un actif
                  </h3>
                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-green-600 font-bold text-xl">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">Trafic gratuit et durable</h4>
                        <p className="text-gray-600">Une fois bien positionné, votre site génère du trafic sans coût publicitaire</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-green-600 font-bold text-xl">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">Crédibilité renforcée</h4>
                        <p className="text-gray-600">Les résultats organiques inspirent plus de confiance que les annonces payantes</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-green-600 font-bold text-xl">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">Coût par lead décroissant</h4>
                        <p className="text-gray-600">Plus le temps passe, plus votre coût d'acquisition diminue (jusqu'à -80%)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-green-600 font-bold text-xl">4</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">Valeur patrimoniale</h4>
                        <p className="text-gray-600">Votre référencement est un actif qui augmente la valeur de votre entreprise</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-block mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center shadow-xl">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                  SEO : <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">L'actif qui travaille pour vous sur le long terme</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    <strong>Le SEO est un investissement, pas une dépense.</strong> Contrairement à Google Ads où vous devez payer pour chaque clic, le référencement naturel génère du trafic qualifié de manière continue, sans coût publicitaire récurrent.
                  </p>
                  <p>
                    Après 6 à 12 mois d'optimisation SEO, votre site commence à se positionner sur des dizaines, voire des centaines de mots-clés stratégiques. Chaque visiteur organique réduit votre coût d'acquisition global, créant un effet de levier puissant sur votre rentabilité.
                  </p>
                  <p>
                    <strong>Notre méthode :</strong> Audit technique complet, optimisation on-page, création de contenu stratégique, netlinking de qualité, et suivi mensuel des positions et du trafic. Nous construisons votre autorité en ligne étape par étape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: L'approche Clicom */}
      <section className="py-24 md:py-32 lg:py-40 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-bold uppercase tracking-wider mb-6">
                Notre Approche
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                L'approche Clicom : <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Des abonnements (Retainers) orientés rentabilité</span>
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-10 rounded-full"></div>
            </div>

            {/* Transparence sur les budgets */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-10 md:p-16 mb-16 border-2 border-blue-100">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Transparence totale sur les budgets
                </h3>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                  Soyons honnêtes : <strong>en dessous de 1 000 CHF par mois, les résultats sont trop dilués</strong> pour être vraiment efficaces. Avec un budget insuffisant, vous ne pouvez ni mener une campagne Google Ads compétitive, ni investir suffisamment dans le SEO pour obtenir des résultats tangibles.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  C'est pourquoi nous recommandons un budget minimum de 1 500 CHF/mois pour commencer à voir des résultats mesurables. Ce budget permet de combiner intelligemment Ads et SEO pour maximiser votre retour sur investissement dès les premiers mois.
                </p>
              </div>
            </div>

            {/* Cartes de prix */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Pack Indépendant */}
              <div className="bg-white rounded-3xl shadow-2xl border-2 border-blue-200 overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 text-center">
                  <h3 className="text-3xl md:text-4xl font-black mb-3">Pack Indépendant</h3>
                  <p className="text-blue-100 text-lg mb-6">Pour freelances et micro-entreprises</p>
                  <div className="text-5xl md:text-6xl font-black mb-2">
                    dès 1 500 CHF
                  </div>
                  <p className="text-blue-200 text-lg">par mois</p>
                </div>
                
                <div className="p-10">
                  <ul className="space-y-5 mb-10">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-lg"><strong>Google Ads :</strong> Campagne Search ciblée (budget publicitaire inclus : 800-1000 CHF/mois)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-lg"><strong>SEO :</strong> Optimisation technique de base + 2 articles de blog/mois</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-lg"><strong>Tracking :</strong> Google Analytics 4 + suivi des conversions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-lg"><strong>Reporting :</strong> Rapport mensuel détaillé avec recommandations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-lg"><strong>Objectif :</strong> 5-10 leads qualifiés par mois</span>
                    </li>
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    Démarrer maintenant
                  </a>
                </div>
              </div>

              {/* Pack PME Locale */}
              <div className="bg-white rounded-3xl shadow-2xl border-4 border-purple-400 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 relative">
                <div className="absolute top-6 right-6 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold uppercase shadow-lg">
                  Populaire
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8 text-center">
                  <h3 className="text-3xl md:text-4xl font-black mb-3">Pack PME Locale</h3>
                  <p className="text-purple-100 text-lg mb-6">Pour entreprises en croissance</p>
                  <div className="text-5xl md:text-6xl font-black mb-2">
                    3 000 - 5 000 CHF
                  </div>
                  <p className="text-purple-200 text-lg">par mois</p>
                </div>
                
                <div className="p-10">
                  <ul className="space-y-5 mb-10">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-lg"><strong>Google Ads :</strong> Campagnes Search + Display + Remarketing (budget publicitaire : 2000-3500 CHF/mois)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-lg"><strong>SEO :</strong> Stratégie complète + 4-6 articles/mois + netlinking premium</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-lg"><strong>Landing Pages :</strong> Création et optimisation de pages de conversion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-lg"><strong>CRO :</strong> Tests A/B et optimisation du taux de conversion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-lg"><strong>Support prioritaire :</strong> Appels stratégiques mensuels + support réactif</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-lg"><strong>Objectif :</strong> 20-40 leads qualifiés par mois</span>
                    </li>
                  </ul>
                  
                  <a 
                    href="/contact" 
                    className="block w-full text-center bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold px-8 py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                  >
                    Démarrer maintenant
                  </a>
                </div>
              </div>
            </div>

            {/* Citation importante */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-10 md:p-16 border-2 border-red-200">
              <div className="max-w-4xl mx-auto text-center">
                <div className="text-6xl mb-6">⚠️</div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                  Un site web à 8 000 CHF qui n'a pas de trafic est un prospectus que personne ne lit
                </h3>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                  Vous avez investi dans un beau site web ? Parfait. Mais sans stratégie d'acquisition, c'est comme avoir une vitrine dans une rue déserte. <strong>L'acquisition de clients n'est pas une option, c'est une nécessité.</strong> Votre site doit générer du trafic qualifié pour justifier son investissement initial et devenir un véritable outil de croissance pour votre entreprise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Pourquoi nous faire confiance */}
      <section className="py-24 md:py-32 lg:py-40 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                Pourquoi choisir <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Clicom</span> pour votre acquisition ?
              </h2>
              <div className="w-32 h-2 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-10 rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-10 border-2 border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl mb-6">📊</div>
                <h3 className="text-2xl font-bold mb-4">Transparence totale</h3>
                <p className="text-blue-200 text-lg leading-relaxed">
                  Accès complet à vos comptes Google Ads et Analytics. Vous voyez exactement où va chaque franc investi.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-10 border-2 border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold mb-4">Orienté ROI</h3>
                <p className="text-blue-200 text-lg leading-relaxed">
                  Notre objectif n'est pas de dépenser votre budget, mais de maximiser votre retour sur investissement.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-10 border-2 border-white/20 text-center hover:border-white/40 transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl mb-6">🇨🇭</div>
                <h3 className="text-2xl font-bold mb-4">Expertise locale</h3>
                <p className="text-blue-200 text-lg leading-relaxed">
                  Connaissance approfondie du marché suisse, des comportements de recherche et de la concurrence locale.
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

export default Acquisition;
