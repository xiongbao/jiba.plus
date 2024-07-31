// src/umamiCustomEvents.js
document.addEventListener('DOMContentLoaded', function () {
  if (typeof umami === 'function') {
    umami.trackEvent('Referrer URL', { url: document.referrer });
  }
});