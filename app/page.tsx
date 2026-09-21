"use client";

import { FormEvent, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import SiteFooter from "./components/SiteFooter";

type Project = {
  name: string;
  location: string;
  area: string;
  price: string;
  description: string;
  image: string;
  images: string[];
  details?: Array<{ label: string; value: string; href?: string }>;
};

function createProjectDetails(pie: string, price: string, location: string) {
  return [
    { label: "Electricidad", value: "Medidor instalado en cada terreno" },
    { label: "Agua potable", value: "Medidor instalado en cada terreno" },
    { label: "Saneamiento", value: "Kit de fosa séptica incluido" },
    { label: "Urbanización", value: "Caminos compactados, luminarias públicas, plaza de juegos infantiles, cancha de fútbol playa, voleibol y tenis" },
    { label: "Comisión de corretaje", value: "2,5%" },
    { label: "Entrega proyectada", value: "Finales del primer semestre de 2026" },
    { label: "Ubicación exacta", value: `Ver ubicación de ${location} en Google Maps` },
    { label: "Financiamiento", value: `Crédito directo: pie del ${pie} y saldo hasta en 60 cuotas sin interés` },
    { label: "Valor venta en verde", value: price },
  ];
}

const projects: Project[] = [
  {
    name: "LOS BOLDOS",
    location: "Reserva Los Boldos, Olmué",
    area: "4.800 m²",
    price: "Desde CLP $ 620.000.000",
    description:
      "Terrenos costeros con entorno natural, cercanía al mar y un perfil ideal para inversión o vivienda de descanso.",
    image: "/media/proyectos/los_boldos/LosBoldos-01.jpeg",
    images: [
      "/media/proyectos/los_boldos/LosBoldos-01.jpeg",
      "/media/proyectos/los_boldos/LosBoldos-02.jpeg",
      "/media/proyectos/los_boldos/LosBoldos-03.jpeg",
      "/media/proyectos/los_boldos/LosBoldos-04.jpg",
    ],
    details: createProjectDetails("25%", "$620.000.000 a $680.000.000", "LOS BOLDOS"),
  },
  {
    name: "LA TIZA",
    location: "Fundo La Tiza, Valle Alegre",
    area: "3.200 m²",
    price: "Desde CLP $ 490.000.000",
    description:
      "Parcelas con acceso, vistas y una proyección de valorización sostenida en una zona de constante crecimiento.",
    image: "/media/proyectos/la_tiza/LaTiza-01.jpeg",
    images: [
      "/media/proyectos/la_tiza/LaTiza-01.jpeg",
      "/media/proyectos/la_tiza/LaTiza-02.jpeg",
      "/media/proyectos/la_tiza/LaTiza-03.jpeg",
      "/media/proyectos/la_tiza/LaTiza-04.jpeg",
    ],
    details: createProjectDetails("25%", "$490.000.000 a $540.000.000", "LA TIZA"),
  },
  {
    name: "CONCON",
    location: "Casa en Playa Amarilla, Concón",
    area: "43 parcelas · 2 y 4 hectáreas",
    price: "Desde CLP $ 890.000.000",
    description:
      "Un proyecto exclusivo de parcelas en un entorno privilegiado, pensado para quienes buscan tranquilidad, paisaje y valor a largo plazo.",
    image: "/media/proyectos/concon/Reñaca-01.jpeg",
    images: [
      "/media/proyectos/concon/Reñaca-01.jpeg",
      "/media/proyectos/concon/Reñaca-02.jpeg",
      "/media/proyectos/concon/Reñaca-03.jpeg",
      "/media/proyectos/concon/Reñaca-04.jpeg",
      "/media/proyectos/concon/Reñaca-05.jpeg",
    ],
    details: createProjectDetails("25%", "$890.000.000 a $980.000.000", "CONCON"),
  },
  {
    name: "QUINTERO ALTOS DEL BELLOTO",
    location: "Altos del Belloto, Quintero",
    area: "Consultar superficie",
    price: "Consultar valor",
    description:
      "Una alternativa inmobiliaria en Quintero, pensada para quienes buscan conectividad, entorno natural y proyección de valor.",
    image: "/media/proyectos/quintero_altos_del_belloto/Quintero-01.jpg",
    images: [
      "/media/proyectos/quintero_altos_del_belloto/Quintero-01.jpg",
      "/media/proyectos/quintero_altos_del_belloto/Quintero-02.jpg",
      "/media/proyectos/quintero_altos_del_belloto/Quintero-03.jpg",
      "/media/proyectos/quintero_altos_del_belloto/Quintero-04.jpg",
    ],
    details: createProjectDetails("25%", "$390.000.000 a $450.000.000", "QUINTERO ALTOS DEL BELLOTO"),
  },
  {
    name: "QUINTERO NORMANDIE",
    location: "Hacienda Normandie, Quintero",
    area: "680 m² a 760 m²",
    price: "$45.000.000 a $55.000.000 en verde",
    description:
      "Terrenos urbanizados en Quintero, con servicios instalados y alternativas de financiamiento directo.",
    details: [
      { label: "Electricidad", value: "Medidor instalado en cada terreno" },
      { label: "Agua potable", value: "Medidor instalado en cada terreno" },
      { label: "Saneamiento", value: "Kit de fosa séptica incluido" },
      { label: "Urbanización", value: "Caminos compactados, luminarias públicas, plaza de juegos infantiles, cancha de fútbol playa, voleibol y tenis" },
      { label: "Comisión de corretaje", value: "2,5%" },
      { label: "Entrega proyectada", value: "Finales del primer semestre de 2026" },
      { label: "Ubicación exacta", value: "Ver ubicación en Google Maps", href: "https://maps.google.com/?q=-32.804352,-71.526970" },
      { label: "Financiamiento", value: "Crédito directo: pie del 25% y saldo hasta en 60 cuotas sin interés" },
    ],
    image: "/media/proyectos/quintero_normandie/Normandie-01.jpeg",
    images: [
      "/media/proyectos/quintero_normandie/Normandie-01.jpeg",
      "/media/proyectos/quintero_normandie/Normandie-02.jpeg",
      "/media/proyectos/quintero_normandie/Normandie-03.jpeg",
      "/media/proyectos/quintero_normandie/Normandie-04.jpeg",
    ],
  },
  {
    name: "RECREO VIÑA DEL MAR",
    location: "Casa en Recreo, Viña del Mar",
    area: "2.100 m²",
    price: "Desde CLP $ 430.000.000",
    description:
      "Propiedades con identidad, cercanía a la ciudad y un alto potencial de reposicionamiento en el puerto y sus alrededores.",
    image: "/media/proyectos/recreo_viña_del_mar/RecreoViña-01.jpg",
    images: [
      "/media/proyectos/recreo_viña_del_mar/RecreoViña-01.jpg",
      "/media/proyectos/recreo_viña_del_mar/RecreoViña-02.jpg",
      "/media/proyectos/recreo_viña_del_mar/RecreoViña-03.jpg",
      "/media/proyectos/recreo_viña_del_mar/RecreoViña-04.jpg",
      "/media/proyectos/recreo_viña_del_mar/RecreoViña-05.jpg",
      "/media/proyectos/recreo_viña_del_mar/RecreoViña-06.jpg",
      "/media/proyectos/recreo_viña_del_mar/RecreoViña-07.jpg",
      "/media/proyectos/recreo_viña_del_mar/RecreoViña-08.jpg",
    ],
    details: createProjectDetails("25%", "$430.000.000 a $490.000.000", "RECREO VIÑA DEL MAR"),
  },
];

const navigationSections = ["inicio", "proyectos", "nosotros", "contacto"] as const;

export default function Home() {
  const [isSending, setIsSending] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeProjectImage, setActiveProjectImage] = useState(0);
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

  function openProject(project: (typeof projects)[number]) {
    setSelectedProject(project);
    setActiveProjectImage(0);
  }

  function changeProjectImage(direction: number) {
    if (!selectedProject) return;
    setActiveProjectImage((current) => (current + direction + selectedProject.images.length) % selectedProject.images.length);
  }

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
      if (event.key === "ArrowLeft") changeProjectImage(-1);
      if (event.key === "ArrowRight") changeProjectImage(1);
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [selectedProject]);

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
          <p className="script-title dark">Proyectos</p>
          <p>Conoce algunas oportunidades inmobiliarias seleccionadas por Quirke.</p>
        </div>
        <div className="home-project-grid">
          {projects.map((project) => (
            <button
              className="home-project-card"
              key={project.name}
              type="button"
              onClick={() => openProject(project)}
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
            <div className="project-modal-gallery">
              <img
                src={selectedProject.images[activeProjectImage]}
                alt={`${selectedProject.name}, imagen ${activeProjectImage + 1} de ${selectedProject.images.length}`}
              />
              <button className="project-modal-control previous" type="button" onClick={() => changeProjectImage(-1)} aria-label="Imagen anterior">
                ←
              </button>
              <button className="project-modal-control next" type="button" onClick={() => changeProjectImage(1)} aria-label="Imagen siguiente">
                →
              </button>
              <div className="project-modal-dots" aria-label="Imágenes del proyecto">
                {selectedProject.images.map((image, index) => (
                  <button
                    className={index === activeProjectImage ? "is-active" : ""}
                    key={image}
                    type="button"
                    onClick={() => setActiveProjectImage(index)}
                    aria-label={`Ver imagen ${index + 1}`}
                    aria-current={index === activeProjectImage ? "true" : undefined}
                  />
                ))}
              </div>
            </div>
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
              {selectedProject.details && (
                <ul className="project-modal-details">
                  {selectedProject.details.map((detail) => (
                    <li key={detail.label}>
                      <span>{detail.label}</span>
                      {detail.href ? (
                        <a href={detail.href} target="_blank" rel="noreferrer">
                          {detail.value}
                        </a>
                      ) : (
                        <strong>{detail.value}</strong>
                      )}
                    </li>
                  ))}
                </ul>
              )}
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
              <a href="mailto:info@quirkeinmobiliaria.cl">info@quirkeinmobiliaria.cl</a>
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
