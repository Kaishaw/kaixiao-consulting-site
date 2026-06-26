# Kaixiao Consulting Site

Personal portfolio and consulting website for **Kaixiao Can**, focused on CRM modernization, Dynamics 365 CE, Power Platform, customer operations, and applied AI workflow projects.

Live site:

- Primary live URL: `https://www.kaixiao.ca/`
- Cloudflare Pages URL: `https://kaixiao-consulting-site.pages.dev/`
- GitHub repo: `https://github.com/Kaishaw/kaixiao-consulting-site`

Related AI project hub:

- AI directory URL: `https://ai.kaixiao.ca/`
- AI project repo: `https://github.com/Kaishaw/career-prep-platform`
- AI Pages project: `career-prep-platform`

## Project Purpose

This site is designed as a professional personal website and portfolio hub. It is not just a resume page. It organizes the profile into several reader-friendly sections:

- Professional positioning
- Portfolio and capability map
- Representative work project patterns
- Industry insights
- Applied AI project portfolio
- Contact and LinkedIn entry point

The current positioning is based on publicly visible LinkedIn information provided by the site owner:

- LinkedIn: `https://www.linkedin.com/in/kaixiaocan/`
- Public positioning themes: Dynamics 365 CE, CRM modernization, Sales/Service workflows, Power Platform, CRM operations, AI-ready digital workflows

Because public LinkedIn data may be limited, this site intentionally avoids invented employer names, private client details, dates, revenue claims, or unverifiable metrics. The `Work Projects` page uses representative project patterns instead of confidential case studies.

## Current Site Map

| Route | File | Purpose |
| --- | --- | --- |
| `/` | `site/index.html` | Homepage and high-level navigation into the portfolio |
| `/portfolio/` | `site/portfolio/index.html` | Skills, consulting capability map, working style, toolkit |
| `/work/` | `site/work/index.html` | Representative CRM and Power Platform project patterns |
| `/insights/` | `site/insights/index.html` | Industry trends and source-backed market context |
| `/ai-projects/` | `site/ai-projects/index.html` | Applied AI project portfolio and links to `ai.kaixiao.ca` |
| `/contact/` | `site/contact/index.html` | LinkedIn/contact page |
| `/styles.css` | `site/styles.css` | Global visual system and responsive layout |
| `/site.js` | `site/site.js` | Scroll progress behavior |

## Directory Structure

```text
KaixiaoConsultingSite/
├─ .gitignore
├─ README.md
├─ package.json
├─ package-lock.json
├─ wrangler.toml
└─ site/
   ├─ index.html
   ├─ styles.css
   ├─ site.js
   ├─ assets/
   │  ├─ consulting-hero.png
   │  ├─ portfolio-visual.png
   │  ├─ industry-insights-visual.png
   │  └─ ai-projects-visual.png
   ├─ portfolio/
   │  └─ index.html
   ├─ work/
   │  └─ index.html
   ├─ insights/
   │  └─ index.html
   ├─ ai-projects/
   │  └─ index.html
   └─ contact/
      └─ index.html
```

## Architecture

This is a static Cloudflare Pages site.

There is no frontend framework, build step, database, server-side code, or runtime API in this repository. That is intentional. The site is simple, portable, low-cost, and easy to edit.

Technology choices:

- HTML for content pages
- CSS for layout, visual system, and responsive behavior
- A tiny JavaScript file for the top scroll progress indicator
- Cloudflare Pages for static hosting
- GitHub for source control
- GoDaddy DNS currently manages `kaixiao.ca`

Deployment model:

```text
Local files
  -> Git commit
  -> GitHub repo
  -> Manual Wrangler deploy
  -> Cloudflare Pages
  -> www.kaixiao.ca
```

Important note: this Pages project is currently deployed by Wrangler direct upload. It is not yet connected to GitHub automatic deployments in Cloudflare. Pushing to GitHub stores the source, but Cloudflare deploy happens through:

```powershell
npm run deploy
```

## Domain And Subdomain Management

Current domain plan:

