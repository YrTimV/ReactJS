'use strict';

(function promiseTest() {
  const count = 10; // Request count.
  
  console.log('\n');
  console.log('Promises test:');
  
  Promise.all(Array(count).fill(0).map((promise, idx) =>
    fetch(`https://jsonplaceholder.typicode.com/users/${idx + 1}`)
      .then(response => response.json())
  )).then(console.log).catch(console.error)
}());
