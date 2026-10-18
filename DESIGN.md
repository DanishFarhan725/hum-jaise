# Hum Jaise design system

The world is a **sehan**: the open courtyard of an old house in Pakistan, where anyone can sit down. The site is the wall that sunlight falls on through a jaali screen.

## Colour

Day is the default theme for everyone. Night, or matching the device, is the visitor's choice in Reading comfort.

| Token | Day | Night | Role |
|---|---|---|---|
| `--plaster` | `#f3edf4` | `#221b2a` | Page ground: lilac lime-wash |
| `--plaster-deep` | `#e8deeb` | `#2c2436` | Recessed surfaces: arch, footer, form well, comfort panel |
| `--plaster-edge` | `#d8cbdc` | `#43384f` | Hairlines and control borders |
| `--ink` | `#33283f` | `#eee6f1` | Text (aubergine, never pure black) |
| `--ink-soft` | `#594b64` | `#c6b9ce` | Secondary text (meets 4.5:1 on both grounds) |
| `--sage` / `--sage-deep` | `#4d6a58` / `#3c5446` | `#9fc4ac` / `#b6d5c0` | The one action colour (neem leaf) |
| `--sun` / `--sun-strong` | `#f5c6a5` / `#eeb48f` | `#4b4369` / `#5c5380` | Jaali light, numbered stars (moonlight at night) |
| `--rose` | `#b97f93` | `#c99aab` | Decoration only: underlines, bullet stars, thresholds. Never body text |
| `--focus` | `#8a4f68` | `#e3a8c0` | Focus ring and caret |

There is one sage action per view region. Everything else is a text link with a rose underline.

### Bands

The home page is one long walk through the courtyard. Each section is a full-width band, so colour carries the rhythm:

| Band | Token | Section |
|---|---|---|
| Plaster + jaali light | `--plaster` | Welcome |
| Apricot wash | `--sun-wash` | Experiences |
| Plaster + Urdu watermark | `--plaster` | No test at the door |
| Dusk (arcade top edge, moonlight jaali) | `--dusk` | Principles |
| Neem wash | `--sage-wash` | Resources |
| Plaster | `--plaster` | About |
| Lilac wash | `--lilac-wash` | Questions |
| Arched doorway | `--plaster-deep` | Take part |

## Type

- **Young Serif** for headings, the wordmark and the home-page "voices". Use the single 400 weight; the face carries the warmth.
- **Atkinson Hyperlegible Next** (variable) for everything else, chosen for distinguishable letterforms. Body is 18px by default, with line-height 1.6 and a 66ch measure.
- **Gulzar** (Nastaliq) for all Urdu, always marked `lang="ur" dir="rtl"`, with line-height ≥ 1.9. Urdu sits under its English counterpart and ends at the right of the column, so the two scripts answer each other.
- The scale runs `--step--1` to `--step-4`, and every step is multiplied by `--text-scale` for the comfort panel.
- There are no all-caps labels, no eyebrows and no monospace.

## The lattice: one geometry for all ornament

The eight-point star (two squares, one turned 45°) is the only ornament. It is used for:

- **Jaali light** (`JaaliLight.astro`): the star pattern seen through an arched window, blurred, warm by day and lilac at night. Its angle follows the local hour (`data-hour`: morning, noon, evening or night). It is hidden from assistive tech, and visitors can hide it in Reading comfort.
- **Thresholds** (`.threshold`): a single row of outlined stars between major sections.
- **State marks**: the current nav page, chosen comfort options and list bullets get a star (`var(--star)` mask). State is shown with a mark, not only a colour.
- **Mark**: a sage star with a sun-coloured centre.

## Shapes

- **Arch** (`border-radius: 999px 999px 0 0`): the Take part doorway that holds the form. The dusk band's top edge repeats it small, as an arcade.
- Pills are used for buttons and choice chips. `--radius: 14px` is used for quiet notices.
- Soft tiles (22px radius, a bubble-shaped corner on moments) only where something is interactive. Reading lists stay as rules and space.

## Components

- **Sticky header.** It is transparent over the hero and gains a solid plaster ground on scroll. On small screens the menu drops down over the page.
- **Reading comfort popover** (`ComfortPanel.astro`). It is anchored under its button in the header, so it opens in the same place on every page. Escape or a click outside closes it.
- **Moments explorer** (`MomentsExplorer.astro`). WAI-ARIA tabs by setting. Each moment has a "Me too" toggle (`aria-pressed`) and a polite live tally. Nothing is stored or sent.
- **Principle tiles.** `<details>` tiles on the dusk band. The star number turns 45° when a tile is open.
- **Crisis cards.** Each has the number in display type, a Call link (`tel:`) and a Copy number button.
- **FAQ** (`Faq.astro`). A `<details>` accordion whose star icon turns and goes sage when open.
- **Section rail** (`SectionRail.astro`). Lattice stars fixed at the left on wide screens. Driven by scroll position, it also highlights the matching header link.
- **Path.** A Now / Next / Later roadmap: a dashed rose line with star stops, and the current stop in sage.
- **WriteForm** (`WriteForm.astro`). The one Netlify form, shared by the home page and /take-part/.

## Motion

- **On load:** the light arrives from blur. The headline comes in line by line, then the Urdu slides in from the right to answer it.
- **On scroll (`[data-reveal]`):** sections rise into view. Variants: `left` and `right` for paired columns, `stagger` for lists, and `door` for the arched form, which opens from the floor up. Content is visible without JS.
- **Feedback:** star toggles rotate with a soft overshoot, accordions open with a short fade, and the popover scales in.
- Both `prefers-reduced-motion` and the comfort panel's "Keep still" setting turn all of this off.

## Reading comfort

The panel (`ComfortPanel.astro`) sets `data-text`, `data-spacing`, `data-theme`, `data-motion` and `data-light` on `<html>`. Choices are stored in `localStorage` (`hj-comfort`) and restored before paint by the inline script in `Base.astro`. New components must respect these tokens (`--text-scale`, `--leading`, `--measure`) and not hard-code sizes.

## Voice

Plain, warm and second person. Say what is true now and label plans as plans. Never quote invented people, never cite statistics, never give medical instructions.
