// 浅拷贝
function shallowClone(obj) {
    const newObj = {};
    for (let i of obj) {
        if (obj.hasOwnProperty(i)) {
            newObj[i] = obj[i]
        }
    }
    return newObj;
}


// 深拷贝
function deepClone(obj) {
    // 先判断是对象还是数组
    if (obj === null || typeof (obj) !== 'object') {
        return obj
    }
    let copy = Array.isArray(obj) ? [] : {}
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            copy[i] = deepClone(obj[i])
        }
    }
    return copy;
}


const myobj = { a: 1, b: 2 }
const newObj = deepClone(myobj);
myobj['a'] = 2222;
console.log(newObj === myobj, newObj)  // {a:1,b:2}






// 解决不了循环引用  什么是循环引用？