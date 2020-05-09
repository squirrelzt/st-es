// ES5数组遍历的方法
const  arr = [1,2,3,4,5];

// for 循环
for (let i=0; i < arr.length; i++) {
  if (arr[i] === 2) {
    break;
    // continue
  }
  console.log(arr[i]);
}

// forEach 不支持break和continue
arr.forEach(function (item) {
  console.log(item);
})

// every 使用return 实现break功能
arr.every(function (item) {
  if (item === 2) {

  } else {
    console.log(item);
  }
  return true;
})

// for in 遍历的是对象,数组是对象的一种，数组的索引可能是字符串
// arr.a = 8;
for (let index in arr) {
  // ==时相等，因为index是字符串而不是数字，===不相等，因为即判断值还判断类型
  // chrome浏览器中，灰色是字符串，蓝色是数字
  // if (index * 1 === 2) {  这种方式将index转换成字符串
  if (index == 2) {
    continue;
    //break;
  }
  console.log(index, arr[index]);
}


// ES6 遍历Array

// for of
for (let item of arr) {
  console.log(item);
}


// 转换
// let args = [].slice().call(arguments); //collection
// let imgs = [].slice().call(document.querySelectorAll('img')); //NodeList
// console.log(args);
// Array.prototype.from
// let args = Array.from(arguments);
// let imgs = Array.from(document.querySelectorAll('img'));
// imgs.forEach()
// Array.from(arrayLike, mapFn, thisArg);


// let array = Array(5);
// array.forEach(function (item) {
//   item = 1
// })
// for (let i = 0; i < array.length; i++) {
//   array[i] = 1;
// }
// console.log(array)

let array = Array.from({ length: 5}, function () {
  return 1
});
console.log(array)

// Array.prototype.of
let array1 = Array.of(1,2,3,4,5); //可以不用pust
console.log(array1)

// Array.prototype.fill
let arrayFill = Array(5).fill(3); //默认数组中5个数都是3
console.log(arrayFill)
let arrayFill1 = [1,2,3,4,5];

console.log(arrayFill1.fill(8, 2, 4)); //第3、4个元素替换成8


// 查找数组元素
let arrayFind = [1,2,3,4,5];
// ES5 查找方法 filter返回找到的数组，查找不到返回空数组,满足条件的所有值
let find = arrayFind.filter(function (item) {
  // return item === 6;
  // return item === 3;
  return item % 2 === 0 ;
});
console.log(find);

// Array.prototype.find  返回查找到的满足条件的第一个值数据，找不到返回undefined
let find1 = arrayFind.find(function (item) {
  // return item === 6;
  // return item === 3;
  return item % 2 === 0 ;
});
console.log(find1)

// Array.prototype.findIndex
let findIndex = arrayFind.findIndex(function (item) {
  // return item === 6;
  // return item === 3;
  return item % 2 === 0 ;
});
console.log(findIndex)
