function getResult() {
  const result = document.getElementById('result');
  let num = document.getElementById('num').value;
  console.log(num);
  console.log(typeof num);

  if (num === '' || isNaN(num)) {
    result.textContent = '에러';
  } else {
    num = parseInt(num); // 숫자로 변환
    if (num % 2 == 0) {
      result.textContent = '짝수';
    } else {
      result.textContent = '홀수';
    }
  }
}
