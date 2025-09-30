// dom 통해서 객체에 접근

const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const total = document.querySelector('#total');

// 제곱 수 계산 함수
function square(x) {
  return x * x;
}

let num = square(5);

console.log(num);
result1.textContent = `${num}`;

// 절대값

function my(x) {
  if (x < 0) {
    return -x;
  } else {
    return x;
  }
}

let va = my(-3);

result2.textContent = `${va}`;

// 두수의 합 - 익명함수
const add = function (x, y) {
  return x + y;
};

const show = function (a, b) {
  total.textContent = `${add(a, b)}`;
};
