# Gestograma Pro — gestograma.github.io

**Calculadora de Edad Gestacional de Alta Precisión**

Live: **https://gestograma.github.io/**

Herramienta médica precisa, rápida y fácil de usar. Calcula edad gestacional por FUM o por ecografía, fecha probable de parto (FPP), concepción, trimestre, días restantes y progreso del embarazo. Sin errores de zona horaria.

> Hecho para Uruguay / LATAM. Funciona 100% en el navegador, sin backend.

### 🚀 Demo
Sube `index.html` a tu repo `gestograma.github.io` y queda online automático con GitHub Pages.

### ✨ Qué hace

- **Doble entrada:** FUM o Fecha de Ecografía + EG de esa eco (ej: 8s 3d)
- **Corrección automática:** Si hay eco de 1er trimestre, recalcula FUM corregida = `Fecha Eco - (semanas*7 + días)` — estándar ACOG
- **Cálculos:** FPP = FUM + 280 días (Naegele), Concepción = FUM + 14 días, EG exacta en semanas+días, días totales, días restantes, % completado (0-40s)
- **Clasificación:** Pretérmino, Término precoz 37-38+6, Término completo 39-40+6, Tardío 41-41+6, Postérmino
- **Visual:** Barra de progreso, timeline de hitos (implantación, fin 1er trim, viabilidad 24s, término 37s, FPP 40s), y bloque "¿Qué pasa esta semana?" con talla/peso de referencia
- **Acciones:** Copiar resultado y Compartir por WhatsApp

### 🎯 Por qué es más preciso

La mayoría de los gestogramas usan `new Date("2024-01-01")` que en GMT-3 te resta 1 día. Este usa:

```js
parseLocalDate(str) => new Date(str + 'T00:00:00')
diffDays(a,b) => floor((b-a)/86400000)
addDays(date, n) => date.setDate(date.getDate()+n)
```

Resultado: precisión ±1 día, sin shift por UTC.

### 📐 Fórmulas

```
FUMc = FechaEco - (SemanasEco*7 + DiasEco)
FPP = FUMc + 280
Concepción = FUMc + 14
EG_dias = FechaEvaluar - FUMc
EG = floor(EG_dias/7) sem + EG_dias%7 días
Restantes = 280 - EG_dias
Trimestre: 1º <14s, 2º 14s-27s6d, 3º >=28s
Rango normal parto: FPP-21d a FPP+14d (37s-42s)
```

### 📁 Deploy en GitHub Pages

Tu dominio `https://gestograma.github.io/` es un User Pages site.

1. Crea repo en GitHub llamado exactamente `gestograma.github.io`
2. Sube estos 2 archivos a la rama `main` en la raíz:
   - `index.html` (es el gestograma-pro.html que te generé)
   - `README.md` (este archivo)
3. Ve a Settings > Pages > Source: Deploy from branch `main` / root
4. Listo. En 1-2 min queda online.

No necesita build. Es un solo HTML con CSS y JS inline.

### 🔍 SEO y Analytics preservado

Se mantiene intacto lo que ya tenías:

- `gtag.js` ID `G-6H3NFY3YE2`
- `google-site-verification` `LCGPDSlNvAWgG8nmTtlGldRpRumg4z9EgABCd0Uh0HY`
- metas `description`, `keywords`, `og:title`, `twitter:card`

### 🛠️ Stack

HTML5 + CSS3 (variables, Grid) + Vanilla JS (0 dependencias) + Poppins

### ⚕️ Disclaimer

Herramienta de apoyo informativo. No sustituye criterio médico. La edad gestacional definitiva debe correlacionarse con clínica y ecografía por profesional de salud.

### 👤 Autor

Miguel Alves — @m.alvcig — Montevideo, UY

Licencia MIT.
