var chk1 = document.querySelectorAll('.chk1');
var chk2 = document.querySelectorAll('.chk2');
var chkBtn1 = document.getElementById('chkBtn1');
var chkBtn2 = document.getElementById('chkBtn2');
var chkTog1 = document.getElementById('chkToggle1');
var chkTog2 = document.getElementById('chkToggle2');

// checked 된 체크박스 갯수 세기
function chkButton(chk) {
  var chkCnt = 0;
  for (var i = 0; i < chk.length; i++) {
    if (chk[i].checked) {
      chkCnt++;
    }
  }
  alert('체크된 수 : ' + chkCnt + '개');
}
  // 전체 체크박스 토글기능
var flag = false;
function chkToggle(chk) {
  if (flag === false) {
    for (var i = 0; i < chk.length; i++) {
      chk[i].checked = true;
    }
    return flag = true;
  }
  
  if (flag === true) {
    for (var k = 0; k < chk.length; k++) {
      chk[k].checked = false;
    }
    return flag = false;
  }
}
chkBtn.addEventListener('click', function(){ chkButton(chk1) });
chkTog1.addEventListener('click', function(){ chkToggle(chk1) });
chkTog2.addEventListener('click', function(){ chkToggle(chk2) });
