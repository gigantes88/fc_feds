import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'shared/App';

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// return 을 안쓰면 () 만 써도 된다.
// return 을 쓰면 {} 써야한다.
// const Root = () => {
//   return (
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   )
// }


export default Root;
