// document.body.innerHTML = '<h1>Hello from JS</h1>'
// console.log('Git push  !!!!!!!!!! :>> ');

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// // Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// // Это стандартная практика если callback-функция довольно большая.

// // Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// // то создаем его и записывает ему значение 0.
// // В противном случае увеличиваем значение на 1.

// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//     acc[tag] += 1;
//     // console.log('acc :>> ', acc);

//   return acc;
// };

// // console.log('getTagStats :>> ', getTagStats);

// // Начальное значение аккумулятора это пустой объект {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// // console.log(tagCount);


const users = [
  { name: 'Mango', daysActive: 15 },
  { name: 'Poly', daysActive: 4 },
  { name: 'Ajax', daysActive: 27 },
  { name: 'Chelsey', daysActive: 2 },
];

const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;

console.log(users.sort(sortByActiveDays));

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

orderedItems.forEach(num => totalPrice += num)
    
  

  // Пиши код выше этой строки
  return totalPrice;
}

console.log('calculateTotalPrice :>> ', calculateTotalPrice([12, 85, 37, 4])); // 138
console.log('calculateTotalPrice :>> ', calculateTotalPrice([164, 48, 291]));
console.log('calculateTotalPrice :>> ', calculateTotalPrice([412, 371, 94, 63, 176]));

// ===================


// function filterArray(numbers, value) {
//     // Пиши код ниже этой строки
//     const filteredNumbers = [];

//     numbers.forEach(el => {if (el > value) {filteredNumbers.push(el);} } );
//     return filteredNumbers;

//   }
  
// console.log('filterArray :>> ', filterArray([1, 2, 3, 4, 5], 3));

// console.log('object :>> ', filterArray([12, 24, 8, 41, 76], 38));

// console.log('object :>> ', filterArray([1, 2, 3, 4, 5], 5)); // []


//========================

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки

// firstArray.forEach(el => {if (secondArray.includes(el)) {
//         commonElements.push(el);
//       }
// });
//     return commonElements;
    

//     // for (let i = 0; i < firstArray.length; i += 1) {
//     //   if (secondArray.includes(firstArray[i])) {
//     //     commonElements.push(firstArray[i]);
//     //   }
//     // }
  
//     // return commonElements;

//     // Пиши код выше этой строки
// }
  
// console.log('getCommonElements :>> ', getCommonElements([1, 2, 3], [2, 4]));  // 2
// console.log('getCommonElements :>> ', getCommonElements([1, 2, 3], [2, 1, 17, 19]));  // [1, 2]
// console.log('getCommonElements :>> ', getCommonElements([1, 2, 3], [10, 20, 30]));  // []


// ====================

// const changeEven = (numbers, value) => {
//     // Пиши код ниже этой строки
//     const total = [];
    
//     numbers.forEach(el => {
//         if (el % 2 === 0) {
//             total.push(el += value);
//         }
//         return total;
//     }

//     // Пиши код выше этой строки
        
//     const changeEven =(numbers, value)=> {
//     // Пиши код ниже этой строки
//     const total = [];
        
        
//     numbers.forEach(el => {if (el % 2 === 0) {
//         el += value;
//         console.log('el :>> ', el);
//     }
    
// });

//     // Пиши код выше этой строки
// }
  
// console.log('changeEven :>> ', changeEven([1, 2, 3, 4, 5], 10));
// console.log('changeEven :>> ', changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log('changeEven :>> ', changeEven([44, 13, 81, 92, 36, 54], 100));