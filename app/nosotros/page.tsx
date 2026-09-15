"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import SiteFooter from "../components/SiteFooter";

const aboutBackgrounds = [
  "/media/proyectos/proyecto1.png",
  "/media/proyectos/proyecto2.png",
  "/media/proyectos/proyecto3.png",
];

export default function NosotrosPage() {
  const [backgroundImage, setBackgroundImage] = useState("/media/proyectos/quienessomos.png");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * aboutBackgrounds.length);
    setBackgroundImage(aboutBackgrounds[randomIndex]);
  }, []);

  return (
    <main className="about-page">
      <header className="header projects-header">
        <Link className="brand" href="/" aria-label="Quirke Inmobiliaria, inicio">
          <img src="/media/logo-jurke.png" alt="Quirke Inmobiliaria — Inversión es visión" />
        </Link>
        <nav aria-label="Navegación principal">
          <Link href="/">Inicio</Link>
          <Link className="active" href="/nosotros">Quiénes somos</Link>
          <Link href="/proyectos">Proyectos</Link>
          <a href="/#contacto">Contacto</a>
        </nav>
      </header>

      <section
        className="about-page-hero section-dark"
        style={{ backgroundImage: `url("${backgroundImage}")` }}
      >
        <p className="section-kicker">Quirke Inmobiliaria</p>
        <h1>Quiénes somos</h1>
        <p>Desarrollamos oportunidades inmobiliarias con visión de largo plazo.</p>
      </section>

      <section className="about-section about-page-content">
        <div className="about-intro">
          <p className="section-kicker">Nuestra empresa</p>
          <h2>Conectamos personas con espacios que crean valor.</h2>
          <p>
            En Quirke Inmobiliaria conectamos personas con terrenos y propiedades seleccionadas en ubicaciones estratégicas. Trabajamos con una mirada cercana, profesional y orientada a crear valor sostenible en cada proyecto.
          </p>
        </div>
        <div className="about-mv">
          <article>
            <span>Misión</span>
            <p>Entregar oportunidades inmobiliarias confiables, acompañando cada decisión con información clara, asesoría cercana y una mirada responsable sobre el territorio.</p>
          </article>
          <article>
            <span>Visión</span>
            <p>Ser una inmobiliaria reconocida por desarrollar proyectos con identidad, calidad y potencial, construyendo relaciones duraderas con nuestros clientes e inversionistas.</p>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}