---
name: Minas Doce Design System
colors:
  surface: '#fef9f2'
  surface-dim: '#ded9d3'
  surface-bright: '#fef9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3ec'
  surface-container: '#f2ede6'
  surface-container-high: '#ece7e1'
  surface-container-highest: '#e6e2db'
  on-surface: '#1d1c18'
  on-surface-variant: '#524439'
  inverse-surface: '#32302c'
  inverse-on-surface: '#f5f0e9'
  outline: '#857467'
  outline-variant: '#d8c3b4'
  surface-tint: '#8c4f13'
  primary: '#894d10'
  on-primary: '#ffffff'
  primary-container: '#a66528'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb77c'
  secondary: '#795553'
  on-secondary: '#ffffff'
  secondary-container: '#ffcfcb'
  on-secondary-container: '#7a5653'
  tertiary: '#476347'
  on-tertiary: '#ffffff'
  tertiary-container: '#5f7c5f'
  on-tertiary-container: '#f7fff2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc2'
  primary-fixed-dim: '#ffb77c'
  on-primary-fixed: '#2e1500'
  on-primary-fixed-variant: '#6d3900'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#eabcb8'
  on-secondary-fixed: '#2e1413'
  on-secondary-fixed-variant: '#5f3e3c'
  tertiary-fixed: '#cbebc8'
  tertiary-fixed-dim: '#afcfad'
  on-tertiary-fixed: '#06210b'
  on-tertiary-fixed-variant: '#324d33'
  background: '#fef9f2'
  on-background: '#1d1c18'
  surface-variant: '#e6e2db'
typography:
  h1:
    fontFamily: Newsreader
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Newsreader
    fontSize: 36px
    fontWeight: '500'
    lineHeight: '1.2'
  h3:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Work Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-padding: 80px
---

## Brand & Style

The design system is built upon the "Modern Artisan" persona. It bridges the gap between generations of Brazilian confectionery tradition and the efficiency required by B2B commercial partners. The visual language evokes the warmth of a family kitchen through a sophisticated, editorial lens. 

The primary style is **Corporate Modern with Tactile influences**. It utilizes generous whitespace and structured layouts to signify professional reliability, while the color palette and typography inject an organic, artisanal quality. The goal is to make the procurement process feel less like a transaction and more like a partnership rooted in quality and heritage.

## Colors

The palette is derived from the natural ingredients of traditional Brazilian sweets—caramelized sugar, dark cocoa, and fresh foliage.

- **Primary (Amber):** Used for primary actions, highlights, and active states. It represents the "Doce de Leite" core of the brand.
- **Secondary (Dark Chocolate):** Used for typography, deep backgrounds, and structural borders. It provides the "Professional" weight to the brand.
- **Accent (Cream):** The primary canvas color. It is warmer than pure white, reducing eye strain and enhancing the "artisanal" feel.
- **Success (Leaf Green):** Used for sustainability callouts, "In Stock" indicators, and organic certifications.

Neutral shades should be tinted with a hint of brown rather than pure grey to maintain a cohesive, warm atmosphere.

## Typography

The typography strategy balances authority with accessibility.

- **Headlines:** Use **Newsreader**. Its variable widths and elegant serifs convey the "Tradition" aspect of the factory. It should be used for all storytelling elements and section headers.
- **Body:** Use **Work Sans**. This typeface provides a clean, neutral contrast to the serif headings. Its high legibility is essential for B2B price lists, ingredient labels, and logistics information.
- **Labels:** Small labels and tags use Work Sans in a semi-bold weight with increased letter spacing to maintain clarity even at small scales on packaging previews or data tables.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop and a fluid model for mobile. 

- **Grid:** A 12-column grid is used for the main catalog and landing pages. Gutters are kept wide (24px) to ensure product photography has "room to breathe."
- **Sectioning:** Large vertical gaps (80px to 120px) separate different product categories to prevent the B2B interface from feeling cluttered or overwhelming.
- **Rhythm:** Spacing follows an 8px base unit. All paddings and margins should be multiples of 8 (e.g., 16, 24, 32, 48) to maintain a rigorous, professional structure.

## Elevation & Depth

To maintain a clean, trustworthy aesthetic, this design system avoids heavy shadows. Instead, it utilizes **Tonal Layers** and **Soft Ambient Shadows**.

- **Surface Tiers:** The "Cream" accent color is the base. Secondary containers (like product cards) use a pure white background with a very thin (1px) border in a lightened version of the Dark Chocolate brown (#E8E2DA).
- **Depth:** When elevation is required (e.g., a hovered product card), use a soft, diffused shadow tinted with the Secondary Brown (Hex #4A2C2A at 8% opacity). This creates a "lift" that feels more natural and less "digital" than a grey shadow.
- **Photography:** High-quality images should feature natural lighting and soft shadows, reinforcing the artisanal feel within the professional layout.

## Shapes

The shape language is **Rounded (Level 2)**. 

- **Components:** Buttons, input fields, and small cards use a 0.5rem (8px) corner radius.
- **Featured Elements:** Large product category cards or "Hero" banners use a more pronounced 1.5rem (24px) radius to draw the eye and soften the professional structure.
- **Iconography:** Icons should feature rounded caps and corners, avoiding sharp terminals to align with the "warm and approachable" brand personality.

## Components

- **Buttons:** Primary buttons use the Amber (#B57133) fill with white text. Secondary buttons ("Download Catalog") use the Dark Chocolate (#4A2C2A) outline style. All buttons use the Level 2 roundedness.
- **Product Cards:** These are the hero of the B2B experience. They should feature a large image area, a serif title (H3), and a clear "Add to Quote" or "Details" button. Use the 1px border defined in Elevation.
- **Input Fields:** Fields should have a subtle Cream (#FDF8F1) background to distinguish them from the white cards they sit on, with a 1px Secondary Brown border on focus.
- **Chips/Badges:** Use the Success Green (#5D7A5D) for "In Stock" or "New Batch" labels. These should be small, capitalized, and use the label-sm typography.
- **Data Tables:** For B2B logistics and pricing, use clean, borderless rows with subtle alternating background tints in Cream to maintain readability without visual noise.
- **CTA Banners:** High-impact sections for catalog requests should use the Dark Chocolate background with Amber accents to create a high-contrast, professional focal point.