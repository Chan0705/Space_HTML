// DOM 접근
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const total = document.querySelector('#total');

// 제곱 함수
const square = (x) => {
  return x * x;
};

let num = square(5);
console.log(num);
result1.textContent = `${num}`;

// 절대값 함수
const my = (x) => {
  if (x < 0) {
    return -x;
  } else {
    return x;
  }
};

let va = my(-3);
result2.textContent = `${va}`;

// 두 수의 합
const add = (x, y) => {
  return x + y;
};

// 결과 출력
const show = (a, b) => {
  total.textContent = `${add(a, b)}`;
};
