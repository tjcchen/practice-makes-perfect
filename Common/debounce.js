function debounce(fn, wait = 200) {
  let timerId = null;
  function helper() {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }

    timerId = setTimeout(fn, wait);
  }
  return helper;
}

//------------------
// TEST SECTION
//------------------

// calculate emulate some frequently triggered functions 
function calculate() {
  console.log('calculate triggered');
}

// print out multiple 'calculate triggered'
// calculate();
// calculate();
// calculate();
// calculate();
// calculate();

const debouncedCalc = debounce(calculate);

// print out 'calculate triggered' once only
debouncedCalc();
debouncedCalc();
debouncedCalc();
debouncedCalc();
debouncedCalc();