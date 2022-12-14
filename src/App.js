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
  // const nameArr = ["?????????", "??????", "??????"];

  // const pororoObj = {
  //   name: "?????????",
  //   age: 5,
  //   nickName: "????????????",
  // };
  // const pororoObjArr = [
  //   {
  //     name: "?????????",
  //     age: "5",
  //     nickName: "????????????",
  //   },
  //   {
  //     name: "??????",
  //     age: "4",
  //     nickName: "?????????",
  //   },
  //   {
  //     name: "?????????",
  //     age: "5",
  //     nickName: "???????????????",
  //   },
  // ];

  // const [condition, setCondition] = useState("1???");
  // const onChange = () => {
  //   condition === "1???" ? setCondition("2???") : setCondition("1???");
  // };

  // const [practice, setPractice] = useState("1???");
  // const onChange = () => {
  //   practice === "1???" ? setPractice("2???") : setPractice("1???");
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
      {/* <MainHeader text="???????????????." /> */}
      {/* <MainHeader text="GO, NAVER" href="https://naver.com" userID="boyoung" /> */}
      {/* <Counter /> */}
      <br />
      {/* <ImgComponent /> */}
      <br />
      {/* <BtnToNaver /> */}
      {/* <ClassState /> */}
      {/* <FunctionalState /> */}
      {/* <ClassProps name="?????????" age={29} nickName="bboyomi" /> */}
      {/* <CustomList arr={nameArr} /> */}
      {/* <CustomObj obj={pororoObj} /> */}
      {/* <ChangeObj objArr={pororoObjArr} /> */}
      {/* <Comparing /> */}
      {/* <TestRef /> */}
      {/* <ChangeFocus /> */}
      {/* <RefDOM /> */}
      {/* <RandomQuiz /> */}
      {/* <ReactFragment /> */}
      {/* <h1>???????????????!</h1>
      <span>???????????????!</span> */}

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

      {/* {condition !== "1???" ? <ConditionalRender /> : <ConditionalRender2 />}
      <button onClick={onChange}>{condition}</button> */}

      {/* {practice === "1???" ? <PracticeOne text="1???" /> : <PracticeTwo text="2???" />}
      <button onClick={onChange}>{practice}</button> */}

      {/* <TestUseEffect /> */}

      {/* {show && <Timer />}
      <button onClick={() => setShow(!show)}>??????</button> */}

      {/* {show && <PracticeTimer />}
      <button onClick={() => setShow(!show)} ref={buttonEl}>
        {show ? "?????????" : "?????????"}
      </button> */}

      {/* <UseEffectFetch /> */}

      {/* <UsingUseMemo /> */}
      {/* <TestinlineCSS /> */}
      {/* <TestCssFile /> */}
      {/* <TestStyled /> */}
      {/* <AppLogoSpin /> */}

      {/* <Images /> */}
      {/* <>
        <Dialog color="orange" title="Welcome to summoner's lift" message="???????????? ????????? ?????? ?????? ???????????????." />
      </> */}
      {/* <WelcomeDialog /> */}
      {/* <FanctBorder color="blue">
        <h1>Hello, props.children</h1>
        <h1>Hello, props.children</h1>
        <p>?????? ?????? ???????????????.</p>
        <WelcomeDialog />
      </FanctBorder> */}
      {/* <SignUpDialog /> */}
      {/* <FancyBorder color="red">
        <SignUpDialog />
      </FancyBorder> */}
      {/* <FancyBorder color="red">
        <Dialog
          color="orange"
          title={<button onClick={() => alert("Welcome!")}>?????? ??????!</button>}
          message="?????? ????????? ????????? ????????? ?????????"
        >
          <Comparing />
          <a href="#">?????? ?????? ???????????? ??????</a>
        </Dialog>
      </FancyBorder> */}

      <Dialog
        // color="skyblue"
        title={<button onClick={() => alert("Welcome!")}>?????? ??????!</button>}
        message="?????? ????????? ????????? ????????? ?????????"
      ></Dialog>
    </div>
  );
}
export default App;