| Hostname | Purpose | Cloudflare Pages project | Status |
| --- | --- | --- | --- |
| `www.kaixiao.ca` | Personal portfolio website | `kaixiao-consulting-site` | Active |
| `kaixiao-consulting-site.pages.dev` | Cloudflare Pages fallback URL | `kaixiao-consulting-site` | Active |
| `ai.kaixiao.ca` | AI project directory and demos | `career-prep-platform` | Active |
| `career-prep-platform.pages.dev` | AI project fallback URL | `career-prep-platform` | Active |
| `kaixiao.ca` | Desired root/apex personal site | `kaixiao-consulting-site` | Needs final DNS strategy |

Current GoDaddy DNS intent:

```text
www.kaixiao.ca CNAME -> kaixiao-consulting-site.pages.dev
ai.kaixiao.ca  CNAME -> career-prep-platform.pages.dev
```

The root/apex domain `kaixiao.ca` is more complicated because many DNS providers, including GoDaddy, do not allow a normal CNAME record at `@`. Cloudflare Pages reports the root domain as pending unless it can verify the expected record.

Recommended final root-domain options:

1. Move DNS hosting for `kaixiao.ca` to Cloudflare.
   - Add `kaixiao.ca` as a Cloudflare zone.
   - Change nameservers at GoDaddy to Cloudflare nameservers.
   - Configure `kaixiao.ca` and `www.kaixiao.ca` in Cloudflare DNS.
   - Keep `ai.kaixiao.ca` pointing to `career-prep-platform.pages.dev`.

2. Keep GoDaddy DNS and use `www.kaixiao.ca` as the canonical personal website.
   - This is the current working state.
   - Root `kaixiao.ca` may need GoDaddy forwarding to `https://www.kaixiao.ca/`.

3. Use a Cloudflare API token with `zone.create` permission.
   - Previous token did not have this permission.
   - Required permission: create/manage zones for the Cloudflare account.

## Cloudflare Projects

Current Cloudflare Pages projects:

```text
kaixiao-consulting-site
career-prep-platform
```

Personal site:

```text
Project name: kaixiao-consulting-site
Build output directory: site
Production branch: main
Primary Pages URL: https://kaixiao-consulting-site.pages.dev/
Custom domain: https://www.kaixiao.ca/
```

AI project hub:

```text
Project name: career-prep-platform
Build output directory: apps/web/static
Production branch: main
Primary Pages URL: https://career-prep-platform.pages.dev/
Custom domain: https://ai.kaixiao.ca/
```

## Local Development

Install dependencies:

```powershell
npm install
```

Start local preview:

```powershell
npm run dev
```

The local server defaults to:

```text
http://127.0.0.1:8790/
```

Verify pages locally:

```powershell
$paths = @("/", "/portfolio/", "/work/", "/insights/", "/ai-projects/", "/contact/")
foreach ($p in $paths) {
  Invoke-WebRequest -Uri "http://127.0.0.1:8790$p" -UseBasicParsing |
    Select-Object StatusCode, StatusDescription
}
```

## Deployment

Deploy to Cloudflare Pages:

```powershell
npm run deploy
```

The deploy script is defined in `package.json`:

```json
"deploy": "wrangler pages deploy site --project-name kaixiao-consulting-site --branch main --commit-dirty=true"
```

Check Pages project list:

```powershell
wrangler pages project list
```

Verify production after deployment:

```powershell
$paths = @("/", "/portfolio/", "/work/", "/insights/", "/ai-projects/", "/contact/")
foreach ($p in $paths) {
  $r = Invoke-WebRequest -Uri "https://www.kaixiao.ca$p" -UseBasicParsing
  $title = (($r.Content | Select-String -Pattern "<title>.*?</title>" -AllMatches).Matches.Value)
  [pscustomobject]@{ Path = $p; Status = $r.StatusCode; Title = $title }
}
```

## Content Model

### Homepage

File:

```text
site/index.html
```

Role:

- First impression
- High-level professional positioning
- Navigation into deeper sections
- Quick capability signals

Update when:

- The overall positioning changes
- You want to feature a new major project
- You want to adjust the main headline or profile summary

### Portfolio

File:

```text
site/portfolio/index.html
```

Role:

- Skills and capability map
- Consulting strengths
- Working style
- Toolkit keywords

