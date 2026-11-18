---
version: alpha
name: Apple Editorial
description: A crisp, product-forward system with restrained color, high typographic clarity, and rounded call-to-action controls.
colors:
  primary: "#0071e3"
  secondary: "#2997ff"
  tertiary: "#0066cc"
  neutral: "#1d1d1f"
  surface: "#ffffff"
  on-surface: "#1d1d1f"
  background: "#ffffff"
  error: "#d92d20"
  border: "#e5e7eb"
  muted: "#f5f5f7"
typography:
  headline-display:
    fontFamily: "SF Pro Display"
    fontSize: "56px"
    fontWeight: 700
    lineHeight: "67px"
    letterSpacing: "0px"
  headline-lg:
    fontFamily: "SF Pro Display"
    fontSize: "47px"
    fontWeight: 600
    lineHeight: "60px"
    letterSpacing: "-0.28px"
  headline-md:
    fontFamily: "SF Pro Display"
    fontSize: "40px"
    fontWeight: 600
    lineHeight: "44px"
    letterSpacing: "0px"
  headline-sm:
    fontFamily: "SF Pro Text"
    fontSize: "33px"
    fontWeight: 600
    lineHeight: "40px"
    letterSpacing: "0px"
  body-lg:
    fontFamily: "SF Pro Display"
    fontSize: "28px"
    fontWeight: 400
    lineHeight: "42px"
    letterSpacing: "0.196px"
  body-md:
    fontFamily: "SF Pro Text"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0px"
  body-sm:
    fontFamily: "SF Pro Text"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: "20px"
    letterSpacing: "0px"
  label-lg:
    fontFamily: "SF Pro Text"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: "24px"
    letterSpacing: "0px"
  label-md:
    fontFamily: "SF Pro Text"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: "22px"
    letterSpacing: "0px"
  label-sm:
    fontFamily: "SF Pro Text"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: "16px"
    letterSpacing: "0.02em"
  nav-link:
    fontFamily: "SF Pro Text"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "16px"
    letterSpacing: "0px"
rounded:
  none: 0px
  sm: 4px
  md: 8px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 54px
  xl: 70px
  gutter: 24px
  section: 70px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: "11px 21px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.full}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.secondary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.full}"
    padding: "11px 21px"
    height: "44px"
  button-secondary-hover:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
  button-link:
    backgroundColor: "transparent"
    textColor: "{colors.tertiary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "0px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: "16px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.sm}"
    padding: "12px"
  nav-item:
    backgroundColor: "transparent"
    textColor: "{colors.on-surface}"
    typography: "{typography.nav-link}"
---

# Apple Editorial

## Overview
This system feels minimal, polished, and product-led, with a strong preference for white space and sharp information hierarchy. It is designed for a broad consumer audience, but it speaks in a calm, premium voice rather than a promotional one. The tone is confident and clean, with bright accent color used sparingly to direct attention to actions.

