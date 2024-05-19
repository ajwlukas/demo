//dynamic-json-key.js

let name = "english name";

const obj = {
    [name]: "thomas"
}

console.log(obj); // { english name: 'thomas' }

name = "korean name";


const obj2 = {
    [name]: "캐러비안"
}

console.log(obj2);// { korean name: '캐러비안'}