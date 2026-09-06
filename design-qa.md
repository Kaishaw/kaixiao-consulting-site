# Design QA — Selected direction 2

## Source visual truth

- Source image: `/Users/kai/.codex/generated_images/01a053fa-75f4-7493-8c40-9ee93f9f590c/exec-d1dad2f8-daba-446f-8dc5-d782d72e6c78.png`
- Source pixels: 1024 × 1536 PNG.
- Intended state: desktop editorial portfolio homepage, dark midnight-plum palette, apricot CTA, lavender/cobalt ribbon art, portfolio/blog entry points.

## Implementation evidence

- Implementation route: `http://127.0.0.1:8790/`
- Implementation screenshot: CUA-rendered browser capture from the route at the matching 1024 × 1536 CSS viewport during this QA pass. The in-app browser does not expose a filesystem path for its screenshot bytes.
- CSS viewport: 1024 × 1536.
- Density normalization: source and implementation were compared at the same viewport dimensions; the CUA screenshot API does not expose deviceScaleFactor.
- State: default `studio` theme, scroll position at the top, unauthenticated static site, no personal photo displayed, real project/blog content, generated ribbon asset enabled.
- Additional responsive evidence: 390 × 844 mobile viewport and 1440 × 1000 desktop viewport.
- Console check: no browser errors or warnings reported by the CUA tab.

## Comparison evidence

Full-view comparison covered the header, hero hierarchy, abstract visual treatment, CTA language, capability strip, selected project stories, and blog teaser. The implementation intentionally uses the generated ribbon asset and CMS-driven project/blog content instead of the reference mock's synthetic person and sample landscape cards.

Focused region comparison was used for the hero: the navigation remains a compact editorial row; the oversized display headline, serif eyebrow, apricot CTA, midnight-plum field, and ribbon-backed abstract monogram preserve the selected direction's visual logic. No separate icon or logo region required focused inspection.

## Findings

- No actionable P0/P1/P2 findings remain.
- P3 — The reference contains a synthetic portrait and additional sample project photography. This is intentionally omitted: the site uses abstract visual language and CMS content without displaying a personal photo.
- P3 — The reference has a larger decorative signature treatment in the hero. The implementation keeps the identity editable through Page CMS site settings and uses the generated ribbon asset as the visual signature instead.

## Comparison history

1. Initial implementation check at the default ~843 × 777 viewport found a P2 responsive issue: the two-column hero and full navigation were too wide for tablet width, clipping the brand and producing overly narrow headline wrapping.
2. Fix: moved the responsive stack breakpoint from 820px to 960px and added the corresponding one-column hero/navigation wrapping behavior.
3. Post-fix evidence: 390 × 844 mobile capture showed a usable stacked layout; 1024 × 1536 comparison capture showed stable hero and project/blog composition without a personal photo; 1440 × 1000 capture showed the desktop navigation and two-column hero.
4. Content-rhythm refinement: added a CMS-driven “Selected project stories” and “Blog teaser” section after the hero so the homepage follows the selected reference's portfolio-first flow.

## Implementation checklist

- [x] Deep plum, apricot, lavender, and cobalt token system applied across routes.
- [x] Editorial display typography and compact uppercase navigation applied.
- [x] Generated raster ribbon asset added at `public/assets/hero-ribbons.png`.
- [x] Existing portrait and CMS collections preserved.
- [x] Homepage, project stories, Blog, article, portfolio, AI work, insights, and contact routes share the new system.
- [x] Mobile and desktop breakpoints checked.
- [x] Astro build passes for all 16 static pages.

## Follow-up polish

- If desired, the next pass can add dedicated CMS fields for the homepage's selected project order and a separate signature/hero image field, so those two visual choices can be changed without editing the template.

final result: passed
