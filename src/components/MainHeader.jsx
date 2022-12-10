import React, { Component } from "react";

// 클래스형 컴포넌트
// class MainHeader extends Component {
//   render() {
//     return <h1>Hello, Component World!</h1>;
//   }
// }

// 함수형 컴포넌트
// function MainHeader() {
//   return <h1>Hello, Component world!</h1>;
// }

/* props */
// 함수형 컴포넌트
function MainHeader({ text, href, userID }) {
  return (
    <div>
      <h1>{userID}님 반갑습니다</h1>
      <a href={href}>{text}</a>
    </div>
  );
}

export default MainHeader;
