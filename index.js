// Answer to Q1.
// function multiply(num1, num2, callback) {
//     let output = num1 + num2;
//     callback(output);
//   }
  
//   function addition(output) {
//     console.log('The result is: ' + output);
//   }
  
//   multiply(100, 100,  addition);


// Answer to Q2.
// function printNumberfrom1to7(callback) {
//     let number = 1;
//     const printNumber = () => {
//       console.log(number);
//       number++;
//       if (number <= 7) {
//         setTimeout(printNumber, number * 1000);
//       } else {
//         callback();
//       }
//     };
//     setTimeout(printNumber, number * 1000);
//   }
//   printNumberfrom1to7(() => console.log("Done!"));

//Answer to Q4.
// function checkValue(value) {
//     return new Promise((resolve, reject) => {
//       if (value === 'Altamash') {
//         resolve('Promise Resolved');
//       } else {
//         reject('Promise Rejected');
//       }
//     });
//   }
  
//   checkValue('Altamash')
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
  
  //Answer to Q5.
//   function divide(num1, num2, callback) {
//     let output = num1 / num2;
//     callback(output);
//     }
          
//     function division(output) {
//     console.log('The result is: ' + output);
//     }
          
//     divide(100, 100,  division);
  
  //Answer to Q6.
//   setTimeout(() => {
//     console.log('1')
//     setTimeout(() => {
//       console.log('2')
//       setTimeout(() => {
//         console.log('3')
//         setTimeout(() => {
//           console.log('4')
//           setTimeout(() => {
//             console.log('5')
//             setTimeout(() => {
//               console.log('6')
//               setTimeout(() => {
//                 console.log('7')
                
//               }, 7000);
//             }, 6000);
//           }, 5000);
//         }, 4000);
//       }, 3000);
//     }, 2000);
//   }, 1000);
  

  //Answer to Q7.
//   const promiseFunc = new Promise ((resolve,reject) => {

//     let marks=75
//     if(marks>74){
//         resolve('You Are In Distinction')
//     }
//     else{
//         reject('You Are In First Class')
//     }
    
//   })
//   promiseFunc
//  .then((x) => console.log(x))
//  .catch((err) => console.log(err))

//Answer to Q9.

// const abc = ()=>
// new Promise((resolve,reject) =>{
//   setTimeout(() => resolve(), 1000);
// })

// const xyz = ()=>
// new Promise((resolve,reject) =>{
//   setTimeout(() => resolve(), 2000);
// })

// const final =() => console.log("Both are Executed")

// Promise.all([abc(),xyz()]).then(() => {
//   final()
// })

//Answer to Q8.

// function fetchData() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve('Data received!'), 2000);
//   });
// }

// async function printData() {
//   console.log("Fetching data...");
//   const data = await fetchData();
//   console.log(data);
// }

// printData();

//Answer to Q3//

// function printNumber(num) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(num);
//       resolve();
//     }, num * 1000);
//   });
// }

// async function printNumbers() {
//   for (let i = 1; i <= 7; i++) {
//     await printNumber(i);
//   }
// }

// printNumbers();