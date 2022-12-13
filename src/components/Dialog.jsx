// import React from "react";

// export default function Dialog(props) {
//   return (
//     <div style={typeof props.color !== "undefined" ? { backgroundColor: props.color } : { backgroundColor: "black" }}>
//       {typeof props.title === "string" ? <h1>{props.title}</h1> : props.title}
//       <p>{props.message}</p>
//       {typeof props.color !== "undefined" ? null : alert("색상값이 들어오지않았습니다.")}
//       {props.children}
//     </div>
//   );
// }

import React from "react";

export default function Dialog(props) {
  return (
    <div style={props.color ? { backgroundColor: props.color } : { backgroundColor: "pink" }}>
      {typeof props.title === "string" ? <h1>{props.title}</h1> : props.title}
      <p>{props.message}</p>
      {props.children}
      {props.color ? "" : alert("색상값이 들어오지 않았습니다.")}
    </div>
  );
}
