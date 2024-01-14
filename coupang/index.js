// // Please implement the function 'get' below to make the test cases pass.
// // This is a function to get the value at path of object.
// // If the resolved value is undefined, the defaultValue is returned in its place.

var object = { 'a': [{ 'b': { 'c': 3 } }] };

get(object, 'a[0].b.c');
// // => 3

get(object, ['a', '0', 'b', 'c']);
// => 3

get(object, 'a.b.c', 'default');
// // => 'default'

function get(obj, path, defaultValue) {
    // write here
    const keys = Array.isArray(path) ? path : path.split('.');
    let result = obj;
    for (let key of keys) {
        if (result === undefined) break;
        if (key.includes('[') && key.includes(']')) {
            // 获得数组索引
            console.log(key.split(/[\[\]]/),333)
            const [prop, index] = key.split(/[\[\]]/);
            result = result[prop][index]
        } else {
            console.log(result[key],3332111)
            result = result[key]
        }
    }

    return result ? result : defaultValue
}

// const myContext = React.createContext();


// function MyProvieder(props) {
//     const shareData = {}//共享数据

//     return (
//         <myContext.Provider value={shareData}>
//             {props.children}
//         </myContext.Provider>
//     )
// }

// function MyConsumer() {
//     return (
//         <myContext.Consumer >
//             {获取的数据}
//         </myContext.Consumer>
//     )
// }

// // function yourComp(){
// //     const flag = true;
// //     if(flag){
// //         useA()
// //     }else{
// //         useB()
// //     }
// //     return (
// //         jsx
// //     )
// // }

// // 条件hook 是有问题


// function compA() {
//     useA();
//     return (
//         A的jsx
//     )
// }
// function compB() {
//     useB();
//     return (
//         B的jsx
//     )
// }


// function mainComp() {
//     const flag = true;
//     return flag ? <compA /> : <compB />
// }


class EventBus {
    constuctor() {
        this.events = {};
    }

    // 订阅一次
    subScribeOne(eventName, callback) {
        // 取消
        const oneCallback = (data) => {
            callback(data);
            this.unsubScribe(eventName, oneCallback)
        }
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(oneCallback)
    }

    // 订阅事件
    subScribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(callback)
    }
    // 发布事件
    publish(eventName, data) {
        const eventCallbacks = this.events[eventName];
        if (eventCallbacks) {
            eventCallbacks.forEach(callback => callback(data));
        }
    }

    // 取消订阅
    unsubScribe(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(cb => cb !== callback)
        }
    }


}

const eventBus = new EventBus()


eventBus.subScribe('eat', data => {
    console.log('我要去吃大餐了')
})

eventBus.publish('eat', { username: 'me' })

console.log(eventBus)