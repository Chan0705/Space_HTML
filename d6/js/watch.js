const display = document.getElementById('display');

setInterval(myWatch, 1000);

function myWatch() {
  const date = new Date();
  let time = date.toLocaleTimeString(); // 시간 문자열 저장
  display.textContent = time; // 화면에 출력
}

// 동일
setInterval(() => {
  const date = new Date();
  let time = date.toLocaleTimeString(); // 시간 문자열 저장
  display.textContent = time;
}, 1000);
