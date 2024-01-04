


// 实现promise.all

function promiseall(promises) {
    let arr = [];
    let count = 0;
    return new Promise((reslove, reject) => {
        for (let i = 0; i < promises.length, i++;) {
            Promise.resolve(promises[i]).then(res => {
                console.log(res, '111')
                arr[i] = res
                count++
                if (count === promises.length) {
                    reslove(arr);
                }
            }).catch((err) => { reject(err) })

        }
    })
}

function myAll(promises) {
    let result = [];   
    let index = 0;
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        Promise.resolve(promises[i])
          .then(res => {
            // 输出结果的顺序和promises的顺序一致
            result[i] = res;
            index++;
            if (index === promises.length) {
              resolve(result);
            }
          })
          .catch(err => {
            reject(err);
          });
      }
    });
  }

const promiseA = 3
const promiseB = Promise.resolve(3)

promiseall([promiseA, promiseB]).then(res => {
    console.log(res, 're')
})