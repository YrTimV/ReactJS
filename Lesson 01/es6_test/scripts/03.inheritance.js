'use strict';

(function inheritanceTest() {
  class Human {
    constructor(...args) {
      [ this.name, this.age, this.dateOfBirth ] = args;
    }

    displayInfo() {
      return `Name: ${this.name}, age: ${this.age}, date of birth: ${this.dateOfBirth}`;
    }
  }

  class Employee extends Human {
    constructor (...args) {
      super(...args);

      [ ,,, this.salary, this.department ] = args;
    }

    displayInfo() {
      return `${super.displayInfo()}, salary: ${this.salary}, department: ${this.department}`;
    }
  }

  class Developer extends Employee {
    constructor(...args) {
      super(...args);

      this.manager = null;
    }

    myManager() {
      return (this.manager ? `${this.name}: my manager is ${this.manager.name}` : `${this.name}: I am a Freelancer`);
    }

    assignMyManager(value) {
      if (value instanceof Manager) {
        this.manager = value;
      } else {
        this.manager = null;
        throw new Error(`Invalid value type, instance of 'Manager' expected instead of '${typeof value}'.`);
      }
    }

    leaveManager() {
      if (!this.manager) {
        console.log(`${this.name}: I have no manager.`);
        return;
      }

      this.manager.employees.splice(this.manager.employees.indexOf(this), 1);

      const text = `${this.name}: I left my manager ${this.manager.name}`;
      this.manager = null;

      return text;
    }
  }

  class Manager extends Employee {
    constructor(...args) {
      super(...args);

      this.employees = [];
    }

    myEmployees() {
      return `${this.name}: ` +
      (
        this.employees.length ?
        'My employees - ' + this.employees.map(employee => employee.name).join(', ') :
        'I have no employees'
      )
    }

    assignEmployee(value) {
      if (!(value instanceof Developer)) {
        throw new Error(`Invalid value type, instance of 'Developer' expected instead of '${typeof value}'.`);
      }
      
      this.employees = this.employees.concat([value]);
      value.assignMyManager(this);
      return `${value.name}, your new manager is ${this.name}`;
    }
    
    freeEmployee(value) {
      if (!(value instanceof Developer)) {
        throw new Error(`Invalid value type, instance of 'Developer' expected instead of '${typeof value}'.`);
      }

      const exEmployee = this.employees.find(value);

      if (!exEmployee) {
        throw new Error(`${value.name}: employee '${value.name}' is not mine to free.`);
      }
      
      exEmployee.leaveManager();
      this.employees = this.employees.filter(employee => employee !== exEmployee);
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
