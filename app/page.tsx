"use client";

import { FormEvent } from "react";

const projects = [
  { place: "QUINTERO", script: "ritoque", text: "Parcelas conectadas con el paisaje costero, pensadas para vivir tranquilo y cerca de todo." },
  { place: "OLMUÉ", script: "Olmué", text: "Espacios que combinan naturaleza, aire puro y una excelente conectividad para disfrutar todo el año." },
  { place: "REÑACA", script: "Concón", text: "Un entorno privilegiado para construir proyectos de vida con vista, calma y comodidad." },
];

export default function Home() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
    event.currentTarget.reset();
  }

  return (
    <main>
      <header className="header">
        <a className="brand" href="#inicio" aria-label="Jürke Inmobiliaria, inicio">
          <img src="/media/logo-jurke.png" alt="Jürke Inmobiliaria — Inversión es visión" />
        </a>
        <nav aria-label="Navegación principal">
          <a href="#inicio">Inicio</a><a href="#nosotros">Quiénes somos</a><a href="#proyectos">Proyectos</a><a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <video className="hero-video" autoPlay muted loop playsInline poster="/media/referencia.jpeg">
          <source src="/media/presentacion-jurke.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">VALLE ALEGRE</p>
          <h1>fundo la tiza</h1>
          <p className="hero-detail">43 parcelas de 2 y 4 hectáreas con luz y rol propio</p>
          <a className="button" href="#proyectos">Conoce el proyecto <span>→</span></a>
        </div>
        <div className="scroll-note">Desliza para descubrir</div>
      </section>

      <section id="proyectos" className="projects section-dark">
        <p className="script-title">proyectos</p>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.place}>
              <h2>{project.place}<em>{project.script}</em></h2>
              <p>{project.text}</p>
              <a href="#contacto">Más información <span>›</span></a>
            </article>
          ))}
        </div>
      </section>

      <section id="nosotros" className="about">
        <div className="about-image"><img src="/media/referencia.jpeg" alt="Vista de Valle Alegre" /></div>
        <div className="about-copy">
          <p className="eyebrow dark">VALLE ALEGRE</p>
          <h2>fundo la tiza</h2>
          <p>Este proyecto se encuentra en el sector de Valle Alegre, sobre la ruta interior que une las localidades de Maitencillo por Concón, en el límite comunal entre Puchuncaví y Quintero.</p>
          <ul><li>5 min. de Puchuncaví</li><li>10 min. de Maitencillo por el nuevo by-pass</li><li>25 min. de la rotonda de Concón</li></ul>
          <p>Un lugar para quienes buscan espacio, tranquilidad y una conexión genuina con el entorno natural.</p>
          <a className="text-link" href="#contacto">Agenda una visita →</a>
        </div>
      </section>

      <section id="contacto" className="contact section-dark">
        <div className="contact-title"><p className="script-title">pongámonos en <span>contacto</span></p><p>Conversemos sobre tu próxima inversión.</p></div>
        <div className="contact-grid">
          <div className="contact-info"><a href="tel:+56974843852">+56 9 7484 3852</a><a href="mailto:info@jurkeinmobiliaria.cl">info@jurkeinmobiliaria.cl</a></div>
          <form onSubmit={handleSubmit}>
            <label>Nombre<input name="name" required /></label>
            <label>Teléfono<input name="phone" type="tel" required /></label>
            <label>Correo electrónico<input name="email" type="email" required /></label>
            <label>Mensaje<textarea name="message" required rows={4} /></label>
            <button type="submit">Enviar <span>→</span></button>
          </form>
        </div>
      </section>

      <footer><div className="brand footer-brand"><img src="/media/logo-jurke.png" alt="Jürke Inmobiliaria — Inversión es visión" /></div><p>© {new Date().getFullYear()} Jürke Inmobiliaria</p><div><a href="#inicio">Instagram</a><a href="#inicio">LinkedIn</a></div></footer>
    </main>
  );
}
