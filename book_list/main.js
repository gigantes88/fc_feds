/**********
 *
 * 리스트 만들기
 *
 **********/

// 리스트
const list = document.getElementById('list');
const bookList = [
  { id: 1, title: 'HTML5', author: 'Lee', price: 2000 },
  { id: 2, title: 'CSS3', author: 'Kim', price: 3000 },
  { id: 3, title: 'JavaScript', author: 'Park', price: 5000 }
];

// 리스트 보여주기
for (let i = 0; i < bookList.length; i++) {
  let contents = `
  <tr>
  <td><input type="checkbox" id="${bookList[i].id}" class="chk"></td>
  <th>${bookList[i].id}</th>
  <td>${bookList[i].title}</td>
  <td>${bookList[i].author}</td>
  <td>${bookList[i].price}</td>
  </tr>
  `;
  // 리스트를 테이블에 찍는다.
  list.innerHTML += contents;
}

//----------------------------------------------------------------------------------------//

// 전체 체크박스

const chkAll = document.getElementById('chkAll');
let flag = false; // 체크박스 on/off
// 전체 체크박스 선택
function checkAll() {
  const chkbox = document.querySelectorAll('.chk'); 
  // html이 비동기적으로 생성됐기 때문에 해당 함수를 실행해야 비동기적으로 생성된 html의 class, id 등을 참조할 수 있게 된다. 그렇기 때문에 이 변수를 함수 안에 작성해야 한다.
  // 체크박스가 되어있지 않을 때 전체선택
  if (flag === false) {
    for (let i = 0; i < chkbox.length; i++) {
      chkbox[i].checked = true;
    }
    return flag = true;
  }
  // 체크박스가 되어 있을 때 전체해제
  if (flag === true) {
    for (let i = 0; i < chkbox.length; i++) {
      chkbox[i].checked = false;
    }
    return flag = false;
  }
}

//----------------------------------------------------------------------------------------//

// Add book 버튼 클릭
let btnAdd = document.getElementById('btnAdd');
let btnDel = document.getElementById('btnDel');
let btnCancel = document.getElementById('btnCancel');
let addForm = document.getElementById('addForm');

let inpTitle = document.getElementById('inputTitle').value;
let inpAuth = document.getElementById('inputAuth').value;
let inpPrice = document.getElementById('inputPrice').value;

function addBtn() {
  if (addForm.style.display === 'none') {
    // Add Book을 클릭했을 때 btnCancel 버튼을 보여준다.
    btnCancel.style.display = 'inline-block';
    addForm.style.display = 'block';
  } else {
    // 리스트에 추가한다.

    // 새 객체 추가
    let inputVal = {
      id: bookList.length + 1,
      title: inpTitle,
      author: inpAuth,
      price: inpPrice,
    };
    bookList.push(inputVal);

    list.innerHTML += `<tr>
      <td><input type="checkbox" id="${inputVal.id}" class="chk"></td>
      <th>${inputVal.id}</th>
      <td>${inputVal.title}</td>
      <td>${inputVal.author}</td>
      <td>${inputVal.price}</td>
    </tr>`;
    // input.value = '';
    // document.getElementById('inputAuth').value = '';
    // document.getElementById('inputPrice').value = '';
    
    // 폼과 취소 버튼을 가린다.
    btnCancel.style.display = 'none';
    addForm.style.display = 'none';
  }
}

//----------------------------------------------------------------------------------------//

// Cancel 버튼 클릭
function cancelBtn() {
  btnCancel.style.display = 'none';
  addForm.style.display = 'none';
  document.getElementById('inputTitle').value = '';
  document.getElementById('inputAuth').value = '';
  document.getElementById('inputPrice').value = '';
}

//----------------------------------------------------------------------------------------//

// 체크박스 버튼

chkAll.addEventListener('change', checkAll);

// Delete 버튼
// btnDel.addEventListener('click', () => {
  
// })

// Add book 버튼
btnAdd.addEventListener('click', () => { addBtn(); });

// Cancel 버튼
btnCancel.addEventListener('click', () => { cancelBtn(); });


// 체크박스 참고
// document.getElementById('chkAll').addEventListener('change', (e) => {
//   [...document.querySelectorAll('.chk')].map(el => {
//     el.checked = e.target.checked;
//   });
// });