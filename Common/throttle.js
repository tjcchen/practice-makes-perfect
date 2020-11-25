function throttle(fn, threshold = 250) {
  let last  = null;
  let timer = null;

  return function() {
    const context = this;
    const args = arguments;

    let now = +new Date();

    if (last && now < last + threshold) {
      clearTimeout(timer);

      timer = setTimeout(function() {
        last = now;
        fn.apply(context, args);
      }, threshold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  }
}
