function createNewPerson(name) {
    const obj = {};
    obj.name = name;
    obj.greeting = function() {
      console.log('Hi! I\'m ' + obj.name + '.');
    };
    return obj;
  }
const salman = createNewPerson('Salman Khan');
salman.name;
salman.greeting();  