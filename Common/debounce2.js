const debounce = (fn, delay = 250) => {
  let timerId = null;

  return (...args) => {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }

    const that = this;

    timerId = setTimeout(() => {
      fn.apply(that, args);
    }, delay);
  }
};