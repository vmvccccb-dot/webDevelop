"use client";

import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isIntro, setIsIntro] = useState(true);
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSending(true);

    try {
      const formData = new FormData(event.currentTarget);

      await emailjs.send(
        "service_vajpl0o",
        "template_4i6qifa",
        {
          to_email: "victor.munozm1@gmail.com, roalonso.cl@gmail.com",
          name: formData.get("name"),
          phone: formData.get("phone"),
          email: formData.get("email"),
          message: formData.get("message"),
        },
        "Lgq1-ZC1fryjSrKld",
      );
      window.alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
      event.currentTarget.reset();
    } catch (error) {
      const emailError = error as { text?: string; status?: number };
      console.error("Error al enviar el formulario:", error);
      window.alert(
        `No pudimos enviar tu mensaje (${emailError.status ?? "sin código"}). ${emailError.text ?? "Revisa la configuración de EmailJS."}`,
      );
    } finally {
      setIsSending(false);
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const time = videoRef.current.currentTime;
      if (time < 3.8) {
        setIsIntro(true);
      } else {
        setIsIntro(false);
      }
    }
  };

  return (
    <main>
      <header className="header">
        <a className="brand" href="#inicio" aria-label="Quirke Inmobiliaria, inicio">
          <img src="/media/logo-jurke.png" alt="Quirke Inmobiliaria — Inversión es visión" />
        </a>
        <nav aria-label="Navegación principal">
          <a className="active" href="#inicio">Inicio</a>
          <a href="/nosotros">Quiénes somos</a>
          <a href="/proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/referencia.jpeg"
          onTimeUpdate={handleTimeUpdate}
        >
          <source src="/media/presentacion-jurke.mp4" type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <div className={`hero-content ${isIntro ? "hero-intro" : ""}`}>
          <div className="hero-top">
            <p className="eyebrow">Quirke</p>
            <h1>Inversión es visión</h1>
          </div>
          <div className="hero-bottom">
            <p className="hero-detail">Fundo La Tiza • Valle Alegre, Puchuncaví</p>
            <a className="button" href="/proyectos">Descubre nuestros proyectos <span>→</span></a>
          </div>
        </div>
        <div className={`scroll-note ${isIntro ? "is-hidden" : ""}`}>Explora la propuesta</div>
      </section>

      <section className="hero-highlights">
        <div>
          <span>Ubicación</span>
          <strong>Valle Alegre</strong>
        </div>
        <div>
          <span>Proyecto</span>
          <strong>Fundo La Tiza</strong>
        </div>
        <div>
          <span>Parcelas</span>
          <strong>43 unidades</strong>
        </div>
        <div>
          <span>Superficie</span>
          <strong>2 a 4 hectáreas</strong>
        </div>
      </section>

      <section className="value-section">
        <div className="value-intro">
          <p className="section-kicker">Nuestra propuesta</p>
          <h2>Un desarrollo pensado para inversión, tranquilidad y crecimiento.</h2>
        </div>
        <div className="value-grid">
          <article>
            <span>01</span>
            <h3>Ubicación estratégica</h3>
            <p>Acceso directo a la costa y a zonas de alta demanda, con un entorno de valor residencial y de inversión.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Calidad de lote</h3>
            <p>Parcelas con proporciones funcionales, topografía adecuada y diseño orientado a la vida en comunidad.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Potencial de inversión</h3>
            <p>Una oportunidad para posicionarse en un sector con crecimiento sostenido y atractivo para uso residencial.</p>
          </article>
        </div>
      </section>

      <div className="contact-footer">
        <section id="contacto" className="contact section-dark contact-footer-inner">
          <div className="contact-title">
            <p className="script-title">Hablemos de <span>tu próxima inversión</span></p>
            <p>Te asesoramos en propiedades, terrenos y oportunidades exclusivas en zonas estratégicas.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <a href="tel:+56974843852">+56 9 7484 3852</a>
              <a href="mailto:info@quilqueinmobiliaria.cl">info@quilqueinmobiliaria.cl</a>
            </div>
            <form onSubmit={handleSubmit}>
              <label>Nombre<input name="name" required /></label>
              <label>Teléfono<input name="phone" type="tel" required /></label>
              <label>Correo electrónico<input name="email" type="email" required /></label>
              <label>Mensaje<textarea name="message" required rows={4} /></label>
              <button className="contact-submit" type="submit" disabled={isSending}>
                {isSending ? "Enviando..." : "Enviar"} <span>→</span>
              </button>
            </form>
          </div>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
