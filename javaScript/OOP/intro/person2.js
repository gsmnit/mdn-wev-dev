function Person(name) {
    this.name = name;
    this.greeting = function() {
      console.log('Hi! I\'m ' + this.name + '.');
    };
  }

let person1 = new Person('Bob');
let person2 = new Person('Sarah');

person1.name;
person1.greeting();
person2.name;
person2.greeting();

