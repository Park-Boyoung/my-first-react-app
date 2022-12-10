import React, { Component } from "react";

// 클래스형 컴포넌트
class BtnToNaver extends Component {
  render() {
    return (
      <div>
        <a href="https://naver.com">네이버로 이동</a>
      </div>
    );
  }
}

// 함수형 컴포넌트
// function BtnToNaver() {
//   return (
//     <div>
//       <a href="https://naver.com">네이버로 이동</a>
//     </div>
//   );
// }

export default BtnToNaver;
