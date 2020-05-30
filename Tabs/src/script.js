/**
 * Tab Switch Component
 * 
 * @Date 2020-05-30
 */

;(function(win, undefined) {
  'use strict';

  let doc = window.document;
  let oTabs = doc.getElementsByClassName('tab');
  let oTabContents = doc.getElementsByClassName('tab-content');
  let activeClass = 'active'

  let initEvents = function() {
    for (let i = 0, len = oTabs.length; i < len; i++) {
      oTabs[i].addEventListener('click', function(e) {

        for (let j = 0, l = oTabs.length; j < l; j++) {
          oTabs[j].classList.remove(activeClass);
          oTabContents[j].classList.remove(activeClass);
        }

        this.classList.add(activeClass);
        oTabContents[i].classList.add(activeClass);

      }, false);
    }
  };

  win.onload = initEvents;
})(window);