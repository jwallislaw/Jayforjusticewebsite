# ChatGPT Ads contact measurement

Prepared November 11, 2026 for JayForJustice.com and CallJay.law.

## Implementation

- Pixel ID: `5sLpzjAxyJW3B7NfrUXRYK` (a public installation identifier, not an API key).
- `vite.config.js` includes `/chatgpt-ads.js` in every public HTML build entry.
- Client-login is excluded in both the build hook and runtime guard.
- Initialization uses the official SDK. Production console debugging is disabled.
- A page load emits `page_viewed` for basic installation verification.
- Only clicks on the firm's `tel:` and `sms:` number emit custom contact events.
- Navigation is not prevented or delayed. Existing Google Ads, GTM, and ClickCease remain in place.

| Custom event | Actual action |
| --- | --- |
| `call_button_click` | Opens a telephone link for 901-808-7777 |
| `text_button_click` | Opens a text-message link for 901-808-7777 |

These are contact-intent actions, not verified calls, sent texts, leads, appointments, or clients. No case details, phone numbers, message contents, page titles, or practice-area names are added to event payloads. Events opt out of future user-level personalization. The SDK manages attribution cookies and may perform automatic advanced matching according to the ad account's settings; review measurement disclosures and consent requirements before deployment or adding forms. No API keys belong in browser code.

## Ads Manager completion after deployment

1. In Conversions > Data Source, select this pixel and use its three-dot menu > Test.
2. Test both public landing pages: `/practice-areas/criminal-defense/` and `/practice-areas/divorce-family-law/`.
3. Confirm a `page_viewed` event, then click Call and Text. Verify custom event names and exactly one event for each click. Device handoff may require dismissing the phone/message application prompt.
4. Create conversion definitions using the custom base event and exact event names above. Use the existing pixel and a 30-day click attribution window. Do not substitute Lead created, Appointment scheduled, or Page viewed for contact-button clicks.
5. Attach both definitions to each existing click campaign for reporting. Custom events cannot be conversion-optimization goals; keep the existing click objectives.
6. Received test events do not establish attributed ad conversions. Confirm live attribution only after real eligible ad interactions and allow for reporting delays. Official documentation notes test events can count in normal analytics.

If the UI's standard-event selector does not expose a custom-event definition, use the supported custom conversion-event setting workflow rather than mislabeling the event. API setup requires an advertiser account key kept server-side; the pixel ID alone does not authorize Ads Manager account changes.

## Sources

- https://developers.openai.com/ads/measurement-pixel
- https://developers.openai.com/ads/supported-events
- https://developers.openai.com/ads/conversion-tracking

## Release status

Prepared on `codex/chatgpt-ad-conversions`, based on `codex/chat-10-homepage` in `jwallislaw/Jayforjusticewebsite`. Source checks can verify event dispatch and build inclusion; event receipt requires deployment and the Ads Manager test described above. No production deployment or Ads Manager conversion definitions are implied by preparing this change.
