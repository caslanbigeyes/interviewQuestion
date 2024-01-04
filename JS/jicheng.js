
// 原型链继承
function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function () {
    return this.property;
}

function SubType() {
    this.subproperty = false;
}

// 这里是关键，创建SuperType的实例，并将该实例赋值给SubType.prototype
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function () {
    return this.subproperty;
}

var instance = new SubType();
console.log(instance.getSuperValue()); // true


// 缺点：对于多个实例对引用类型的操作会被篡改。


// function SuperType() {
//     this.colors = ["red", "blue", "green"];
// }
// function SubType() { }

// SubType.prototype = new SuperType();

// var instance1 = new SubType();
// instance1.colors.push("black");
// alert(instance1.colors); //"red,blue,green,black"

// var instance2 = new SubType();
// alert(instance2.colors); //"red,blue,green,black"

/* ----------------------------------------------------------- */


// 借用构造函数继承
function SuperType() {
    this.color = ["red", "green", "blue"];
}
function SubType() {
    //继承自SuperType
    SuperType.call(this);
}
var instance1 = new SubType();
instance1.color.push("black");
console.log(instance1.color);//"red,green,blue,black"

var instance2 = new SubType();
console.log(instance2.color);//"red,green,blue"


/* ----------------------------------------------------------- */







var mySymbol = Symbol('description');
var mySymbol2 = Symbol('description');
const myObject = {
    [mySymbol]: 'value',
    [mySymbol2]: '33'
};

console.log(myObject[mySymbol],myObject[mySymbol2]); // 输出：value
