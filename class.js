function Person() {
    this.name = "Ste";
    this.age = 27;
}

Person.prototype.sayName = function(){
    console.log("My Name is " + this.name);
};

Person.prototype.sayAge = function(){
    console.log("My Age is " + this.age);
};

var p1 = new Person();
p1.sayAge();
p1.sayName();

function ExtendedPerson() {
    Person.call(this);
};

ExtendedPerson.prototype = Object.create(Person.prototype);
//ExtendedPerson.prototype = new Person();

var e1 = new ExtendedPerson();
e1.sayAge();
e1.sayName();