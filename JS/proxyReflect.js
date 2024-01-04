//

let obj = {
    name: 'llf',
    age: 18,
    phoneNumber: 17384354
}



var proxyObj = new Proxy(obj, {
    get: function (target, key, receiver) {
        if (key === 'phoneNumber') {
            return '经纪人：38984343'
        } else {
            // return target[key];
            return Reflect.get(target, key, receiver)
        }
    }
})

// obj.name === 'zxx'
console.log(proxyObj.name)
console.log(proxyObj.age)

console.log(proxyObj.phoneNumber)


/* 
    实践： 通过代理拿到下标4
*/
var arr = [1, 2, 3, 4];
// 想通过下标拿到4
console.log(arr[-1], "0000011114440")


function getArr(arr) {
    let handle = {
        get(target, index, handler) {
            index = Number(index);
            console.log(typeof (index))
            if (index < 0) {
                index = index + target.length;
                console.log(index, 'index')
            }
            return target[index]

        }
    }
    return new Proxy(arr, handle)
}

arr = getArr(arr);
console.log(arr[-1], '223')