## Colors
- **Primary (#0071e3):** Apple’s signature saturated blue, used for the main call-to-action buttons and the most important interactive emphasis.
- **Secondary (#2997ff):** A lighter interactive blue used for outlined buttons and secondary action states, keeping links and actions clearly visible without overwhelming the page.
- **Tertiary (#0066cc):** A link-blue used for text links and low-weight interactive affordances.
- **Neutral (#1d1d1f):** The near-black text color used for headlines, body copy, and navigation, providing strong contrast on white surfaces.
- **Surface (#ffffff):** The default canvas color for cards, sections, and page background, reinforcing the bright editorial look.
- **On-surface (#1d1d1f):** The standard readable foreground color on light surfaces.
- **Border (#e5e7eb):** A soft neutral border used in cards and structural dividers when needed.
- **Muted (#f5f5f7):** A very light gray background tone for subtle section separation and quiet tonal layering.
- **Error (#d92d20):** A reserved validation or destructive state color; it should remain rare and functional.

## Typography
The typography system relies on SF Pro Display for large editorial headlines and SF Pro Text for navigation, buttons, and smaller interface copy. Headlines are bold but not overly compressed, with generous line height to preserve elegance at large sizes. Body text stays lightweight and highly legible, with 17px as a key readable interface size and 12px used for compact navigation labels.

Uppercase treatment is not a prominent visual motif here; the source favors title case and sentence case with subtle letter spacing instead of shouting. If labels or utility text are introduced, they should remain restrained and avoid heavy tracking unless used for compact navigation.

## Layout
The layout is fluid and full-bleed, with large horizontal sections that read like a product showcase rather than a boxed application UI. Spacing is generous and rhythmic, driven by an 8px base scale with larger jumps at 24px, 54px, and 70px for section-level breathing room. Content is centered aggressively in hero areas, while the global navigation stays fixed to a slim top bar with compact padding.

Cards and promotional modules should use wide internal padding and maintain strong separation through whitespace instead of dense borders. Use large vertical section padding for marketing panels, and keep inline action groups tightly aligned beneath headings to preserve the signature Apple balance of openness and precision.

## Elevation & Depth
Depth is intentionally restrained. The design relies more on contrast, image composition, and soft bordering than on layered shadows. Where elevation appears, it is subtle and used sparingly, with card borders and tonal panels doing most of the structural work.

Avoid heavy drop shadows except for rare foreground objects or illustration effects. The interface should generally feel flat, clean, and materially light, with depth created by color blocking, centered composition, and strong type hierarchy.

## Shapes
The shape language is soft and highly rounded on interactive controls, especially primary and secondary buttons that use the `rounded.full` pill radius. Non-interactive containers are more conservative, using small radii like `rounded.sm` for cards and inputs. Overall, the system feels smooth and approachable rather than angular or technical.

Use pill shapes for CTAs, rounded rectangles for content containers, and avoid aggressive chamfers or sharp corners unless they are part of a deliberate product image or icon.

## Components
**Buttons**
- Primary buttons should use `button-primary`: solid `colors.primary` background, white text, 11px 21px padding, 44px height, and full-pill rounding.
- Secondary buttons should use `button-secondary`: transparent background with blue text and border, matching the outlined CTA style seen in the screenshot.
- Link buttons should use `button-link` for tertiary actions, with no border, no fill, and understated underlined text.
- Hover states should remain subtle: typically a slight blue shift rather than an aggressive visual treatment.
- Button typography should stay in the 17px SF Pro Text range to match the source.

**Cards**
- Cards should use `card` with a white background, 1px neutral border, `rounded.sm`, and 16px padding.
- Keep card shadows off unless the content absolutely needs lift; the system prefers border-defined structure.
- Card content should be spacious and left aligned unless used in a centered promotional layout.

**Inputs**
- Inputs should follow the same light, bordered, low-elevation treatment as cards.
- Use `rounded.sm`, white fill, and modest padding so they feel clean and unobtrusive.
- Focus states should be clear but not flashy, leaning on accent blue rather than glow-heavy effects.

**Navigation**
- Navigation items should use `nav-item` with compact 12px text and neutral coloring.
- Keep the top bar slim, horizontally distributed, and visually quiet so the hero content remains dominant.
- Icons should be minimal and monochrome.

**Promotional hero blocks**
- Use large headlines from `headline-display` or `headline-lg` depending on prominence.
- Center hero copy and stack CTAs beneath it with consistent spacing.
- Favor a strong background color or image panel over decorative UI elements.

## Do's and Don'ts
- Do keep the page visually breathable and centered around a few key messages.
- Do use SF Pro Display for large headlines and SF Pro Text for UI controls.
- Do preserve the pill-shaped button language for primary actions.
- Do use blue sparingly so it remains a true emphasis color.
- Don't add heavy shadows, glass effects, or overly complex borders.
- Don't introduce dense multi-column layouts where a simple editorial stack will do.
- Don't round cards and panels as aggressively as the buttons; keep containers more restrained.
- Don't use loud secondary colors for routine text or navigation.