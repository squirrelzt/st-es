// ES5 类就是函数
let Animal = function (type) {
  Animal.walk();
  this.type = type;
  // this.eat = function () {
  //   console.log('i am eating food');
  // }
}
Animal.prototype.eat = function() {
  console.log('i am eating food');
}
Animal.walk = function () {
  console.log('i am walking');
}
let dog = new Animal('dog');
let monkey = new Animal('monkey');
console.log(dog);
console.log(monkey);
monkey.eat = function () {
  console.log('error');
}
dog.eat();
monkey.eat();

let _age = 4;
class Animal1 {
  constructor (type) {
    this.type = type;
  }
  // getter setter使方法变成属性
  get age() {
    return _age;
    // return 4;
  }
  set age(val) {
    // this.age = val;  不能用这种方式
    // this.realAge = val;
    if (val < 7 && val > 4) {
      _age = val;
    }
  }
  eat() {
    Animal1.walk();
    console.log('i am eating food');
  }
  static walk() {
    console.log('i am walking es6');
  }
}
let dog1 = new Animal1('dog');
let monkey1 = new Animal('monkey');
console.log(dog1);
console.log(monkey1);
dog1.eat();
monkey1.eat();
console.log(typeof Animal1);

// Setter Getter
console.log('Setter Getter');
console.log(dog1.age);
dog1.age = 8;
console.log(dog1.age);
