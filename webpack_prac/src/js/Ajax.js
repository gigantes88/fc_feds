export default class Ajax {
  static get(url) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('GET', url);
      req.send();

      req.onreadystatechange = function () {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) resolve(req.response);
          else reject(req.statusText);
        }
      };
    });
  }

  static post(url, data) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('POST', url);
      // 서버로 전송하는 데이터의 mime type 설정
      req.setRequestHeader('Content-type', 'application/json');
      req.send(JSON.stringify(data));
      // req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      // // escaping untrusted data
      // req.send(Object.keys(data).map(key => `${key}=${encodeURIComponent(data[key])}`).join('&'));

      req.onreadystatechange = function () {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) resolve(req.response);
          else reject(req.statusText);
        }
      };
    });
  }

  static put(url, id, data) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('PUT', `${url}/${id}`);
      // 서버로 전송하는 데이터의 mime type 설정
      req.setRequestHeader('Content-type', 'application/json');
      req.send(JSON.stringify(data));

      req.onreadystatechange = function () {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) resolve(req.response);
          else reject(req.statusText);
        }
      };
    });
  }

  static delete(url, id) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('DELETE', `${url}/${id}`);
      req.send();

      req.onreadystatechange = function () {
        if (req.readyState === XMLHttpRequest.DONE) {
          if (req.status === 200) resolve(req.response);
          else reject(req.statusText);
        }
      };
    });
  }
}

let btnGet = document.querySelector('#btnGet');
let btnPost = document.querySelector('#btnPost');
let btnPut = document.querySelector('#btnPut');
let btnDel = document.querySelector('#btnDel');
let contents = document.querySelector('.contents');

// 리스트 가져오기
btnGet.addEventListener('click', () => {
  const userid = document.querySelector('#userid').value;
  Ajax.get(`/users/${userid}`)
  .then(res => {
    let users = JSON.stringify(JSON.parse(res), null, 2);
    contents.innerHTML = users;
  })
  .catch((e) => console.log(e));
});

// 등록하기
btnPost.addEventListener('click', () => {
  contents.innerHTML = '';
  const userid = document.querySelector('#userid').value;

  if (!userid && !password) {
    return alert('userid와 password를 입력하세요');
  }
  const password = document.querySelector('#password').value;
  const firstname = document.querySelector('#firstname').value;
  const lastname = document.querySelector('#lastname').value;


  Ajax.post('/users', { userid, password, firstname, lastname })
    .then( res => {
      let users = JSON.stringify(JSON.parse(res), null, 2);
      contents.innerHTML = users;
    });
});

// 수정하기
btnPut.addEventListener('click', () => {
  contents.innerHTML = '';
  
  const userid = document.querySelector('#userid').value;
  const password = document.querySelector('#password').value;
  const firstname = document.querySelector('#firstname').value;
  const lastname = document.querySelector('#lastname').value;

  const data = {
    "userid": userid,
    "password": password,
    "firstname": firstname,
    "lastname": lastname
  };

  Ajax.put('/users', `${userid}`, data )
    .then( res => {
      contents.innerHTML = res;
    });
});

// 삭제하기
btnPut.addEventListener('click', () => {
  contents.innerHTML = '';
  
  const userid = document.querySelector('#userid').value;
  const password = document.querySelector('#password').value;
  const firstname = document.querySelector('#firstname').value;
  const lastname = document.querySelector('#lastname').value;

  const data = {
    "userid": userid,
    "password": password,
    "firstname": firstname,
    "lastname": lastname
  };

  Ajax.put('/users', `${userid}`, data )
    .then( res => {
      contents.innerHTML = res;
    });
});