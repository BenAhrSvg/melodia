# Design System & Coding Agent 2026
## Master Guideline: Full-Width, 3-Column & Deep Research
### Version 4.0 — Melodia Gelateria Edition

---

## PHASE 0: AGENT INITIALISIERUNG

Der Agent MUSS vorab klären:

1. **Branche & Referenz:** Frage nach Branche und konkreten Mitbewerber-Links.
2. **Autonomous Deep Research:** Suche bei fehlendem Link eigenständig nach Branchen-Best-Practices 2026 und evaluiere diese vor dem Coding.

---

## PHASE 1: LAYOUT REGELN (NO-SLOTS)

### Struktur-Vorgaben

- **3-Column Design:** Standard-Desktop-Layout basiert auf einem flexiblen 3-Spalten-Grid (ideal für Bento-Kombinationen).
- **Full-Width Prinzip:** Nutze die volle Breite des Screens (Edge-to-Edge). Vermeide "Schlauch-Designs" (starre, schmale Content-Container).
- **Mobile-First Priority:** Designe primär für Mobile (Single Column) und transformiere flüssig in das Full-Width 3-Column Grid.

### Breakpoints

| Name     | Breite     | Spalten |
|----------|------------|---------|
| mobile   | < 640px    | 1       |
| tablet   | 640–992px  | 2       |
| desktop  | > 992px    | 3       |
| wide     | > 1400px   | 3 + Edge-to-Edge |

---

## PHASE 2: WORKFLOW & KOMPONENTEN

- **Komponenten-Zwang:** Keine redundanten Codeschnipsel. Baue wiederverwendbare Module.
- **Nav-Anchor-Sync:** Jede Section (mit ID) triggert die Frage: "Soll ein neuer Navigationspunkt/Ankerlink erstellt werden?"
- **Deep Research Modus:** Bei UX-Unsicherheit (z.B. Formular-Logik) automatisch Best Practices recherchieren.

---

## PHASE 3: DESIGN SPECS & PERFORMANCE

### 1. Token-System

#### Farbpalette — Melodia Brand

Skala 0–700. **300 = Base.** Schritte je 25% Helligkeitsdifferenz.

| Token              | Hex       | Verwendung                   |
|--------------------|-----------|------------------------------|
| `--emerald-0`      | #f0faf5   | Hintergrund-Tint             |
| `--emerald-100`    | #c8ecd8   | Hover-Fills, Badges          |
| `--emerald-200`    | #80cfa4   | Sekundäre Akzente            |
| `--emerald-300`    | #2da160   | **Base — Emerald Light**     |
| `--emerald-400`    | #1F814A   | **Brand Primary**            |
| `--emerald-500`    | #186040   | Hover States                 |
| `--emerald-600`    | #155e36   | Pressed / Active             |
| `--emerald-700`    | #0d3d22   | Text auf hellem Hintergrund  |

| Token              | Hex       | Verwendung                   |
|--------------------|-----------|------------------------------|
| `--cream-0`        | #ffffff   | Weiß                         |
| `--cream-100`      | #fefef9   | Card-Hintergrund             |
| `--cream-200`      | #FCFAF2   | **Page Background (Base)**   |
| `--cream-300`      | #f2efe1   | Section Alt-Background       |
| `--cream-400`      | #e8e3cc   | Divider / Border             |
| `--cream-500`      | #cdc5a0   | Deaktivierte Elemente        |

| Token              | Hex       | Verwendung                   |
|--------------------|-----------|------------------------------|
| `--text-900`       | #1a1a1a   | Headlines                    |
| `--text-700`       | #2d3436   | Body Text (Base)             |
| `--text-400`       | #636e72   | Secondary / Captions         |
| `--text-200`       | #b2bec3   | Placeholder / Disabled       |

#### Semantische Tokens (CSS Custom Properties)

```css
:root {
  /* Brand */
  --color-primary:        #1F814A;
  --color-primary-light:  #2da160;
  --color-primary-dark:   #155e36;

  /* Surface */
  --color-bg:             #FCFAF2;
  --color-bg-alt:         #f2efe1;
  --color-surface:        #ffffff;

  /* Text */
  --color-text:           #2d3436;
  --color-text-muted:     #636e72;

  /* Glass */
  --glass-fill:           rgba(255,255,255,0.15);
  --glass-border:         rgba(255,255,255,0.2);
  --glass-blur:           blur(15px);
}
```

---

### 2. Typografie

