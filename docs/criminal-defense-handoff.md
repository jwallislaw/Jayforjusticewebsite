# Criminal defense page update

User request: expand criminal defense to all felony and misdemeanor charges and improve the page for search and advertising.

## Completed

- Route remains /practice-areas/criminal-defense/; existing canonical preserved.
- Full Tennessee felony/misdemeanor copy for Memphis and Shelby County, eight charge categories, stages-of-case information, preparation approach, next steps, FAQs, and call/text appointment actions.
- Identity and contact details show Jay For Justice PLLC, Brandon “Jay” Wallis, Attorney at Law, (901) 808-7777, and 242 Poplar Ave., Suite 101, Memphis, TN 38103, based on user-confirmed information.
- No invented fees, free consultation, 24-hour availability, specialty certification, outcomes, or independent trial history. Existing About page and other practice pages remain unchanged.
- Title, description, social metadata, and WebPage/Service/LegalService structured data updated.
- Homepage criminal-defense summary now states all felonies and misdemeanors.
- Static copy source: src/criminal-defense-content.html. src/App.jsx imports it with Vite ?raw for the criminal route. The route's main element uses only trusted repository-authored content; do not insert user-submitted HTML.
- vite.config.js injects that same source into the criminal entry's delivered HTML using transformIndexHtml, so copy and call links are available without JavaScript. The client replaces the main-only static content with the existing shared header/footer plus the identical page content. Other HTML entry points are not injected.
- Styles are scoped to .criminal-defense-page in src/App.css. No new production dependencies or package script changes.

## Validation

Local npm ci completed. npm run build passed. Source lint via oxlint src vite.config.js passed. A broad npm run lint initially included dependency files because the local verification copy omitted the repo's gitignore; the scoped source check is clean.

Built HTML validation passed: complete main copy without JS, one H1, unique IDs, valid aria-labelledby references and section anchors, internal route existence, repeated correct tel/sms links, canonical, and valid JSON-LD. Existing traffic-page HTML was not injected.

Chromium/Playwright checks passed at 390, 768, 1440, and 1920 pixels: one main/H1, eight charge cards, no horizontal overflow, working FAQ disclosure, and call link presence. Client traffic-ticket routing preserved. No browser page errors. JS-disabled page retains the heading and call links. Desktop/mobile screenshots inspected; shared image assets were not materialized into the local test copy, so existing logos/images could not be verified there. Build warned about the two existing CSS background images absent from that temporary copy; the repository's assets were not changed.

## Deployment

Repository: https://github.com/jwallislaw/Jayforjusticewebsite
Branch: codex/chat-10-homepage
Changes saved to GitHub. Confirm Netlify deploy preview/build, then use the existing production deploy workflow and verify the live route. Request indexing of the changed route in Google Search Console after publishing. Search rankings, Google indexing, and advertising-platform approval are not guaranteed; no ads or ad spend were launched.

## Copy sources and remaining checks

Tennessee BPR's published RPC 7 advertising materials were consulted for truthful service descriptions and responsible firm/contact identification. This targeted content update is not a full-site advertising compliance audit. Vite's official transformIndexHtml documentation was used for static content injection.

Keep future edits in src/criminal-defense-content.html so browser and static content match. The rest of the site's older practice-area selection remains a separate task; this request changed criminal defense only.
