import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Courses = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 2 });
  }, []);

  return (
    <section ref={sectionRef} className="p-8 bg-blue-50">
      <h2 className="text-3xl font-bold mb-4">Nos Cours de Langues</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Cours individuels "face à face"</h3>
          <p>Entièrement personnalisable, cette formation permet à l’apprenant d’avancer à son rythme et de travailler sur ses besoins socioprofessionnels.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Cours collectifs</h3>
          <p>Petit groupe (maximum 6 personnes), de niveau homogène, constitué autour d’un objectif commun...</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Cours par téléphone</h3>
          <p>Spécialement conçus pour préparer la communication téléphonique en situation réelle...</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Cours en visioconférence</h3>
          <p>Cours à distance permettant de travailler l’expression et la compréhension orales...</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Préparation aux examens</h3>
          <p>Cursus spécifique permettant de réussir les examens et certifications linguistiques...</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Séminaires & Ateliers pro</h3>
          <p>Formations axées sur des compétences professionnelles spécifiques...</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Séminaires inter-culturels</h3>
          <p>Cette formation vise à faciliter les échanges entre personnes de cultures différentes...</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Accompagnement de dirigeant</h3>
          <p>Cette formule s’adresse aux dirigeants ayant des objectifs précis et peu de temps disponible...</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Formation « double compétence »</h3>
          <p>Cette formule permet d’acquérir simultanément deux compétences : une compétence linguistique...</p>
        </div>
      </div>
    </section>
  );
};

export default Courses;
