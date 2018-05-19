'use strict';

(function generatorTest() {
  const fields = ['firstName', 'lastName', 'age', 'dateOfBirth'];
  const fillApplication = fillApplicationGen();
  
  function* fillApplicationGen() {
    const result = {};
    
    while (true) {
      const field = yield 'Add another field.';

      if (!field) {
        break;
      }

      result[field.name] = field.value;
    }
    
    yield result;
  }
  
  fillApplication.next();

  for (const fieldName of fields) {
    const value = prompt(`Enter value for "${fieldName}".`);

    if (!value) {
      break;
    }
    
    fillApplication.next({name: fieldName, value});
  }

  console.log('\n');
  console.log('Generator test:');
  console.log(fillApplication.next().value);
}());
