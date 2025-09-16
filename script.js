let inputEl = document.getElementById("input");
let resultEl = document.getElementById("result");
let historyEl = document.getElementById("history");

let input = "";

// 입력 추가
function appendValue(val) {
  input += val;
  inputEl.textContent = input;
}

// 입력 초기화
function clearInput() {
  input = "";
  inputEl.textContent = "";
  resultEl.textContent = "";
}

// 계산 실행
function calculate() {
  try {
    let res = eval(input);
    resultEl.textContent = res;
    addHistory(`${input} = ${res}`);
    input = res.toString();
  } catch {
    resultEl.textContent = "Error";
  }
}

// 히스토리 추가
function addHistory(record) {
  let li = document.createElement("li");
  li.textContent = record;
  historyEl.prepend(li);
}

// 히스토리 지우기
function clearHistory() {
  historyEl.innerHTML = "";
}
