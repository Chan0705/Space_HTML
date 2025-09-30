const result = document.getElementById('result');

function sayHello() {
  result.innerText = 'say Hello';
}

sayHello();

// 구구단출력
function showGu() {
  let output = '';

  for (let i = 2; i <= 9; i++) {
    output += `<h3>${i}단</h3>`;
    for (let j = 1; j <= 9; j++) {
      output += `${i} x ${j} = ${i * j}<br/>`;
    }
    output += '<br/>';
  }

  document.getElementById('display').innerHTML = output;
}
