// 一定时间内只执行一次
const throttle = (func, time) => {
    let timer = null;
    return function (...args) {
        if (timer) return;
        timer = setTimeout(() => {
            func.call(this, ...args);
            timer = null;
        }, time);
    };
};
