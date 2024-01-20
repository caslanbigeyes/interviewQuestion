// // // 3.关系型数组转换成树形结构对象
// // var obj = [
// //     { id: 3, parent: 2 },
// //     { id: 1, parent: null },
// //     { id: 2, parent: 1 }
// // ]
// // // 转换成
// // var result = {
// //     id: 1,
// //     parent: null,
// //     children: [{
// //         id: 2,
// //         parent: 1,
// //         children: [{
// //             id: 3,
// //             parent: 2
// //         }]
// //     }]
// // }

// // // 递归
// // const convert = (arr = [], parentId = null) => {
// //     let result = { id: null, parent: null, children: [] };
// //     for (let i = 0; i < arr.length; i++) {
// //         let child = { id: arr[i].id, parent: parentId }
// //         if (arr[i].parent === parentId) {
// //             let children = convert(arr,arr[i].id);
// //             child.children = children;
// //             result.children.push(child)
// //         }
// //     }
// //     return result.children;
// // }

// // console.log(convert(obj), 333)




// // // 全排列
// // function calc(arr) {
// //     const result = [];

// //     function gener(currentArr, remainingArr) {
// //         if (remainingArr.length === 0) {
// //             result.push([...currentArr]);
// //             return;
// //         }

// //         for (let i = 0; i < remainingArr.length; i++) {
// //             const newCurrentArr = [...currentArr, remainingArr[i]];
// //             const newRemainingArr = [...remainingArr.slice(0, i), ...remainingArr.slice(i + 1)];
// //             gener(newCurrentArr, newRemainingArr);
// //         }
// //     }

// //     gener([], arr);
// //     return result;
// // }

// // var arr = [1, 2, 3];
// // var result = calc(arr);

// // console.log(result);



// // 生成1到100的数组
// const numbers = Array.from({ length: 100 }, (_, index) => index + 1);

// // 过滤出偶数
// const evenNumbers = numbers.filter(number => number % 2 === 0);

// // 生成新数组，每一项是前一项的值加上前一项的和
// const resultArray = evenNumbers.reduce((acc, current) => {
//   const sum = acc.length > 0 ? acc[acc.length - 1] + current : current;
//   return [...acc, sum];
// }, []);

// console.log(resultArray);




function findMoreThanHalf(arr) {
    const countMap = new Map();
  
    // 遍历数组，记录每个元素的出现次数
    for (let num of arr) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    console.log(countMap,'countMap')
  
    // 找到出现次数超过数组长度一半的元素
    for (let [num, count] of countMap.entries()) {
      if (count > arr.length / 2) {
        return num;
      }
    }
  
    return -1;
  }
  
  // 测试用例
  console.log(findMoreThanHalf([0,1,2,2]));    // -1
  console.log(findMoreThanHalf([0,1,2,2,2]));  // 2
  
  
  