Update when:

- Adding certifications
- Adding new tools
- Refining professional positioning
- Making the profile more senior, more technical, or more consulting-oriented

### Work Projects

File:

```text
site/work/index.html
```

Role:

- Representative project patterns
- Responsibilities and deliverables
- Privacy-safe project storytelling

Current project patterns:

- CRM modernization
- Dynamics 365 CE functional design
- Power Platform automation opportunity mapping
- AI readiness

Use this page for work experience without exposing confidential employer/client information. A good project card should answer:

- What business problem was involved?
- What did you personally contribute?
- What artifacts or decisions did you help create?
- What kind of outcome did the work support?

Avoid:

- Confidential client names
- Private employer details
- Internal metrics not approved for public use
- Claims that cannot be verified

### Industry Insights

File:

```text
site/insights/index.html
```

Role:

- Shows you understand market direction, not only implementation details
- Connects your experience to CRM, service operations, low-code, and AI trends
- Includes public source links

Current source references:

- Microsoft Dynamics 365 Contact Center
- Microsoft Power Platform
- Microsoft Dynamics 365 Sales
- Microsoft Dynamics 365 Customer Service

When updating this page, use public and credible sources. Prefer official product pages, product docs, Microsoft announcements, analyst reports, or industry research. Do not quote long passages; summarize and link.

### AI Projects

File:

```text
site/ai-projects/index.html
```

Role:

- Connects the personal website to applied AI work
- Links to the AI project hub under `ai.kaixiao.ca`
- Presents AI projects as practical workflow demos

Current live project:

```text
Career Prep Platform
Overview: https://ai.kaixiao.ca/career-prep/
Workflow: https://ai.kaixiao.ca/career-prep/workflow
```

Future AI projects can be added here as cards, then hosted under `ai.kaixiao.ca`.

### Contact

File:

```text
site/contact/index.html
```

Role:

- LinkedIn contact entry point
- Simple conversion page for recruiters, collaborators, or consulting conversations

Current LinkedIn:

```text
https://www.linkedin.com/in/kaixiaocan/
```

## Visual System

Main stylesheet:

```text
site/styles.css
```

Visual direction:

- Professional senior consultant tone
- Dark enterprise technology palette
- CRM/data/process visual language
- No employer logos
- No Microsoft logos
- No fake client logos
- No stock-photo people

Palette variables:

```css
--page: #0d1113;
--ink: #f7fbf9;
--muted: #adc1bd;
--teal: #62d6c7;
--blue: #75a7ff;
--amber: #f0bd6c;
```

Reusable layout classes:

- `.site-nav`
- `.hero`
- `.subhero`
- `.section`
- `.signal-strip`
- `.route-grid`
- `.route-card`
- `.capability-grid`
- `.project-story`
- `.insight-list`
- `.featured-case`
- `.contact-band`
- `.site-footer`

Responsive behavior:

- Desktop uses wide, structured grids.
- Mobile hides the top nav links and keeps the brand visible.
- Content stacks into single-column layouts below `1080px`.
- Typography stays fixed with responsive clamps, not viewport-only scaling.

## Image Assets

Assets live in:

```text
site/assets/
```

Current images:

| File | Used by | Purpose |
| --- | --- | --- |
| `consulting-hero.png` | Homepage | Main hero image |
| `portfolio-visual.png` | Portfolio page | CRM modernization visual |
| `industry-insights-visual.png` | Insights page | AI-enabled CRM/contact center visual |
| `ai-projects-visual.png` | AI Projects page | Applied AI prototype visual |

Image generation guidance:

- Use abstract enterprise/CRM visuals.
- Avoid humans unless a real approved headshot is provided.
- Avoid brand marks and logos.
- Avoid readable fake UI text.
- Keep images wide landscape for page banners.
- Copy generated images into `site/assets/`; do not reference temporary generation paths.

## Adding A New Page

1. Create a new folder under `site/`.

Example:

```text
site/speaking/index.html
```

2. Copy the structure from an existing page.

3. Add the nav link to every page if it should be top-level.

4. Add route card from homepage if it is a major section.

5. Test locally:

