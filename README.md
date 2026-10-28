# Ara Chile Beauty · sitio web

Vitrina de skincare coreano de Ara Chile Beauty, publicada en https://arachilebeauty.netlify.app.
Cada cambio que se guarda en la rama `main` se publica solo en Netlify.

## Dónde se edita cada cosa

| Quiero cambiar… | Archivo |
| --- | --- |
| Productos, precios, agotados, combos, artículos del blog, WhatsApp e Instagram | `js/app.js`, sección **EDITA AQUÍ** |
| Colores y diseño | `css/estilos.css` |
| Textos fijos (portada, Quiénes somos, Cómo pedir) | `index.html` |
| Fotos | carpeta `img/` |
| Reglas de seguridad del navegador | `_headers` |

## Ejemplos rápidos (en `js/app.js`)

- Cambiar un precio: `precio:24990` → `precio:22990` (sin puntos ni $).
- Marcar un producto como agotado: agrega `agotado:true,` en su línea. Para que vuelva, bórralo.
