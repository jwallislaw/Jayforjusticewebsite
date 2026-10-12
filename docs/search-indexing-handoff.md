# Search indexing handoff — October 8, 2026

## Confirmed user decisions

Jay connected JayForJustice.com and CallJay.law to the Netlify project jayforjusticewebsite. Both addresses display the site according to Jay's browser tests. CallJay.law must remain in the address bar. JayForJustice.com remains Netlify's primary domain and the preferred canonical domain for search.

## Completed

On branch `codex/chat-10-homepage`, removed the robots.txt site-wide crawl block, removed the global Netlify X-Robots-Tag noindex header, and changed the nine built public HTML entries to index/follow. Added page-specific canonical links and changed social URLs/images to JayForJustice.com in ten HTML entries. Client-login retains noindex/nofollow and is omitted from the sitemap. Added public/sitemap.xml with nine built public URLs and advertised it in robots.txt. Bankruptcy is not a Vite build entry and is not added to the sitemap.

## Validation

Python validation passed for Googlebot crawl permission, valid Netlify TOML with no global noindex header, exactly one matching canonical on each HTML entry, public-page robots metadata, preserved client-login noindex, and nine unique sitemap URLs matching public pages. No layout or application behavior changed. Full Vite build and browser rendering were not run for this metadata-only change.

Google Search Console previously showed the homepage URL indexed, but its live test on October 8 reported blocked by robots.txt. Existing indexed content may be from WordPress. These source fixes do not establish successful production deployment or Google indexing.

## Deployment and next steps

Repository: https://github.com/jwallislaw/Jayforjusticewebsite
Branch: codex/chat-10-homepage
Netlify project URL: https://jayforjusticewebsite.netlify.app
Existing commit status identifies a deploy-preview integration at https://deploy-preview-1--jayforjusticewebsite.netlify.app. Main contains only the initial README. Confirm the Netlify production deployment uses the updated source branch/commit; do not assume a successful deploy preview is production.

Once the source changes reach production, verify https://jayforjustice.com/robots.txt and https://jayforjustice.com/sitemap.xml. Check that public responses have no noindex header or meta tag. Run Search Console Test live URL for the homepage and request indexing if available. Submit https://jayforjustice.com/sitemap.xml in Search Console and check its status. Confirm Google-selected canonical after indexing. Canonicals preserve CallJay.law in visitors' address bars.

## Remaining work

Confirm production deployment and live Google crawlability; confirm canonical behavior and sitemap fetching. WordPress URL inventory and redirects, fuller practice-area content, and client forms remain separate tasks.
