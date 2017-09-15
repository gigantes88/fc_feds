(function() {
  function render(data) {
    const json = JSON.parse(data);
    document.querySelector('#app-root').innerHTML = `
    <h1>${json.title}</h1>
    <p>${json.content}</p>
    `
  }

  function get(url) {
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

  const route = {
    '': function () {
      
    },
    'home': function (){
      
    }
  }

  function router() {
    const hash = location.hash.replace('#', '');

  }

  
})();
