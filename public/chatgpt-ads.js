/* ChatGPT Ads: public marketing pages and contact-button intent only. */
(function (w, d) {
  'use strict';

  // Never install marketing measurement on the client-login route.
  if (/^\/client-login(?:\/|$)/i.test(w.location.pathname)) return;
  if (w.__jayChatGPTAdsInstalled) return;
  w.__jayChatGPTAdsInstalled = true;

  if (!w.oaiq) {
    var queue = function () { queue.q.push(arguments); };
    queue.q = [];
    w.oaiq = queue;
    var script = d.createElement('script');
    script.async = true;
    script.src = 'https://bzrcdn.openai.com/sdk/oaiq.min.js';
    d.head.appendChild(script);
  }

  w.oaiq('init', { pixelId: '5sLpzjAxyJW3B7NfrUXRYK', debug: false });
  w.oaiq('measure', 'page_viewed', { type: 'contents' }, { opt_out: true });

  d.addEventListener('click', function (event) {
    if (event.defaultPrevented || event.button > 0) return;
    var target = event.target;
    if (target && target.nodeType === 3) target = target.parentElement;
    var link = target && target.closest && target.closest('a[href]');
    if (!link) return;

    // Match only the firm's number. Do not send the link, page, or contact text.
    var href = link.getAttribute('href') || '';
    var match = /^(tel|sms):([^?;]+)/i.exec(href);
    if (!match) return;
    var number = match[2].replace(/[^0-9]/g, '');
    if (number !== '19018087777' && number !== '9018087777') return;

    // A click opens a phone/message app; it is not a confirmed inquiry.
    try {
      w.oaiq('measure', 'custom', { type: 'custom' }, {
        custom_event_name: match[1].toLowerCase() === 'tel'
          ? 'call_button_click' : 'text_button_click',
        opt_out: true,
      });
    } catch {
      // Measurement failure must never interfere with contacting the firm.
    }
  });
})(window, document);
