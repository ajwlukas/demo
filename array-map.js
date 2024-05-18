//array-map.js

/**
 * map 함수 내에서 push를 사용할 때는 할당하지 않아도 변경되는 것을 보고 확인해보기 위해 만든 문서
 */

/**
 * 결론 : map 함수는 본래 그 배열이나 객체 자체를 변경하지 않으나, 내부에서 함수를 호출 했을 때는 변경 될 수 있다.
 */

let arr = [[1,2],[1,2,4],[1,3,4], [2,3,4]];

let newArr = arr.map(innerArr => innerArr[0] === 1? innerArr.push(5) : innerArr);//return에 push된 배열의 index를 리턴한다.

console.log("push를 이용한 패턴:",arr); // [ [ 1, 2, 5 ], [ 1, 2, 4, 5 ], [ 1, 3, 4, 5 ], [ 2, 3, 4 ] ]
console.log("return받은값:",newArr); //[ 3, 4, 4, [ 2, 3, 4 ] ]

//위의 예제는 foreach라고 생각하고 쓰는 것이 나을 것 같다. return 값이 이상하다.
//이항 연산자의 좌측 값은 push(5)의 return값일 텐데 배열의 인덱스값이 들어있다.
//위와 같은 예제를 보았는데, 의미상 for_each로 사용하는 것이 바람직 할 것 같다.


arr = [[1,2],[1,2,4],[1,3,4], [2,3,4]];

arr.forEach(innerArr => {if(innerArr[0] === 1) innerArr.push(5)});

console.log("for_each로 바꾼 값",arr);

//map으로 자체 값이 변하지 않는 모습
arr = [[1,2],[1,2,4],[1,3,4], [2,3,4]];

newArr = arr.map(innerArr => innerArr[0] === 1? [...innerArr,5 ] : innerArr);

console.log(arr); // [ [ 1, 2 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ] ]
console.log("newArr",newArr); // [ [ 1, 2 ], [ 1, 2, 4 ], [ 1, 3, 4 ], [ 2, 3, 4 ] ]

const pushVal = arr.push(1,2,3);

console.log(pushVal); 