| Rolle         | Font          | Weight | Größe (clamp)                      |
|---------------|---------------|--------|------------------------------------|
| Display / Logo| Great Vibes   | 400    | `clamp(2.5rem, 6vw, 5rem)`         |
| H1            | Montserrat    | 700    | `clamp(3rem, 7vw, 6rem)`           |
| H2            | Montserrat    | 700    | `clamp(2rem, 4vw, 3.5rem)`         |
| H3            | Montserrat    | 600    | `clamp(1.2rem, 2vw, 1.6rem)`       |
| Body          | Montserrat    | 400    | `clamp(0.9rem, 1.2vw, 1rem)`       |
| Caption       | Montserrat    | 500    | `0.75rem`                          |
| Label/Tag     | Montserrat    | 700    | `0.7rem` · `letter-spacing: 2px`   |

---

### 3. 8pt Spacing Grid

Skala 0–700. Alle Abstände sind Vielfache von **8px**.

| Token     | px  | rem    |
|-----------|-----|--------|
| `--s-0`   | 0   | 0      |
| `--s-100` | 8   | 0.5rem |
| `--s-200` | 16  | 1rem   |
| `--s-300` | 24  | 1.5rem |
| `--s-400` | 32  | 2rem   |
| `--s-500` | 40  | 2.5rem |
| `--s-600` | 48  | 3rem   |
| `--s-700` | 56  | 3.5rem |

Section-Padding: `clamp(4rem, 10vw, 10rem) clamp(1rem, 10%, 10%)`

---

### 4. Bento Grid Ratios

Feste Seitenverhältnisse für alle Boxen:

| Klasse         | Ratio | Verwendung              |
|----------------|-------|-------------------------|
| `.ratio-1-1`   | 1:1   | Icon-Cards, Thumbnails  |
| `.ratio-16-9`  | 16:9  | Hero-Bilder, Videos     |
| `.ratio-4-5`   | 4:5   | Portrait-Cards          |
| `.bento-large` | 2×2   | Hauptbild (span 2/2)    |
| `.bento-wide`  | 2×1   | Feature-Strip           |
| `.bento-tall`  | 1×2   | Portrait-Feature        |

---

### 5. Asset-Logik

- **Format:** WebP für Fotos, SVG für Icons & Logos. Kein PNG/JPG in Production.
- **Externe Bilder:** Pexels CDN für schnelle Ladezeiten (`images.pexels.com`).
- **Touch-Targets:** Minimum **48×48px** für alle interaktiven Elemente.
- **Skeleton Screens:** Vor jedem Bild-Load ein Skeleton mit `--cream-300` Background.
- **Lazy Loading:** `loading="lazy"` auf allen `<img>` außer LCP-Element (Hero).

---

### 6. Motion & Transitions

```css
--ease-smooth:  cubic-bezier(0.4, 0, 0.2, 1);   /* Standard */
--ease-spring:  cubic-bezier(0.34, 1.56, 0.64, 1); /* Bounce */
--ease-out:     cubic-bezier(0, 0, 0.2, 1);      /* Decelerate */

--duration-fast:   0.2s;
--duration-base:   0.6s;
--duration-slow:   1.2s;
```

Reveal-Animationen: `opacity: 0 → 1` + `translateY(30px → 0)` bei Scroll-Trigger.

---

### 7. Glassmorphism Utility

```css
.glass {
  background: var(--glass-fill);
  backdrop-filter: var(--glass-blur);
  -webkit-backdrop-filter: var(--glass-blur);
  border: 1px solid var(--glass-border);
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}
```

---

### 8. Accessibility (A11y)

- **Kontrast:** Minimum **4.5:1** für Body-Text, 3:1 für große Schrift (WCAG AA).
- **Focus-Ring:** `outline: 2px solid var(--color-primary)` auf allen interaktiven Elementen.
- **Alt-Texte:** Pflicht auf allen `<img>`. Dekorative Bilder: `alt=""`.
- **Semantisches HTML:** `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- **ARIA:** `aria-label` auf Icon-Buttons ohne sichtbaren Text.

---

### 9. Komponenten-Bibliothek (Melodia)

| Komponente        | Varianten                          |
|-------------------|------------------------------------|
| Nav Pill          | Default · Scrolled · Mobile        |
| Button            | Primary · Ghost · Icon             |
| Bento Card        | Large · Wide · Tall · Default      |
| Ticker / Banner   | Brand Color Background             |
| Event Card        | Hover-Lift                         |
| Journal Card      | Image + Text                       |
| Glass Card        | Backdrop-Blur                      |
| Floating FAB      | Icon · Tooltip                     |
| Custom Scrollbar  | Thin · Active-Wide                 |

---

## PHASE 4: NAMING CONVENTIONS

```
BEM: .block__element--modifier
Tokens: --category-name-variant (kebab-case)
Files: kebab-case.css / kebab-case.js
IDs: kebab-case (nur für Anchor & JS-Hooks)
```

---

*Design System Agent 2026 | Version 4.0 | Full-Width & 3-Column Standard*
*AUTONOMOUS AI AGENT PROTOCOL V4 — Melodia Gelateria*
