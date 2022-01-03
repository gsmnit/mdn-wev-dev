let obj1 = {};
let obj2 = new Object();

obj1.name = 'simple empty object';
obj2.greeting = function(){
    console.log('i am empty object from OBJECT constructor');
}

obj2.greeting();

const person1 = {
    name: {
        first : 'ganpat',
        last : 'singh'
    },
    age: 22,
    gender: 'male',
    interests: ['music', 'reading'],
    bio: function() {
        console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ' + (gender === 'male' ? 'he' : 'she') + ' likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
        console.log('Hi! I\'m ' + this.name.first + '. and you?');
    }
};

let person2 = new Object(person1);