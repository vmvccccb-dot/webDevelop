"use client";

import Link from "next/link";
import { useState } from "react";
import SiteFooter from "../components/SiteFooter";

const projects = [
  {
    name: "LA TIZA",
    location: "Fundo La Tiza, Valle Alegre",
    area: "3.200 m²",
    price: "Desde CLP $ 490.000.000",
    description:
      "Parcelas con acceso, vistas y una proyección de valorización sostenida en una zona de constante crecimiento.",
    image: "/media/proyectos/la_tiza/LaTiza-01.jpeg",
  },
  {
    name: "LOS BOLDOS",
    location: "Reserva Los Boldos, Olmué",
    area: "4.800 m²",
    price: "Desde CLP $ 620.000.000",
    description:
      "Terrenos costeros con entorno natural, cercanía al mar y un perfil ideal para inversión o vivienda de descanso.",
    image: "/media/proyectos/los_boldos/LosBoldos-01.jpeg",
  },
  {
    name: "CONCON",
    location: "Casa en Playa Amarilla, Concón",
    area: "43 parcelas · 2 y 4 hectáreas",
    price: "Desde CLP $ 890.000.000",
    description:
      "Un proyecto exclusivo de parcelas en un entorno privilegiado, pensado para quienes buscan tranquilidad, paisaje y valor a largo plazo.",
    image: "/media/proyectos/concon/Reñaca-01.jpeg",
  },
  {
    name: "QUINTERO ALTOS DEL BELLOTO",
    location: "Altos del Belloto, Quintero",
    area: "Consultar superficie",
    price: "Consultar valor",
    description:
      "Una alternativa inmobiliaria en Quintero, pensada para quienes buscan conectividad, entorno natural y proyección de valor.",
    image: "/media/proyectos/quintero_altos_del_belloto/Quintero-01.jpg",
  },
  {
    name: "QUINTERO NORMANDIE",
    location: "Hacienda Normandie, Quintero",
    area: "Consultar superficie",
    price: "Consultar valor",
    description:
      "Un proyecto con identidad en Quintero, ideal para conocer nuevas oportunidades de inversión en la costa de la región.",
    image: "/media/proyectos/quintero_normandie/Normandie-01.jpeg",
  },
  {
    name: "RECREO VIÑA DEL MAR",
    location: "Casa en Recreo, Viña del Mar",
    area: "2.100 m²",
    price: "Desde CLP $ 430.000.000",
    description:
      "Propiedades con identidad, cercanía a la ciudad y un alto potencial de reposicionamiento en el puerto y sus alrededores.",
    image: "/media/proyectos/recreo_viña_del_mar/RecreoViña-01.jpg",
  },
];

export default function ProyectosPage() {
  return (
    <main className="projects-page">
      <header className="header projects-header">
        <Link className="brand" href="/" aria-label="Quirke Inmobiliaria, inicio">
          <img src="/media/logo-jurke.png" alt="Quirke Inmobiliaria — Inversión es visión" />
        </Link>
        <nav aria-label="Navegación principal">
          <Link href="/">Inicio</Link>
          <Link className="active" href="/#proyectos">Proyectos</Link>
          <Link href="/#nosotros">Quiénes somos</Link>
          <a href="/#contacto">Contacto</a>
        </nav>
      </header>

      <section className="projects-video-hero section-dark">
        <div className="projects-video-overlay">
          <p className="eyebrow">Quirke Inmobiliaria</p>
          <h1>Inversión es visión</h1>
          <p className="projects-intro">
            Oportunidades inmobiliarias en ubicaciones estratégicas, con valor sostenible y un enfoque pensado para invertir con visión y tranquilidad.
          </p>
        </div>
      </section>

      <div className="projects-stats">
        <div>
          <span>Ubicaciones</span>
          <strong>6</strong>
        </div>
        <div>
          <span>Superficie</span>
          <strong>2.100 a 4.800 m²</strong>
        </div>
        <div>
          <span>Precio desde</span>
          <strong>CLP $ 430M</strong>
        </div>
        <div>
          <span>Enfoque</span>
          <strong>Inversión</strong>
        </div>
      </div>

      <section id="portfolio" className="projects-portfolio">
        <div className="section-heading">
          <p className="script-title dark">proyectos</p>
          <p className="section-subtitle">Quirke Inmobiliaria | Inversión es visión</p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <article className="portfolio-card" key={project.name}>
              <div className="portfolio-image-wrap">
                <img src={project.image} alt={project.name} />
              </div>
              <div className="portfolio-copy">
                <p className="project-region">{project.location}</p>
                <h2>{project.name}</h2>
                <p className="project-description">{project.description}</p>
                <ul>
                  <li>
                    <span>Superficie</span>
                    <strong>{project.area}</strong>
                  </li>
                  <li>
                    <span>Precio</span>
                    <strong>{project.price}</strong>
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
