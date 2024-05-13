/*
2024-05-10 00:21:45
|| 연산자의 활용이 궁금해서 테스트해본 코드

API 같은데서 값을 가져왔을 때 입력값이 잘 못 되었을 경우의 기본값을 할당하는 역할로 사용하는 듯 싶다.

결과
null 혹은 undefined인 경우 모두 우측 값이 할당된다.
*/

let var0 = "name";

let var1 = var0 || "default";

let var2 = undefined;

console.log(var1);

var1 = var2 || "default";


console.log(var1);

var1 = "new";

let var3 = null;

var1 = var3 || "default";

console.log(var1);
