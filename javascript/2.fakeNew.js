function fakeNew(Constructor, ...args) {
  let obj = Object();
  obj.__proto__ = Constructor.prototype;

  let ret = Constructor.apply(obj, args);

  return typeof ret === "object" ? ret : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayName = function () {
  console.log(this.name);
};

Person.prototype.sayAge = function () {
  console.log(this.age);
};

var p1 = fakeNew(Person, "ryo", 25);
p1.sayName();
p1.sayAge();
