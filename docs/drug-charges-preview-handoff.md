# Drug Charges page — draft for Jay's review

Prepared October 27, 2026. Jay requested a preview before posting. No production deployment, merge, ad edit, or domain change is authorized by this draft.

- Repository: jwallislaw/Jayforjusticewebsite.
- Local review branch: codex/drug-charges-preview, based on codex/chat-10-homepage at 3558c96c7321a06f5852b60e1452cdb0ec1d9473.
- Proposed route: /practice-areas/criminal-defense/drug-charges/.
- Copy: src/drug-charges-content.html. Entry metadata: practice-areas/criminal-defense/drug-charges/index.html.
- Existing React raw-content mapping and Vite static-content injection extended to the new route. Existing header, footer, tracking configuration, and other pages preserved.
- Existing palette and practice-page styles reused; attorney portrait and drug-specific copy added. Call/text actions use the established phone number. No new form or backend created.
- Preview-only robots metadata is noindex,nofollow. No sitemap or navigation additions yet. Before an approved launch, change robots to index,follow, add the route to the sitemap and link it from the criminal-defense page.
- Inline review uses the actual rendered content and scoped existing styles, with embedded images. Its footer displays Jay Wallis; the existing shared site footer still uses the older attorney-name treatment. Review that separately before publication if Jay wants it changed sitewide.

Validation: npm ci and npm run build passed. Built page contains static copy, one H1, canonical and social metadata. Desktop browser inspection at 1363px showed no horizontal overflow, all three images loaded, and an expandable FAQ opened correctly. Call/text destinations verified in the markup; no calls or texts placed. Mobile layout uses the existing responsive CSS but has not been browser-tested at a mobile viewport. No live production verification or ad conversions claimed.

General legal background reviewed: Tenn. Code Ann. §§ 39-17-417–419; official Tennessee Court of Criminal Appeals materials at https://www.tncourts.gov/sites/default/files/santaronedanny.pdf and https://www.tncourts.gov/sites/default/files/amos_c_-_filed_opn.pdf concerning possession and evidence of intent. Copy avoids penalty tables, eligibility promises, result guarantees, specialization claims, or new credentials. This is a draft, not a full-site advertising compliance review.

Next step: Jay reviews the headline, design, scope, and copy. Incorporate requested changes, check mobile in the browser, then seek explicit approval before posting to the live site.

Review revision: Jay approved the general page direction and requested bold boxed section links and emoji instead of the four numbered defense markers. Added navy button-style anchor boxes and 👮, 💊, 🔬, 🔨 markers. These changes remain preview-only and are scoped to the drug page.

Second review revision: replaced the hammer with a true Lucide gavel SVG. Refined the section navigation to white cards with navy bold labels, gold line icons, subtle borders, and downward arrows. Shared styles and semantic link markup applied to all six existing practice content sources, including currently hidden sources; hidden routes remain hidden. Navigation reflows to two columns and then one column on narrow screens. Icon license retained in public/icons/LICENSE.txt. Build passed; all six source navs have four working section targets and present local assets. Desktop browser verified all navigation and gavel icons loaded with no horizontal overflow. Production remains untouched.

## Approved publication — October 27, 2026

Jay explicitly approved posting: “That works update it.” Prepared the approved Drug Charges page and shared section-button design for the existing production branch codex/chat-10-homepage. Incorporated the latest remote change making the criminal-defense charges heading bold; kept both that change and this page's styles. Changed the approved new page to index,follow, added it to the sitemap, and linked it from the criminal-defense Drug charges card. No domain, ad campaign, spending, contact details, or hidden-route behavior changed. Deployment verification to be recorded after the branch update.
