// 배열 정의
let arr = [1, 2, 3, 4, 5];

console.log(arr);
console.log(arr.length);

// 배열 출력

for (let i = 0; i < arr.length; i++) {
  result.innerHTML += `${arr[i]}`;
}

// 배열 요소 추가
arr[4] = '7'; // 인덱싱

console.log(arr);
result.innerHTML += `<br/> 요소추가 : ${arr}`;

// push 요소 추가
arr.push(27); // 마지막 인덱스에 추가

result.innerHTML += `<br/> push로 요소추가 : ${arr}`;

// 요소 삭제 - splice()
arr.splice(1, 1); // splice(index, x) => index 위치부터 시작해서 x 개를 삭제

result.innerHTML += `<br/> splice로 요소삭제 : ${arr}`;

// 요일 배열
let day = [
  '일요일',
  '월요일',
  '화요일',
  '수요일',
  '목요일',
  '금요일',
  '토요일',
];
result.innerHTML += `<br/>요일 배열 : ${day}`;
