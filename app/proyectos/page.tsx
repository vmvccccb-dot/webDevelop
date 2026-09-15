"use client";

import Link from "next/link";
import { useState } from "react";
import SiteFooter from "../components/SiteFooter";

const projects = [
  {
    name: "Quilpué",
    location: "Sector norte de Quilpué",
    area: "3.200 m²",
    price: "Desde CLP $ 490.000.000",
    description:
      "Parcelas con acceso, vistas y una proyección de valorización sostenida en una zona de constante crecimiento.",
    image: "/media/proyectos/quilpue.jpg",
  },
  {
    name: "Ritoque",
    location: "Costa de Ritoque",
    area: "4.800 m²",
    price: "Desde CLP $ 620.000.000",
    description:
      "Terrenos costeros con entorno natural, cercanía al mar y un perfil ideal para inversión o vivienda de descanso.",
    image: "/media/proyectos/ritoque.jpg",
  },
  {
    name: "Fundo La Tiza",
    location: "Valle Alegre, Puchuncaví",
    area: "43 parcelas · 2 y 4 hectáreas",
    price: "Desde CLP $ 890.000.000",
    description:
      "Un proyecto exclusivo de parcelas en un entorno privilegiado, pensado para quienes buscan tranquilidad, paisaje y valor a largo plazo.",
    image: "/media/proyectos/fundo-la-tiza.jpg",
  },
  {
    name: "Valparaíso",
    location: "Corredor costero de Valparaíso",
    area: "2.100 m²",
    price: "Desde CLP $ 430.000.000",
    description:
      "Propiedades con identidad, cercanía a la ciudad y un alto potencial de reposicionamiento en el puerto y sus alrededores.",
    image: "/media/proyectos/valparaiso.jpg",
  },
];

export default function ProyectosPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselImages = [
    { src: "/media/proyectos/proyecto1.png", alt: "Proyecto inmobiliario Quirke" },
    { src: "/media/proyectos/proyecto2.png", alt: "Espacio natural de un proyecto Quirke" },
    { src: "/media/proyectos/proyecto3.png", alt: "Entorno de un proyecto inmobiliario Quirke" },
  ];

  function changeSlide(direction: number) {
    setActiveSlide((current) => (current + direction + carouselImages.length) % carouselImages.length);
  }

  return (
    <main className="projects-page">
      <header className="header projects-header">
        <Link className="brand" href="/" aria-label="Quirke Inmobiliaria, inicio">
          <img src="/media/logo-jurke.png" alt="Quirke Inmobiliaria — Inversión es visión" />
        </Link>
        <nav aria-label="Navegación principal">
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Quiénes somos</Link>
          <Link className="active" href="/proyectos">Proyectos</Link>
          <a href="/#contacto">Contacto</a>
        </nav>
      </header>

      <section className="projects-video-hero section-dark">
        <video className="projects-video" autoPlay muted loop playsInline poster="/media/referencia.jpeg">
          <source src="/media/presentacion-jurke.mp4" type="video/mp4" />
        </video>
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
          <strong>4</strong>
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

        <div className="projects-carousel" aria-label="Galería de proyectos">
          <div className="carousel-image-wrap">
            <img
              src={carouselImages[activeSlide].src}
              alt={carouselImages[activeSlide].alt}
            />
            <button className="carousel-control previous" type="button" onClick={() => changeSlide(-1)} aria-label="Imagen anterior">
              ←
            </button>
            <button className="carousel-control next" type="button" onClick={() => changeSlide(1)} aria-label="Imagen siguiente">
              →
            </button>
          </div>
          <div className="carousel-dots">
            {carouselImages.map((image, index) => (
              <button
                className={index === activeSlide ? "is-active" : ""}
                key={image.src}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Ver imagen ${index + 1}`}
                aria-current={index === activeSlide ? "true" : undefined}
              />
            ))}
          </div>
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
