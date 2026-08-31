# Gestograma Pro — Calculadora de Edad Gestacional de Alta Precisión

Calculadora médica de edad gestacional por FUM o ecografía. Precisión ±1 día, con Fecha Probable de Parto (FPP), trimestre, línea de tiempo y seguimiento fetal semana a semana.

**Demo en vivo:** https://gestograma.github.io/

![Gestograma Pro](og-image.png)

## ✨ Características

- **Cálculo por FUM y por ecografía** — con validación de fechas
- **Precisión ±1 día** — cálculo exacto de semanas y días
- **Fecha Probable de Parto (FPP)** automática
- **Trimestre y progreso** visual del embarazo
- **Desarrollo fetal semana a semana** — peso, talla y descripción clínica (4 a 42 semanas)
- **Modo oscuro** — detecta preferencia del sistema y guarda en localStorage
- **PWA-ready** — favicons 16/32/180/192/512
- **SEO optimizado** — Open Graph para WhatsApp, Twitter Cards, JSON-LD, robots.txt y sitemap.xml
- **100% estático** — funciona en GitHub Pages sin backend

## 🚀 Uso

1. Ingresá la Fecha de Última Menstruación (FUM) **o** la fecha de ecografía
2. La calculadora muestra automáticamente:
   - Edad gestacional en semanas + días
   - FPP
   - Trimestre actual
   - Barra de progreso
   - Tarjeta fetal con peso, talla y descripción

No se guarda ningún dato del paciente — todo se calcula en el navegador.

## 🛠️ Tecnologías

- React + TailwindCSS
- GitHub Pages
- Vanilla JS para modo oscuro y SEO dinámico

## 📁 Estructura del proyecto

```
gestograma.github.io/
├── index.html              # App principal (gestograma intacto + SEO + dark mode)
├── og-image.png            # 1200x630 para WhatsApp / Facebook
├── logo-transparente.png   # Logo completo con texto
├── icon-only.png           # Solo icono circular
├── favicon-16.png
├── favicon-32.png
├── favicon-180.png
├── favicon-192.png
├── favicon-512.png
├── robots.txt
├── sitemap.xml
├── README.md
└── LICENSE
```

## 🌙 Modo oscuro

Implementado sin modificar la lógica del gestograma:

- Usa `html.dark` con variables CSS
- Detecta `prefers-color-scheme: dark`
- Botón flotante 🌙/☀️ arriba a la derecha
- Guarda preferencia en `localStorage.theme`

## 🔍 SEO - Por qué Google no mostraba el sitio

Errores corregidos en esta versión:

1. `<head` sin cierre `>` → impedía que Google leyera los meta tags
2. Doble `<title>` y `lang="en"` en contenido español
3. `og-image.png` inexistente → GitHub mostraba su logo genérico
4. Faltaban favicons, robots.txt, sitemap.xml y datos estructurados JSON-LD

**Para indexar en Google:**

1. Subir todo a la rama `main`
2. Verificar en https://search.google.com/search-console
3. Enviar sitemap: `https://gestograma.github.io/sitemap.xml`
4. Solicitar indexación en Inspección de URLs
5. El preview de WhatsApp se puede forzar en: https://developers.facebook.com/tools/debug/

## 📄 Licencia

MIT — ver archivo [LICENSE](LICENSE)

## ⚕️ Disclaimer médico

Esta herramienta es de apoyo informativo y no reemplaza la valoración médica profesional. Siempre confirmar con ecografía y criterio clínico.

---

Hecho con ❤️ para uso obstétrico en Uruguay — es_UY
