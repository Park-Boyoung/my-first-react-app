import dogImg from "../img/dog.jpeg";
import React, { Component } from "react";

// 클래스형 컴포넌트
class ImgComponent extends Component {
  render() {
    return (
      <div>
        <img src={dogImg} alt="강아지" />
      </div>
    );
  }
}

// 함수형 컴포넌트
// function ImgComponent() {
//   return (
//     <div>
//       <img src={dogImg} alt="강아지" />
//     </div>
//   );
// }

export default ImgComponent;
