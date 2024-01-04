

// js没有内置的所谓休眠，所谓的sleep只是一种延迟执行的效果

// 方法一：利用伪死循环阻塞主线程
// 因为js是单线程的，通过这种方式可以实现真正意义上的sleep
function sleep1(fn, time) {
    let prevDateTime = new Date().getTime()
    while (new Date().getTime() - prevDateTime < time) {
        continue;
    }
    fn()
}


// 方法二: setTimeout
function sleep2(fn, time) {
    setTimeout(fn, time);
}

// 方法三: promise
function sleep3(fn, time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    }).then(() => {
        fn();
    })

}

// 方法四: async
async function sleep4(fn, time) {
    await new Promise(resolve => {
        setTimeout(resolve, time);
    })
    fn();
}

function fn(){console.log('测试')}

sleep1(fn,2000)
sleep2(fn,2000)
sleep3(fn,2000)
sleep4(fn,2000)