```powershell
npm run dev
```

6. Commit and deploy:

```powershell
git add .
git commit -m "Add speaking page"
git push
npm run deploy
```

## Adding A New Work Project Card

Edit:

```text
site/work/index.html
```

Duplicate a `.project-story` block:

```html
<article class="project-story">
  <div class="story-number">05</div>
  <div>
    <p class="eyebrow">Project theme</p>
    <h2>Project title</h2>
    <p>One-sentence summary.</p>
    <ul>
      <li>Responsibility or deliverable.</li>
      <li>Responsibility or deliverable.</li>
      <li>Responsibility or deliverable.</li>
    </ul>
  </div>
</article>
```

Use privacy-safe language:

- "Supported"
- "Mapped"
- "Documented"
- "Translated"
- "Aligned"
- "Designed"
- "Helped define"

Avoid overclaiming:

- "Led enterprise transformation" unless true and public
- "Saved $X" unless public and approved
- "For client X" unless approved

## Adding A New AI Project

There are two places to update:

1. Personal site:

```text
site/ai-projects/index.html
```

2. AI directory site:

```text
D:\Codex\CareerPrepPlatform\apps\web\static\index.html
```

Recommended URL pattern:

```text
https://ai.kaixiao.ca/project-slug/
```

Recommended AI project card fields:

- Project name
- Problem
- Workflow
- Tech stack
- Demo link
- GitHub link if public
- Status: concept, prototype, live demo, archived

## Git Workflow

Check status:

```powershell
git status -sb
```

Commit:

```powershell
git add .
git commit -m "Describe the change"
git push
```

Deploy:

```powershell
npm run deploy
```

This repository is currently on:

```text
Branch: main
Remote: https://github.com/Kaishaw/kaixiao-consulting-site.git
```

## Security Notes

Do not commit:

- API keys
- GoDaddy API secrets
- Cloudflare API tokens
- `.env` files
- Private client documents
- Private resumes
- Internal employer materials

The `.gitignore` excludes:

```text
node_modules/
.wrangler/
.env
.env.local
```

Important: API tokens were used during initial setup. Any token pasted into chat or logs should be revoked and regenerated.

## Current Known Limitations

1. `kaixiao.ca` root/apex is not fully finalized.

Current stable domain:

```text
https://www.kaixiao.ca/
```

Recommended next action:

- Add `kaixiao.ca` as a Cloudflare zone and move DNS hosting from GoDaddy to Cloudflare, or set root forwarding in GoDaddy to `https://www.kaixiao.ca/`.

2. The site does not yet include a real headshot.

Current visuals are generated abstract consulting images. If an approved professional headshot is available, add it to `site/assets/` and create an About section.

3. Work project details are intentionally generalized.

This protects confidentiality but can be expanded if the site owner provides approved public project details.

4. No contact form is implemented.

Current contact path is LinkedIn-only. A future contact form would require a backend, form service, or Cloudflare Pages Function.

## Future Enhancement Ideas

High-value next improvements:

- Add a concise About page with a professional headshot.
- Add downloadable PDF resume or one-page capability statement.
- Add a case-study template for each work project.
- Add a "Certifications" section if public certification details are available.
- Add root-domain redirect from `kaixiao.ca` to `www.kaixiao.ca`.
- Connect Cloudflare Pages to GitHub for automatic deploys.
- Add analytics, such as Cloudflare Web Analytics.
- Add structured data metadata for personal profile SEO.
- Add separate Chinese and English versions only if there is a clear audience need.

## Quick Reference

Most common commands:

```powershell
# Go to project
cd D:\Codex\KaixiaoConsultingSite

# Local preview
npm run dev

# Git status
git status -sb

# Commit changes
git add .
git commit -m "Update site"
git push

# Deploy to Cloudflare
npm run deploy

# Check Cloudflare Pages projects
wrangler pages project list
```

Most important URLs:

```text
Personal site:
https://www.kaixiao.ca/

Cloudflare fallback:
https://kaixiao-consulting-site.pages.dev/

AI project hub:
https://ai.kaixiao.ca/

LinkedIn:
https://www.linkedin.com/in/kaixiaocan/
```
