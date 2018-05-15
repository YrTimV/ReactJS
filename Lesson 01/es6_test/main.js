'use strict';

(function loopTest() {
  function loop(times = 0, callback = null) {
    if (!callback) {
      return;
    }

    for (let i = 0; i < times; i++) {
      callback();
    }
  }

  let times = 5;

  console.log('Loop test:');
  loop(times, () => { console.log(`Loop test ${times} time(s).`)});
}());


(function calcTest() {
  function calculateArea(figure, input) {
    const obj = {
      figure,
      input
    };

    switch (figure) {
      case 'rectangle': obj.area = input.a * input.b; break;
      case 'circle': obj.area = Math.PI * Math.pow(input.r, 2); break;
      case 'square': obj.area = Math.pow(input.l, 2); break;
      case 'triangle': obj.area = input.b * input.h / 2; break;
      default: obj.area = 0;
    }

    return obj;
  }
  
  console.log('\n');
  console.log('Calculate area test:')
  console.log('Rectangle (a = 3; b = 5) area = ', calculateArea('rectangle', {a: 3, b: 5}).area);
  console.log('Circle (r = 5) area = ', calculateArea('circle', {r: 5}).area);
  console.log('Square (l = 7) area = ', calculateArea('square', {l: 7}).area);
  console.log('Triangle (b = 4; h = 6) area = ', calculateArea('triangle', {b: 4, h: 6}).area);
}());


(function inheritanceTest() {
  class Human {
    constructor(name, age, dateOfBirth) {
      [ this.name, this.age, this.dateOfBirth ] = arguments;
    }

    displayInfo() {
      return `Name: ${this.name}, age: ${this.age}, date of birth: ${this.dateOfBirth}`;
    }
  }

  class Employee extends Human {
    constructor (name, age, dateOfBirth, salary, department) {
      super(...arguments);

      [ ,,, this.salary, this.department ] = arguments;
    }

    displayInfo() {
      return `${super.displayInfo()}, salary: ${this.salary}, department: ${this.department}`;
    }
  }

  class Developer extends Employee {
    constructor(name, age, dateOfBirth, salary, department) {
      super(...arguments);

      this.manager = null;
    }

    myManager() {
      return (this.manager ? `${this.name}: my manager is ${this.manager.name}` : `${this.name}: I am a Freelancer`);
    }

    assignMyManager(value) {
      this.manager = (value instanceof Manager ? value : null);
    }

    leaveManager() {
      if (!this.manager) {
        return;
      }

      this.manager.employees.splice(this.manager.employees.indexOf(this), 1);

      const text = `${this.name}: I left my manager ${this.manager.name}`;
      this.manager = null;

      return text;
    }
  }

  class Manager extends Employee {
    constructor(name, age, dateOfBirth, salary, department) {
      super(...arguments);

      this.employees = [];
    }

    myEmployees() {
      let text = `${this.name}: `;

      if (this.employees.length) {
        text += 'my employees - ';
        this.employees.forEach(employee => {
          text += employee.name;
        });
      } else {
        text += 'I have no employees';
      }

      return text;
    }

    assignEmployee(value) {
      if (!(value instanceof Developer)) {
        return;
      }
      
      this.employees.push(value);
      value.assignMyManager(this);
      return `${value.name}, your new manager is ${this.name}`;
    }
    
    freeEmployee(value) {
      if (!(value instanceof Developer)) {
        return;
      }

      const idx = this.employees.indexOf(value);
      
      if (!idx) {
        return;
      }
      
      this.employees[idx].leaveManager();
      this.employees.splice(idx, 1);
    }
  }

  console.log('\n');
  console.log('Inheritance test:');

  const human = new Human('John Doe', 30, '1988-01-01');
  console.log(human.displayInfo());
  
  const freelancer = new Employee('Vasiliy Pupkin', 20, '1998-02-02', 10000, 'IT');
  console.log(freelancer.displayInfo());
  
  const jsDeveloper = new Developer('Coder Mike', 25, '1993-05-19', 20000, 'IT');
  console.log(jsDeveloper.displayInfo());
  console.log(jsDeveloper.myManager());
  
  const topManager = new Manager('Ivanov I.I.', 40, '1978-10-01', 50000, 'IT');
  console.log(topManager.displayInfo());
  console.log(topManager.assignEmployee(jsDeveloper));
  console.log(topManager.myEmployees());
  
  console.log(jsDeveloper.leaveManager());
  console.log(jsDeveloper.myManager());
  console.log(topManager.myEmployees());
}());


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


(function promiseTest() {
  const arr = [];
  const count = 10;
  
  for (let i = 0; i < count; i++) {
    const promise = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      
      xhr.open('GET', `https://jsonplaceholder.typicode.com/users/${i + 1}`);
      xhr.timeout = 15000;
      xhr.ontimeout = () => {
        reject('Request timeout');
      }
      xhr.onload = () => {
        if (xhr.status !== 200) {
          reject(xhr.statusText);
          return;
        }

        resolve(JSON.parse(xhr.responseText));
      };
      xhr.send();
    });

    arr.push(promise);
  }

  Promise.all(arr).then(results => {
    console.log(results);
  }, errors => {
    console.error(`An error occured during the request.\n${errors}`);
  });
}());
