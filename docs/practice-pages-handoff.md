# Family law, personal injury, and bankruptcy handoff

## Scope and decisions

User requested the same content, search, and advertising landing-page treatment as the expanded criminal-defense page. User then requested removing Brandon from the top attorney cards because the full name already appears below. All four top cards now display Jay Wallis. The full attorney name remains in lower contact details and the shared footer.

## Completed

New authored content sources:
- src/divorce-family-law-content.html
- src/personal-injury-content.html
- src/bankruptcy-content.html

Each has distinct practice-specific hero copy, service categories, approach, next steps, FAQs, call/text appointment actions, firm/contact identification, and an inquiry disclaimer. No fees, free consultation, results, specialist certification, or availability guarantees were invented. Personal-injury fee terms are left for an individual engagement discussion.

Updated the three HTML entry points with titles, descriptions, social metadata, canonical URLs, index/follow, and WebPage/Service/LegalService structured data. Bankruptcy previously existed as an unbuilt noindex file; it is now a Vite build entry, an actual client route, a linked practice in the existing homepage/resource lists, and a sitemap URL. Sitemap contains ten unique URLs.

App.jsx now uses a shared PracticeLandingPage and a map of trusted repository-authored raw HTML content for the four expanded routes. Vite injects those same sources into the delivered HTML. Existing criminal-defense content wording is preserved except the top card name; its internal CSS class names were migrated to the reusable practice-* rules. Original criminal section IDs remain intact. Other existing pages were not rewritten.

Bankruptcy covers consumer Chapter 7/13 options, limits on discharge/property protection, and the need to flag urgent dates. The standard debt-relief-agency disclosure is prominent in the bankruptcy contact section and is also included in the shared footer because shared site listings advertise bankruptcy assistance. The footer otherwise retains the existing identity. No account intake, payment workflow, or confidential-data collection was added.

## Validation

- Final npm run build passed with the existing package versions and no new production dependency.
- Source lint (oxlint src vite.config.js) passed.
- Delivered HTML validation passed for all four expanded pages: complete copy without JS, exactly one H1/main, unique IDs, valid accessible heading references and anchors, internal routes, call/text links, canonical, index/follow, and valid JSON-LD.
- Bankruptcy disclosure and the ten-URL sitemap verified.
- Chromium checks passed at 390, 768, and 1440 pixels for all four pages: no horizontal overflow, correct content/card counts, working FAQ disclosures, visible footer disclosure, and no runtime page errors.
- Caught and fixed a desktop collision with the older global practice-section grid rule. Expanded landing sections now explicitly use display:block. Screenshots were inspected on desktop and mobile after the fix.
- Homepage bankruptcy link and existing About, traffic-ticket, and employment routes checked. All four expanded pages remain readable with JavaScript disabled.
- After the user's name correction, rebuilt and verified all four top headings use Jay Wallis while lower contact details retain the full name.

## Repository and deployment

Repository: https://github.com/jwallislaw/Jayforjusticewebsite
Branch: codex/chat-10-homepage
Code commit: af3e33b834afca83553bca668a8e7fedeb091feb
Routes:
- /practice-areas/criminal-defense/
- /practice-areas/divorce-family-law/
- /practice-areas/personal-injury/
- /practice-areas/bankruptcy/

Changes are saved in GitHub. Production publication is not verified. Next: confirm Netlify build/deploy preview, publish through the user's established Netlify production workflow, review the live routes, and request indexing of the changed/new URLs in Search Console. No ad campaign or spend was created. Search rankings, indexing, and advertising-platform approval are not guaranteed.

## Authoritative content references

- U.S. Courts Bankruptcy Basics, Chapter 7 and Chapter 13 pages: https://www.uscourts.gov/court-programs/bankruptcy/bankruptcy-basics
- 11 U.S.C. 528 debt-relief advertising requirements: https://uscode.house.gov/ and https://www.govinfo.gov/content/pkg/USCODE-2024-title11/pdf/USCODE-2024-title11-chap5-subchapIII.pdf
- Tennessee courts self-help and court-approved divorce resources: https://www.tncourts.gov/programs/self-help-center and https://www.tncourts.gov/help-center/court-approved-divorce-forms

This is a targeted page update, not a comprehensive review of all firm advertising or workflows. Future copy edits should be made in the shared content sources so server-delivered and client-rendered copy remain identical.
