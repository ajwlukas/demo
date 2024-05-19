//immutable.js

//리액트는 참조값을 비교하여 변화를 감지한다고 한다.
//이해를 쉽게 하기 위한 예제

/**
 * 불변성을 지키는 법
 * 값을 변경 하고 싶을 때마다 새로운 객체를 만들어 할당한다.
 */

//불변성을 지키지 않는 예시
let nonImmutableArray = [1, 2, 3];

let before = nonImmutableArray;

nonImmutableArray.push(4);
console.log("nonImmutbale : ", nonImmutableArray);

console.log(Object.is(before, nonImmutableArray));//true

nonImmutableArray.splice(1, 1);
console.log("nonImmutbale : ", nonImmutableArray);

console.log(Object.is(before, nonImmutableArray));//true

//지키는 예시
let immutableArray =[1,2,3];

before = immutableArray;

immutableArray = immutableArray.concat(4);
console.log("immutbale : ", immutableArray);

console.log(Object.is(before, nonImmutableArray));//false

before = immutableArray;

immutableArray = immutableArray.filter((number,index)=>index!==1);
console.log("immutbale : ", immutableArray);

console.log(Object.is(before, nonImmutableArray));//false

/**
nonImmutbale :  [ 1, 2, 3, 4 ]
true
nonImmutbale :  [ 1, 3, 4 ]
true
immutbale :  [ 1, 2, 3, 4 ]
false
immutbale :  [ 1, 3, 4 ]
false
 */