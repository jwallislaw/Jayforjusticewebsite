# Jay For Justice website

Website replacement draft in jwallislaw/Jayforjusticewebsite, on codex/chat-10-homepage. React + Vite, prepared for Netlify. The WordPress site remains separate; domain changes require explicit launch authorization.

## Current design

Follow Jay’s supplied reference palette: pale blue #e8f2fa, location blue #0a478d, call/text blue #507ebc, gold #83652b, deep navy #1b1944. This replaces the earlier red palette. The stationary header contains the uploaded firm logo, Home/About/Practice Areas/Resources/Contact, Memphis, TN, call/text 901-808-7777, and CLIENT MYCASE LOGIN. The homepage displays a smaller circular headshot on the left, with “Help During Dark Days.” and “HOPE FOR BRIGHT TOMORROWS” on the right. Jay plans replacement photography later.

## Pages and contact

- `/`: homepage and practice-area/approach/contact sections.
- `/who-is-jay-for-justice/`: About, using confirmed identity. Detailed biography awaits Jay.
- `/resources/`: links to existing practice-area and inquiry-process information.
- `/client-login/`: holding page. MyCase integration and authentication are not built.
- Call uses `tel:+19018087777`; Text uses `sms:+19018087777`.
- Original uploaded assets remain in public/. No online intake or private storage is active.

## Development

Use Node 22. Run `npm ci`, then `npm run dev`. Validate with `npm run build` and `npm run lint`. Netlify builds with `npm run build` and serves `dist`. All pages have separate HTML build entries. Draft robots metadata, robots.txt, and headers block indexing until approved launch.

## Before launch

Complete biography and content approval, confirm address and service geography, inventory WordPress URLs, prepare redirects, finish search-friendly page rendering and sitemap, and review browser layouts/accessibility. Verify professional requirements against authoritative sources before publishing substantive legal content. Implement and verify approved intake/client workflows separately with fictional data. Browser phone/text handoff still needs device testing.

See docs/chat-10-handoff.md for project continuity.
