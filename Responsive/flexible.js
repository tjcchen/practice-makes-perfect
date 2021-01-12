// @ts-nocheck
;(function(win, lib) {
  let doc = win.document;
  let docEl = doc.documentElement;
  let metaEl = doc.querySelector('meta[name="viewport"]');
  let dpr = 0;
  let scale = 0;
  let tid;
  let flexible = lib.flexible || (lib.flexible = {});

  if (metaEl) {
    // match string initial-scale=1.0
    let match = metaEl.getAttribute('content').match(/initial\-scale=[\d\.]+/);
    if (match) {
      scale = parseFloat(match[1]);
      dpr = parseInt(1 / scale);
    }
  }

  if (!dpr && !scale) {
    let isAndroid = win.navigator.appVersion.match(/android/gi);
    let isIPhone = win.navigator.appVersion.match(/iphone/gi);
    let devicePixelRatio = win.devicePixelRatio;

    if (isIPhone) {
      // On iOS, when devicePixelRatio is greater 2 or 3, we apply corresponding dpr value
      if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
        dpr = 3;
      } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)) {
        dpr = 2;
      }
      dpr = 1;
    } else {
      dpr = 1;
    }

    scale = 1 / dpr;
  }

  docEl.setAttribute('data-dpr', dpr);

  const refreshRem = () => {
    let width = docEl.getBoundingClientRect().width();
    if (width / dpr > 540) {
      width = 540 * dpr;
    }

    let rem = width / 10; 
    docEl.style.fontSize = rem + 'px';
    flexible.rem = win.rem = rem;
  };

  win.addEventListener('resize', function() {
    clearTimeout(tid);
    tid = setTimeout(refreshRem, 300);
  }, false);

  win.addEventListener('pageshow', function(e) {
    if (e.persisted) {
      clearTimeout(tid);
      tid = setTimeout(refreshRem, 300);
    }
  }, false);

  if (doc.readyState === 'complete') {
    doc.body.style.fontSize = 12 * dpr + 'px';
  } else {
    doc.addEventListener('DOMContentLoaded', function(e) {
      doc.body.style.fontSize = 12 * dpr + 'px';
    });
  }

  refreshRem();
})(window, window['lib'] || (window['lib'] = {}));