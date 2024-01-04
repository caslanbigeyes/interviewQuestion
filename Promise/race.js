



function myRace(promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i]).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        }
    })
}
const PromiseC = Promise.reject(44488888)
const PromiseA = 3;
const PromiseB = Promise.resolve(444)


myRace([PromiseC, PromiseA]).then(res => {
    console.log(res, '122')
}).catch(err => {
    console.log(err)
})





let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 1000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('failed')
    }, 500)
})

Promise.race([p1, p2]).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)  // 打开的是 'failed'
})




// 字符串去掉收尾空格

// const str = "Hello , wrold   ";

// const trimmedStr = str.replace(/^\s+|\s+$/g,'');

// console.log(trimmedStr,'trimmedStr')