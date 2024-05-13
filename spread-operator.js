//2024-05-13 14:51:31

/**
  const [todos, setTodos] = useState<Todo[]>([
    { id: 0, text: "잠자기", isChecked: false },
    { id: 1, text: "공부하기", isChecked: false },
    { id: 2, text: "미팅하기", isChecked: false },
  ]);

 * 
  const handleCheckedChange = (itemId: number) => {
    setTodos((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };
 * 
  { ...item, isChecked: !item.isChecked } 이 부분에서 isChecked가 2번 들어가는건가? 싶어서 테스트 해 봄
 */

/** 결과
 * 기본값 할당 처럼 맨 뒤에 있는 값만 될 줄 알았는데
 * 변수의 위치에 상관없이 잘 적용되는 모습을 보았다.
 */

let arr = { id: 1, age: 30, name: "ajw" };

let arr2 = { ...arr, name: "pjb" }; //{ id: 1, age: 30, name: 'pjb' }

let arr3 = { ...arr, age: 20 }; //{ id: 1, age: 20, name: 'ajw' }

console.log(arr2);
console.log(arr3);
