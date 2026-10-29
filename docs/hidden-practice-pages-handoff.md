# Hidden practice pages — October 26, 2026

Jay requested hiding bankruptcy and employment law. Removed their shared service listings, React imports/routes, Vite build entries/static injection, sitemap URLs, and shared bankruptcy advertisement disclosure. Original HTML/content files remain in source for restoration. About-page reference to past work in a bankruptcy judge’s chambers remains as biography.

Netlify forced temporary 302 redirects send both old route families (including index.html) to /#practice-areas. Other practice areas remain unchanged.

Repository: jwallislaw/Jayforjusticewebsite. Branch: codex/chat-10-homepage (existing Netlify production branch). Validation: npm run build, npm run lint, git diff --check, output checks for excluded pages, links, and bundled service advertising all passed. Deployment/live route verification follows the commit; do not infer live status solely from these local checks.
