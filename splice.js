//splice.js
//2024-05-19 22:45:36

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.splice(1,2);//[1, 4, 5,  6,7, 8, 9, 10  ]

console.log(arr); 

arr.splice(1,0,11);

console.log(arr); //[1, 11, 4,  5, 6,7,  8, 9, 10]

arr.splice(1,1,12);

console.log(arr); //[1, 12, 4,  5, 6,7,  8, 9, 10]
