export default function SiteFooter() {
  return (
    <footer className="contact-footer">
      <div className="site-footer-bar">
        <p>© 2026 Quirke Inmobiliaria. Todos los derechos reservados.</p>
        <div className="social-links" aria-label="Redes sociales">
          <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
            <img src="/media/social/x.png" alt="" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <img src="/media/social/facebook.png" alt="" />
          </a>
          <a href="https://wa.me/56974843852" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <img src="/media/social/whatsapp.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}
