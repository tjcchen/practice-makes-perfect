;(function(win, undefined) {
  'use strict';

  var doc  = win.document;
  var oBtn = null;

  var Ajax = function() {
    var xmlHttpReq = null;

    if (window.ActiveObject) {
      xmlHttpReq = new ActiveXObject('Microsoft.XMLHTTP');
    } else if (window.XMLHttpRequest) {
      xmlHttpReq = new XMLHttpRequest();
    }

    xmlHttpReq.open('GET', 'test.php', true);

    xmlHttpReq.onreadystatechange = function() {
      if (xmlHttpReq.readyState === 4) {
        if (xmlHttpReq.status === 200) {
          document.getElementById('content-area').innerHTML = xmlHttpReq.responseText;
        }
      }
    };
  };

  var onload = function() {
    oBtn = doc.getElementById('content-button');

    oBtn.onclick = function() {
      alert('You click me!');
    };
  };

  window.onload = onload;
})(window);