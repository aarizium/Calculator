import Outercontainer from "./Outercontainer";
import Inputs from "./Inputs";
import Buttoncontainer from "./Buttoncontainer";
import { useState } from "react";
function App() {
  let buttons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "*",
    "/",
    "%",
    ".",
    "=",
    "C",
  ];
  let [value, setvalue] = useState("");

  let calculate = (event) => {
    let buttonchosen = event.target.innerText;
    if (buttonchosen === "=") {
      setvalue(eval(value));
    } else if (buttonchosen === "C") {
      setvalue("");
    } else {
      let newvalue = value + buttonchosen;
      setvalue(newvalue);
    }
  };
  return (
    <>
      <Outercontainer>
        <Inputs result={value} />
        <Buttoncontainer buttons={buttons} calculate={calculate} />
      </Outercontainer>
    </>
  );
}

export default App;
