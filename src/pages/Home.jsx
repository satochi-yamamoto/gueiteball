import React from 'react';
import HeroSection from '../components/HeroSection';
import InfoCard from '../components/InfoCard';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <section className="info-section">
        <InfoCard
          title="O que é Gueitebol?"
          description="Esporte japonês estratégico, acessível e colaborativo."
        />
        <InfoCard
          title="Pratique em sua cidade"
          description="Veja os clubes cadastrados e encontre um perto de você."
        />
        <InfoCard
          title="Participe de Torneios"
          description="Acompanhe as datas e inscrições dos eventos nacionais."
        />
      </section>
      <Footer />
    </>
  );
}

export default Home;
