# Jay For Justice website

First homepage design draft for the replacement of JayForJustice.com. React + Vite, prepared for Netlify. This is not a production launch or a functioning intake service.

## Development

Use Node 22. Run `npm ci`, then `npm run dev`. Validate with `npm run build` and `npm run lint`. Netlify builds with `npm run build` and serves `dist`.

## Preview status

- Proposed red, white, navy, gold, serif typography, with Jay’s uploaded logo and attorney headshot.
- Homepage sections: firm identity, four practice areas, approach, and inquiry process.
- Native expandable practice summaries, anchor navigation, and React mobile menu.
- Confirmed public phone 901-808-7777 appears as click-to-call links. No online inquiries are collected or stored.
- Draft robots metadata, robots.txt, and Netlify headers block search indexing. Keep these until launch approval.
- No changes to the current WordPress website, domains, or other repositories.

## Before launch

Confirm logo, slogan, contact information, attorney biography, practice scope, geographic coverage, and published firm commitments. Inventory WordPress URLs and content, prepare redirects, choose a search-friendly rendering approach, and finish metadata and sitemap. Verify current professional requirements against authoritative sources before publishing substantive legal content. Implement and verify the approved intake workflow separately, using fictional data. Review mobile, keyboard accessibility, navigation, and contrast in a browser. Production publication and domain changes require explicit launch authorization.

See `docs/chat-10-handoff.md` for current progress and next steps.

Jay confirmed the palette must be red, white, navy, and gold. Ivory is removed. Logo, typography, artwork, and page wording remain proposals.

## Homepage review changes

Header logo and contact options are larger. Separate Call and Text actions use tel:+19018087777 and sms:+19018087777. A fixed contact bar is available on both pages; portraits are circular through CSS. `/who-is-jay-for-justice/` has a separate HTML build entry and page metadata. Detailed attorney biography still needs Jay’s wording.
