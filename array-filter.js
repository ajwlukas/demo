//2024-05-16 18:56:04
/**
 * filter 사용 예시
 * 인자로 조건에 맞는 boolean을 return하는 함수를 넣어준다.
 * 조건에 맞는 새로운 배열을 return 한다.
 */

const arr = [1,2,3,2,5];

const filteredArr = arr.filter(a => a=== 2);

console.log(filteredArr); // [2]