import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function UsingUseMemo() {
  const [number, setNumber] = useState(0);
  const [isKorea, setisKorea] = useState(true);

  const location = useMemo(() => {
    return {
      where: isKorea ? "한국" : "외국",
    };
  }, [isKorea]);

  useEffect(() => {
    console.log("✨ useEffect 호출");
  }, [location]);
  return (
    <>
      <h1>숫자 증감</h1>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} />
      <br />
      <h1>Where are you?</h1>
      <h2>위치 : {location.where}</h2>
      <button onClick={() => setisKorea(!isKorea)}>나라 변경</button>
    </>
  );
}
