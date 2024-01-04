

// new 操作符的原理


function Person(name, age) {
    this.name = name;
    this.age = age;
    return { name }
}



Person.prototype.sex = '男';
Person.prototype.getInfo = function () {
    console.log(`${this.name},age:${this.age},sex:${this.sex}`)
}


const li = new Person('llf', 18)
console.log(li, '3343')





function myNew(...args) {
    const obj = {}
    let contructor = [].shift.call(args);
    obj.__proto__ = contructor.prototype;
    var ret = contructor.apply(obj, args);
    return typeof ret === 'object' ? ret : obj;
}

var p = myNew(Person, 'xiumubai', 18)
console.log(p,'p')
console.log(p.age);
console.log(p.name);