// 구구단 n단
const result = document.getElementById('result');

//

// let dan = 6;

// for (let i = 1; i <= 9; i++) {
//   result.innerHTML += `${dan} x ${i} = ${dan * i}<br/>`;
// }

// 전체 구구단
let output = '';

for (let i = 2; i <= 9; i++) {
  output += `<h3>${i}단</h3>`;
  for (let j = 1; j <= 9; j++) {
    output += `${i} x ${j} = ${i * j}<br/>`;
  }
  output += '<br/>';
}
result.innerHTML = output;
