let demo = document.querySelector('#demo'); // 출력 객체 접근

const now = new Date(); // 날짜 인스턴스 생성

//연원일
demo.innerHTML = `${now.getFullYear()}`;
demo.innerHTML += ` .${now.getMonth()}`;
demo.innerHTML += `. ${now.getDate()}`;
demo.innerHTML += `. ${now.getDay()}<br/>`; // 숫자로 표시 2 = 화
demo.innerHTML += '여기까지 날짜<br/>';
//
demo.innerHTML += `${now.toDateString()}`; // toDateString()로 날짜 바로

// 시분초
demo.innerHTML += `<br/>${now.getHours()}`;
demo.innerHTML += `: ${now.getMinutes()}`;
demo.innerHTML += `: ${now.getSeconds()}<br/>`;
// demo.innerHTML += 'toLocaleTimeString()으로 한번에 표시 => <br/> ';
// demo.innerHTML += `${now.toLocaleTimeString()}`;

// 요일
demo.innerHTML += `${now.getDay()}<br/>`; //

// 시간 측정
demo.innerHTML += `${now.getTime() / 1000}초`; // 1000으로 나눠야됨
