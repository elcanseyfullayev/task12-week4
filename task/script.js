// 1.Istenilen sayda  gelen datalarin Ortalamasini veren Js function yazin.Call back istifade edeceksiz.

const data = [2,3,5,6,7,8,4] ; 

function sumdata(arr, callback) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        
    }
    let orta = sum / arr.length;
    callback(orta);
}

function edediorta(orta) {
    console.log(orta);
}

sumdata(data, edediorta);


// 2.Istenilen sayda gelen datalarin cut olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.


// const data = [2,4,5,6,7,8,3,2] ; 

// function sumdata(arr, callback) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             sum += arr[i];
//         }
        
//     }
//     callback(sum);
// }

// function sumeven(sum) {
//     console.log(sum);
// }

// sumdata(data, sumeven);

// 3.Istenilen sayda gelen datalarin tek olanlarinin toplamini tapan Js function yazin.Call back istifade edeceksiz.

// const data = [2,4,7,9,5,5,6,7,8,3,2] ; 

// function sumdata(arr, callback) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             sum += arr[i];
//         }
        
//     }
//     callback(sum);
// }

// function sumodd(sum) {
//     console.log(sum);
// }

// sumdata(data, sumodd);


// 4.Istenilen sayda gelen datalarin cut olanlarin toplamini tek olanlarinin toplamina olan hasilini tapan Js function yazin.Call back istifade edeceksiz.


// const data = [2,4,7,5,9,5,6,7,8,3,2] ; 

// function sumdata(arr, callback) {
//     let sumodd = 0;
//     let sumeven = 0;
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             sumodd += arr[i];
//         }else {
//             sumeven += arr[i]
//         }
//         sum = sumodd * sumeven
        
//     }
//     callback(sum);
// }

// function sumall(sum) {
//     console.log(sum);
// }

// sumdata(data, sumall);

