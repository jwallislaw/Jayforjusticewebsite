# Employment-law page handoff

User requested building out the employment-law section in the same manner as the other practice-area landing pages.

## Completed

- src/employment-law-content.html: employee-focused Memphis/Shelby County copy covering discrimination, sexual harassment/hostile work environments, retaliation, termination, unpaid wages/overtime, disability accommodations, pregnancy/protected leave, and severance/employment agreements.
- Practical preparation, short-deadline/agency-process information, six FAQs, official EEOC/DOL resources, and repeated call/text appointment actions.
- Top attorney card says Jay Wallis; lower contact details retain the full attorney name and existing office address.
- No invented fees, free consultation, availability guarantees, outcomes, specialized credentials, or case results.
- App.jsx imports and routes the shared content and improves the employment service summary.
- vite.config.js includes employment in the existing static HTML injection map. The route was already a build entry and already in the sitemap, so neither its URL nor the sitemap needed changing.
- Updated page title, description, social metadata, and WebPage/Service/LegalService JSON-LD; canonical and index/follow retained.
- Existing shared styles reused; no CSS or production dependency changes. The removed design-preview footer notice stays removed.

## Validation

npm run build and scoped source lint passed. Built HTML contains the full page without JS, one H1, valid anchors and accessible heading references, repeated correct phone/text links, matching canonical, and valid structured data. Card name and lower full-name identification verified.

Chromium checks passed at 390, 768, and 1440 pixels: one main/H1, eight issue cards, six working FAQ disclosures, no horizontal overflow or inherited-grid collision, correct card name, and no runtime page errors. Screenshots inspected. JS-disabled copy and phone links verified. Existing criminal, injury, family, bankruptcy, and traffic routes checked.

## References

Copy was checked against official EEOC harassment, retaliation, disability, and charge-deadline resources; the U.S. Department of Labor worker-rights/FLSA information; and Tennessee Department of Labor employee-rights information. No fixed deadline is stated because applicable claims and procedures differ. Content distinguishes an unfair workplace event from an actionable claim and tells visitors that initial contact does not extend a deadline.

https://www.eeoc.gov/retaliation
https://www.eeoc.gov/harassment
https://www.eeoc.gov/time-limits-filing-charge
https://www.eeoc.gov/eeoc-disability-related-resources
https://www.dol.gov/agencies/whd/workers
https://www.dol.gov/agencies/whd/flsa
https://www.tn.gov/workforce/employees/labor-laws/labor-laws-redirect/employee-rights.html

## Deployment

Repository: https://github.com/jwallislaw/Jayforjusticewebsite
Branch: codex/chat-10-homepage
Route: /practice-areas/employment-law/
Changes saved in GitHub. Confirm Netlify preview/build and publish using the user's existing production workflow, then review the live route and request indexing as appropriate. No ads or ad spend were launched; search rankings and platform approval are not guaranteed. This targeted page update is not a complete advertising compliance review.
