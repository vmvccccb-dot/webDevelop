export default function SiteFooter() {
  return (
    <footer className="contact-footer">
      <div className="site-footer-content">
        <a className="footer-brand" href="#inicio" aria-label="Quirke Inmobiliaria, inicio">
          <img src="/media/logo-jurke-white.png" alt="Quirke Inmobiliaria" />
        </a>
        <nav className="footer-options" aria-label="Opciones del footer">
          <strong>Opciones</strong>
          <a href="#inicio">Inicio</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#nosotros">Quiénes somos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <div className="footer-social">
          <strong>Redes sociales</strong>
          <div className="social-links" aria-label="Redes sociales">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <img src="/media/social/instagram.svg" alt="" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <img src="/media/social/facebook.png" alt="" />
            </a>
            <a href="https://wa.me/56974843852" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <img src="/media/social/whatsapp.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="site-footer-bar">
        <p>© 2026 Quirke Inmobiliaria. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
