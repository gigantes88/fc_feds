import React from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

// // Link to 사용법
// const Menu = () => {
//   return (
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/about/foo">About Foo</Link></li>
//         <li><Link to="/posts">Posts</Link></li>
//       </ul>
//       <hr/>
//     </div>
//   );
// };

// // NavLink 컴포넌트는 Link 랑 비슷한데요, 만약에 설정한 URL 이 활성화가 되면, 특정 스타일 혹은 클래스를 지정 할 수 있습니다.
const Menu = () => {
  const activeStyle = {
    color: 'green',
    fontSize: '2rem',
  }
  return (
    <div>
      <ul>
        <li><NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink></li>
        <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
        <li><NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>
        <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
      </ul>
      <hr />
    </div>
  );
}

export default Menu;
