import React from 'react';
import Navbar from '@/components/landingnew/Navbar/Navbar';
import Footer from '@/components/landingnew/Footer/Footer';
import CTA from '@/components/landingnew/CTA/CTA';

const Home = () => {
  return (
    <>
      <Navbar />
      
      <section className="ln-section ln-hero">
        <div className="ln-container">
          <h1 className="ln-h1">Accélérez la croissance de votre PME avec une stratégie digitale rentable et mesurable</h1>
          <p className="ln-lead">91% des consommateurs suisses effectuent des recherches en ligne avant d'acheter localement.</p>
          <a href="/contact" className="ln-btn ln-btn-primary">Audit gratuit</a>
        </div>
      </section>

      <section className="ln-section">
        <div className="ln-container">
          <h2 className="ln-h2">Le digital n'est plus une option en Suisse</h2>
          <p className="ln-body">91% des consommateurs suisses effectuent des recherches en ligne avant d'acheter localement, prouvant l'urgence d'être visible. Chez Clicom, la suppression des frictions est la règle : des prix clairs et une offre lisible en 3 secondes.</p>
        </div>
      </section>

      <section className="ln-section ln-section-gray">
        <div className="ln-container">
          <h2 className="ln-h2">Nos 3 modèles de croissance (Nos Services)</h2>
          <p className="ln-body">Modèle basé sur le partenariat à long terme (MRR/Abonnement) plutôt que sur la facturation à l'heure, car notre but est de générer du chiffre d'affaires continu.</p>
          
          <div className="ln-grid-3">
            <div className="ln-card">
              <h3 className="ln-h3">Création de sites web éco-conçus & performants</h3>
            </div>
            <div className="ln-card">
              <h3 className="ln-h3">Commerce local : Le pack "Tout-en-un"</h3>
            </div>
            <div className="ln-card">
              <h3 className="ln-h3">Performance & IA : Acquisition en continu</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="ln-section">
        <div className="ln-container">
          <h2 className="ln-h2">La garantie Clicom : Transparence et conformité nLPD</h2>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  );
};

export default Home;