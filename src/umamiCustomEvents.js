// src/umamiCustomEvents.js
document.addEventListener('DOMContentLoaded', function () {
  if (typeof umami === 'object') {
    umami.track('Referrer URL', { url: document.referrer });
  }
});