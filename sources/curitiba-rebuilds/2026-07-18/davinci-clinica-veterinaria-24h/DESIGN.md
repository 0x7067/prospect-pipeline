# Design System

## Theme

A clinic site used by a tutor holding a phone in a bright, stressful Curitiba street or waiting-room moment: high legibility, decisive red action, and a quiet white surface. Color strategy: committed red action + charcoal structure + cool mint support.

## Palette

- `--primary`: `oklch(0.55 0.18 33.5)`
- `--primary-dark`: `oklch(0.38 0.13 33.5)`
- `--accent`: `oklch(0.72 0.12 170)`
- `--bg`: `oklch(1 0 0)`
- `--surface`: `oklch(0.97 0.012 33.5)`
- `--ink`: `oklch(0.20 0.025 33.5)`
- `--muted`: `oklch(0.42 0.025 33.5)`

## Typography

Use system sans stack with strong weight contrast. Display headings use `clamp()` and balanced wrapping; body copy stays below 75ch.

## Layout

Dense emergency-first hero with a strong action rail; asymmetrical content split on desktop, stacked flow on mobile. Avoid repeated card grids; services use directional rows and varied emphasis.

## Motion

Short page-load rise for hero groups and subtle hover/focus transitions. No content is hidden before motion. Reduced motion disables transforms.
