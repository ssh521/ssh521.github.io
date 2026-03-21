# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal Korean-language blog at `ssh521.github.io`, built with [Quartz v4](https://quartz.jzhao.xyz/) — a static site generator optimized for digital gardens. Content is authored in Obsidian and published to GitHub Pages.

## Common Commands

```bash
# Local development with hot reload
npx quartz build --serve

# Build only
npx quartz build

# Type check and format validation
npm run check

# Auto-format code
npm run format

# Install dependencies
npm ci
```

Node.js v22+ is required (`engine-strict=true` is enforced via `.npmrc`).

## Deployment

Pushing to `main` triggers GitHub Actions (`.github/workflows/deploy.yml`), which runs `npm ci && npx quartz build` and deploys `/public/` to GitHub Pages automatically.

## Architecture

### Framework: Quartz v4

The `quartz/` directory contains a customized fork of the Quartz SSG framework. Key files:

- **`quartz.config.ts`** — Main site config: title, base URL, locale (`ko-KR`), theme (Noto Sans KR + IBM Plex Mono fonts), and the plugin pipeline
- **`quartz.layout.ts`** — Layout components for content pages vs. list/folder pages
- **`quartz/plugins/`** — Transformers (process markdown), Filters (exclude drafts), Emitters (generate HTML, RSS, sitemap, OG images)
- **`quartz/components/`** — Preact components rendered into HTML
- **`quartz/styles/`** — SCSS stylesheets

### Content Pipeline

Markdown files in `content/` → transformer plugins (Obsidian flavor, GFM, syntax highlighting, LaTeX, TOC) → filters (removes drafts) → emitters (HTML pages, RSS, sitemap, graph, OG images in `/public/`)

### Content Structure

- `content/index.md` — Homepage
- `content/me/` — About page
- `content/2026/` — Blog posts (organized by year)
- `content/attachments/` — Images embedded in posts

### Frontmatter Convention

```yaml
---
author: ssh521
title: Post Title
categories: [Category1, Category2]
description: Brief description
tags: [tag1, tag2]
date: 2026-01-01
---
```

## Code Style

- Prettier: 2-space indent, 100 char line width, trailing commas, no semicolons
- TypeScript strict mode; unused variables/parameters are errors
- JSX uses Preact (`react-jsx` pragma targets Preact)
