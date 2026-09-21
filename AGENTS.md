# AGENTS.md

## Visión general del proyecto

- Este repositorio es una landing estática en Next.js para una inmobiliaria/propiedad de marketing.
- El sitio usa el App Router de Next.js y está centrado en una sola página principal.
- No hay backend, autenticación ni APIs propias; la experiencia es principalmente estática.
- El formulario de contacto debe seguir comportándose como una confirmación local y no enviar datos a un servidor.

## Convenciones de trabajo

- Mantén los cambios mínimos y centrados en la landing; evita introducir nuevas dependencias sin necesidad.
- Prioriza contenido y estructura en español, alineado con la marca actual del proyecto.
- Conserva la identidad visual actual: secciones oscuras, encabezados con estilo script, navegación por anclas y enfoque de marca premium.
- Si tocas el formulario, mantén el `alert` local y el `reset` del formulario; no agregues backend ni endpoints nuevos.
- Si agregas media, usa rutas bajo `public/media/` y referencia con `/media/...`.

## Estructura clave

- `app/page.tsx`: contenido principal de la landing y la lógica interactiva local.
- `app/layout.tsx`: metadatos del documento y layout raíz.
- `app/globals.css`: estilos globales y la mayor parte del diseño visual.
- `public/media/`: imágenes, videos y assets del proyecto.
- `README.md`: instrucciones de ejecución y despliegue.

## Comandos habituales

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run lint`

## Reglas de edición

- Mantén la navegación por anchors (`#inicio`, `#proyectos`, `#nosotros`, `#contacto`) funcionando.
- Si cambias textos o secciones, conserva la intención de una landing comercial y no conviertas el sitio en un panel administrativo o app multi-página.
- Para contenido visual, usa componentes simples y estilos existentes; evita estructuras complejas si no son necesarias.
- Al editar la página principal, piensa en el flujo UX: hero, proyectos, nosotros y contacto.

## Despliegue

- El proyecto está preparado para desplegarse en Vercel de forma directa con el comando de build de Next.js.
- No asumas que existe infraestructura adicional fuera de la app estática.
