// 1.Promise面试题
// Promise.resolve()
//     .then(function () {
//         console.log("promise0");
//     })
//     .then(function () {
//         console.log("promise5");
//     });

// setTimeout(() => {
//     console.log("timer1");
//     Promise.resolve().then(function () {
//         console.log("promise2");
//     });
//     Promise.resolve().then(function () {
//         console.log("promise4");
//     });
// }, 0);

// setTimeout(() => {
//     console.log("timer2");
//     Promise.resolve().then(function () {
//         console.log("promise3");
//     });
// }, 0);

// Promise.resolve().then(function () {
//     console.log("promise1");
// });
// console.log("start");


// 思路 任务分为同步任务和异步任务  同步任务先执行，执行完再执行异步任务， 异步任务又分为宏任务和微任务，宏任务又有setTimeout， 微任务有promise.then
//  start   promise0  promise1 promise5 timer1  promise2 timer2 promise4 promise3

// 正确答案：  start   promise0  promise1 promise5 timer1  promise2  promise4 timer2 promise3




// 2.async 面试题

// console.log("script start");
// async function async1() {
//   await async2(); // await 隐式返回promise
//   console.log("async1 end"); // 这里的执行时机：在执行微任务时执行
// }
// async function async2() {
//   console.log("async2 end"); // 这里是同步代码
// }
// async1();
// setTimeout(function() {
//   console.log("setTimeout");
// }, 0);
// new Promise(resolve => {
//   console.log("Promise"); // 这里是同步代码
//   resolve();
// })
//   .then(function() {
//     console.log("promise1");
//   })
//   .then(function() {
//     console.log("promise2");
//   });
// console.log("script end");


// 输出： 
/*

script start  
script end 
Promise
async2 end
async1 end
promise1
promise2
setTimeout
*/

/* 
正确输出

// script start
// async2 end 
// Promise 
// script end 
// async1 end 
// promise1 
// promise2 
// setTimeout

*/


// Promise.resolve().then(() => {
//   console.log(0);
//   return Promise.resolve(4);
// }).then((res) => {
//   console.log(res)
// })

// Promise.resolve().then(() => {
//   console.log(1);
// }).then(() => {
//   console.log(2);
// }).then(() => {
//   console.log(3);
// }).then(() => {
//   console.log(5);
// }).then(() =>{
//   console.log(6);
// })

// 大家先思考一下

/* 
0
1
4
2
3
5
6

*/




console.log("script start");
async function async1() {
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2 end");
}
async1();
setTimeout(function () {
  console.log("setTimeout");
}, 0);
new Promise(resolve => {
  console.log("Promise");
  resolve();
})
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });
console.log("script end");



/* 

script start
async1 end
Promise
script end
async2 end
promise1
promise2
setTimeout
*/

