# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, both confirmed by the owner:
- Hiring managers and recruiters assessing Kavindu for a software engineering role. Situation: scanning quickly, comparing candidates, deciding whether to make contact or download the CV.
- Engineering leads and technical peers judging depth, judgment and craft from the work, the stack and the writing.

## Product Purpose

Personal portfolio of Kavindu de Alwis, a full stack software engineer (Skaleminds, four years in production, based in Kesbewa, Sri Lanka). It exists to show what he has built and owned, and to turn a visit into contact (email or contact form) or a CV download. Current status: open to new opportunities, remote/on-site/hybrid, 1 month notice.

## Positioning

He owns web products front to back: from first design discussion through React/Next.js front ends, Node.js/Django APIs, databases and Docker/AWS deployment to production.

## Operating Context

Single-page site with sections: hero (stack "trace"), selected work (professional case studies and personal projects), experience timeline, Medium writing feed (revalidated hourly), skills, education, contact. Visitors are often on a phone or in a short scan. Contact form sends via Resend and degrades to a "email directly" message without an API key.

## Capabilities and Constraints

- Stack: Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4; fonts via next/font (Bricolage Grotesque, Source Serif 4, JetBrains Mono).
- All copy lives in `app/data/` (profile, experience, projects, capabilities, education); components render it. Placeholders are marked `[TODO ...]` (`npm run todos`); currently the production domain (`siteUrl`) is unconfirmed.
- Existing features (repo evidence, not a freeze): light/dark theme with OS default and stored toggle, Resend contact form, Medium feed, CV PDF at `/Kavindu-de-Alwis-SE.pdf`, JSON-LD Person, OG image, sitemap, robots.
- Professional work is presented without client names (e.g. "Fintech client").

## Evidence on Hand

- Quantified outcomes in `app/data`: broker manual effort cut 60% (mortgage automation); manual data handling cut 70% (StreamRX); 100+ drugs across 5+ insurance plans compared.
- Four professional case studies; four personal projects with screenshots in `public/images/projects/` plus repo and live links.
- Employers: Skaleminds (formerly Avantrio), StreamRX. BSc Computer Science (IIT / University of Westminster), upper second class.
- Absent: testimonials, client logos, public client case-study URLs. Do not fabricate them.

## Product Principles

1. Show ownership across the whole stack, not a list of tools.
2. Every claim traces to real work; numbers come only from `app/data`.
3. Make the next step (email, CV, GitHub) obvious to a visitor who gives it a minute.
4. Serve scanning recruiters and scrutinising engineers on the same page without splitting into two sites.
