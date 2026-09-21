"use client";

import { FormEvent, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import SiteFooter from "./components/SiteFooter";

const projects = [
  {
    name: "Los Boldos",
    location: "Costa de Ritoque",
    area: "4.800 m²",
    price: "Desde CLP $ 620.000.000",
    description:
      "Terrenos costeros con entorno natural, cercanía al mar y un perfil ideal para inversión o vivienda de descanso.",
    image: "/media/proyectos/los_boldos.jpeg",
  },
  {
    name: "La Tiza",
    location: "Sector norte de Quilpué",
    area: "3.200 m²",
    price: "Desde CLP $ 490.000.000",
    description:
      "Parcelas con acceso, vistas y una proyección de valorización sostenida en una zona de constante crecimiento.",
    image: "/media/proyectos/la_tiza.jpeg",
  },
  {
    name: "Reñaca",
    location: "Valle Alegre, Puchuncaví",
    area: "43 parcelas · 2 y 4 hectáreas",
    price: "Desde CLP $ 890.000.000",
    description:
      "Un proyecto exclusivo de parcelas en un entorno privilegiado, pensado para quienes buscan tranquilidad, paisaje y valor a largo plazo.",
    image: "/media/proyectos/renaca.jpeg",
  },
  {
    name: "Valparaíso",
    location: "Corredor costero de Valparaíso",
    area: "2.100 m²",
    price: "Desde CLP $ 430.000.000",
    description:
      "Propiedades con identidad, cercanía a la ciudad y un alto potencial de reposicionamiento en el puerto y sus alrededores.",
    image: "/media/proyectos/valparaiso.jpeg",
  },
];

const navigationSections = ["inicio", "proyectos", "nosotros", "contacto"] as const;

export default function Home() {
  const [isSending, setIsSending] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSection, setActiveSection] = useState<(typeof navigationSections)[number]>("inicio");
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const carouselImages = [
    ...Array.from({ length: 5 }, (_, index) => ({
      src: `/media/Slider/slider${index + 1}.jpeg`,
      alt: `Imagen ${index + 1} del slider de proyectos Quirke`,
    })),
  ];

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

  function changeSlide(direction: number) {
    setActiveSlide((current) => (current + direction + carouselImages.length) % carouselImages.length);
  }

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    function updateActiveSection() {
      const headerOffset = 110;
      const currentPosition = window.scrollY + headerOffset;
      let nextSection: (typeof navigationSections)[number] = navigationSections[0];

      navigationSections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        const sectionTop = section ? section.getBoundingClientRect().top + window.scrollY : null;
        if (sectionTop !== null && sectionTop <= currentPosition) {
          nextSection = sectionId;
        }
      });

      setActiveSection(nextSection);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  function handleNavigationClick(sectionId: (typeof navigationSections)[number]) {
    setActiveSection(sectionId);
  }

  return (
    <main>
      <header className="header">
        <a className="brand" href="#inicio" aria-label="Quirke Inmobiliaria, inicio">
          <img src="/media/logo-jurke.png" alt="Quirke Inmobiliaria — Inversión es visión" />
        </a>
        <nav aria-label="Navegación principal">
          <a className={activeSection === "inicio" ? "active" : undefined} href="#inicio" onClick={() => handleNavigationClick("inicio")}>Inicio</a>
          <a className={activeSection === "proyectos" ? "active" : undefined} href="#proyectos" onClick={() => handleNavigationClick("proyectos")}>Proyectos</a>
          <a className={activeSection === "nosotros" ? "active" : undefined} href="#nosotros" onClick={() => handleNavigationClick("nosotros")}>Quiénes somos</a>
          <a className={activeSection === "contacto" ? "active" : undefined} href="#contacto" onClick={() => handleNavigationClick("contacto")}>Contacto</a>
        </nav>
      </header>

      <section id="inicio" className="home-carousel-section section-dark">
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
      </section>

      <section id="proyectos" className="home-projects">
        <div className="home-projects-heading">
          <p className="script-title dark">proyectos</p>
          <p>Conoce algunas oportunidades inmobiliarias seleccionadas por Quirke.</p>
        </div>
        <div className="home-project-grid">
          {projects.map((project) => (
            <button
              className="home-project-card"
              key={project.name}
              type="button"
              onClick={() => setSelectedProject(project)}
            >
              <span className="home-project-image-wrap">
                <img src={project.image} alt={project.name} />
              </span>
              <span className="home-project-copy">
                <span className="project-region">{project.location}</span>
                <strong>{project.name}</strong>
                <span className="home-project-link">Ver proyecto <span aria-hidden="true">→</span></span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <div className="section-divider" aria-hidden="true" />

      <section id="nosotros" className="about-section about-page-content">
        <div className="about-intro">
          <p className="section-kicker">Quiénes somos</p>
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

      {selectedProject && (
        <div className="project-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="project-modal-close" type="button" onClick={() => setSelectedProject(null)} aria-label="Cerrar información del proyecto">
              ×
            </button>
            <img src={selectedProject.image} alt={selectedProject.name} />
            <div className="project-modal-content">
              <p className="project-region">{selectedProject.location}</p>
              <h2 id="project-modal-title">{selectedProject.name}</h2>
              <p>{selectedProject.description}</p>
              <dl>
                <div>
                  <dt>Superficie</dt>
                  <dd>{selectedProject.area}</dd>
                </div>
                <div>
                  <dt>Valor referencial</dt>
                  <dd>{selectedProject.price}</dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      )}

      <div className="contact-footer">
        <section id="contacto" className="contact section-dark contact-footer-inner">
          <div className="contact-title">
            <p className="script-title">Hablemos de <span>tu próxima inversión</span></p>
            <p>Te asesoramos en propiedades, terrenos y oportunidades exclusivas en zonas estratégicas.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <a href="tel:+56974843852">+56 9 7484 3852</a>
              <a href="mailto:info@quilkeinmobiliaria.cl">info@quilkeinmobiliaria.cl</a>
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
