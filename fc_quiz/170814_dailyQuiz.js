// 2. `id = one` 으로 접근하여 `className`을 `gray`로 변경하시요.

var elem = document.getElementById('one');

elem.className = 'gray';


// 3. `qureSelectorAll`을 사용하여 `class = "red"`를 `green`으로 변경하시요. (for문)

var elems = document.querySelectorAll('.red');

  for (var i = 0; i < elems.length; i++) {
  elems[i].className = 'green';


// 4. `id = four`에 대해 `setAttribute`을 사용하여 `class = "blue"`를 추가하시오.

var four = document.getElementById('four');

if (!four.hasAttribute('class')) {
  four.setAttribute('class', 'blue');
} else {
  four.className = 'blue';
}

// 5. `<h1>`태그와 `<ul>`태그 사이에 `<p class="text">Daliy Quiz</p>` 를 추가하시오. (insertAdjacentHTML() 사용)
  // - `insertAdjacentHTML`를 사용하여 항상 같은 위치에 원하는 요소가 올 수 있도록 한다.

var mainle = document.querySelector('.main');

mainle.insertAdjacentHTML('beforebegin', `<p class="text">Daliy Quiz</p>`);


// 6. `li`요소 중 마지막 요소를 삭제 하시오.
// - 항상 마지막 요소가 선택되어 삭제될 수 있도록 한다.

var elem = document.querySelector('.main');
var reEleme = elem.children[elem.children.length-1];
elem.removeChild(reEleme);


// IE +9
var reEleme = elem.lastElementChild;
elem.removeChild(reEleme);
