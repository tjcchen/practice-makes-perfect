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
  let activeClass = 'active';

  let addEvent = function(elmt, eventName, fn) {
    let fnToBind = function(e) {
      return fn.call(elmt, e || win.event);
    };

    if (elmt.addEventListener) {
      elmt.addEventListener(eventName, fnToBind, false);
      return fnToBind;
    }

    eventName = 'on' + eventName;

    if (elmt.attachEvent) {
      return elmt.attachEvent(eventName, fnToBind) ? fnToBind : null;
    }

    if (typeof elmt[eventName] === 'function') {
      let f1 = elmt[eventName], f2 = fnToBind;

      fnToBind = function() {
        let ret1, ret2;

        try {
          ret1 = f1.apply(this, arguments);
        } catch(e1) {
          setTimeout(function() { throw e1; }, 0);
        }

        try {
          ret2 = f2.apply(this, arguments);
        } catch(e2) {
          setTimeout(function() { throw e2; }, 0);
        }

        return ret1 === undefined ? ret2 : ret1;
      };

      elmt[eventName] = fnToBind;
      return fnToBind;
    }

  };

  let initEvents = function() {
    for (let i = 0, len = oTabs.length; i < len; i++) {

      // addEvent(oTabs[i], 'click', function() {
      //   for (let j = 0, l = oTabs.length; j < l; j++) {
      //     oTabs[j].classList.remove(activeClass);
      //     oTabContents[j].classList.remove(activeClass);
      //   }

      //   this.classList.add(activeClass);
      //   oTabContents[i].classList.add(activeClass);
      // });

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