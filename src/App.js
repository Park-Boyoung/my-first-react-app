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
import TableColumn from "./components/TableColumn";
import ConditionalRender from "./components/ConditionalRender";
import { useEffect, useRef, useState } from "react";
import ConditionalRender2 from "./components/ConditionalRender2";
import PracticeOne from "./components/PracticeOne";
import PracticeTwo from "./components/PracticeTwo";
import TestUseEffect from "./components/TestUseEffect";
import Timer from "./components/Timer";
import PracticeTimer from "./components/PracticeTimer";
import UseEffectFetch from "./components/UseEffectFetch";
import UsingUseMemo from "./components/UsingUseMemo";
import TestinlineCSS from "./components/TestinlineCSS";
import TestCssFile from "./components/TestCssFile";
import TestStyled from "./components/TestStyled";
import AppLogoSpin from "./components/AppLogoSpin";
import logo from "./logo.svg";
import Images from "./components/Images";
import Dialog from "./components/Dialog";
import WelcomeDialog from "./components/WelcomeDialog";
import FanctBorder from "./components/FancyBorder";
import SignUpDialog from "./components/SignUpDialog";
import FancyBorder from "./components/FancyBorder";

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

  // const [condition, setCondition] = useState("1번");
  // const onChange = () => {
  //   condition === "1번" ? setCondition("2번") : setCondition("1번");
  // };

  // const [practice, setPractice] = useState("1번");
  // const onChange = () => {
  //   practice === "1번" ? setPractice("2번") : setPractice("1번");
  // };

  // const [show, setShow] = useState(false);
  // const buttonEl = useRef();

  // useEffect(() => {
  //   buttonEl.current.focus();
  // }, []);

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
      {/* <ReactFragment /> */}
      {/* <h1>안녕하세요!</h1>
      <span>반갑습니다!</span> */}

      {/* <table border="1">
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <TableColumn />
          </tr>
        </tbody>
      </table> */}

      {/* {condition !== "1번" ? <ConditionalRender /> : <ConditionalRender2 />}
      <button onClick={onChange}>{condition}</button> */}

      {/* {practice === "1번" ? <PracticeOne text="1번" /> : <PracticeTwo text="2번" />}
      <button onClick={onChange}>{practice}</button> */}

      {/* <TestUseEffect /> */}

      {/* {show && <Timer />}
      <button onClick={() => setShow(!show)}>버튼</button> */}

      {/* {show && <PracticeTimer />}
      <button onClick={() => setShow(!show)} ref={buttonEl}>
        {show ? "숨기기" : "보이기"}
      </button> */}

      {/* <UseEffectFetch /> */}

      {/* <UsingUseMemo /> */}
      {/* <TestinlineCSS /> */}
      {/* <TestCssFile /> */}
      {/* <TestStyled /> */}
      {/* <AppLogoSpin /> */}

      {/* <Images /> */}
      {/* <>
        <Dialog color="orange" title="Welcome to summoner's lift" message="소환사의 협곡에 오신 것을 환영합니다." />
      </> */}
      {/* <WelcomeDialog /> */}
      {/* <FanctBorder color="blue">
        <h1>Hello, props.children</h1>
        <h1>Hello, props.children</h1>
        <p>이건 매우 유용합니다.</p>
        <WelcomeDialog />
      </FanctBorder> */}
      {/* <SignUpDialog /> */}
      {/* <FancyBorder color="red">
        <SignUpDialog />
      </FancyBorder> */}
      {/* <FancyBorder color="red">
        <Dialog
          color="orange"
          title={<button onClick={() => alert("Welcome!")}>웰컴 버튼!</button>}
          message="회원 가입이 필요한 서비스 입니다"
        >
          <Comparing />
          <a href="#">회원 가입 페이지로 이동</a>
        </Dialog>
      </FancyBorder> */}

      <Dialog
        // color="skyblue"
        title={<button onClick={() => alert("Welcome!")}>웰컴 버튼!</button>}
        message="회원 가입이 필요한 서비스 입니다"
      ></Dialog>
    </div>
  );
}
export default App;
