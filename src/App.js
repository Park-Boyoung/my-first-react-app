// import logo from "./logo.svg";
// import { useState } from "react";
import "./App.css";

import MainHeader from "./components/MainHeader";
import Counter from "./components/Counter";
import ImgComponent from "./components/ImgComponent";
import BtnToNaver from "./components/BtnToNaver";
import ClassState from "./components/ClassState";
import FunctionalState from "./components/FunctionalState";
import ClassProps from "./components/ClassProps";
import CustomList from "./components/Customlist";
import CustomObj from "./components/CustomObj";
import ChangeObj from "./components/ChangeObj";
import Comparing from "./components/Comparing";
import TestRef from "./components/TestRef";
import ChangeFocus from "./components/ChangeFocus";
import RefDOM from "./components/RefDOM";
import RandomQuiz from "./components/RandomQuiz";
import ReactFragment from "./components/ReactFragment";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  // const nameArr = ["뽀로로", "루피", "크롱"];

  // const pororoObj = {
  //   name: "뽀로로",
  //   age: 5,
  //   nickName: "사고뭉치",
  // };
  // const pororoObjArr = [
  //   {
  //     name: "뽀로로",
  //     age: "5",
  //     nickName: "사고뭉치",
  //   },
  //   {
  //     name: "루피",
  //     age: "4",
  //     nickName: "공주님",
  //   },
  //   {
  //     name: "크롱이",
  //     age: "5",
  //     nickName: "장난꾸러기",
  //   },
  // ];

  return (
    <div className="App">
      {/* <MainHeader text="Hello, props world!" /> */}
      {/* <MainHeader text="Hello, costom world!" /> */}
      {/* <MainHeader text="안녕하세요." /> */}
      {/* <MainHeader text="GO, NAVER" href="https://naver.com" userID="boyoung" /> */}
      {/* <Counter /> */}
      <br />
      {/* <ImgComponent /> */}
      <br />
      {/* <BtnToNaver /> */}
      {/* <ClassState /> */}
      {/* <FunctionalState /> */}
      {/* <ClassProps name="박보영" age={29} nickName="bboyomi" /> */}
      {/* <CustomList arr={nameArr} /> */}
      {/* <CustomObj obj={pororoObj} /> */}
      {/* <ChangeObj objArr={pororoObjArr} /> */}
      {/* <Comparing /> */}
      {/* <TestRef /> */}
      {/* <ChangeFocus /> */}
      {/* <RefDOM /> */}
      {/* <RandomQuiz /> */}
      <ReactFragment />
    </div>
  );
}
export default App;
