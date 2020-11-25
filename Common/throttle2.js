const throttle = (fn, threshold = 250) => {
  let last = 0;

  return (...args) => {
    const that = this;
    const now  = new Date().getTime();

    if (last + threshold > now) {
      return;
    }

    last = now;
    return fn.apply(that, args);
  }
};