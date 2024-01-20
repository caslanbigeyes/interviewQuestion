

// 一定时间内只执行一次
const trottle = (func, time) => {
    let prevTime = Date.now();
    return function (...args) {
        let newTime = Date.now();
        if (newTime - prevTime > time) {
            func.call(this, args)
            prevTime = newTime;
        }
    }
}

