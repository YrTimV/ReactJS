'use strict';

(function loopTest() {
  function loop(times = 0, callback = null) {
    if (!times || !callback || typeof callback !== 'function') {
      return;
    }

    Array(times).fill(0).map(callback);
  }

  const times = 5; // Loop count.

  console.log('Loop test:');
  loop(times, (item, idx) => console.log(`Loop test ${idx + 1} of ${times}.`));
}());
