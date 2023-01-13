import React, {useState} from "react";

function Toggle() {
  const [isOn, setisOn]= useState(false)
  
  
  function handleSwitch(){
    setisOn(isOn=> isOn = !isOn)
  }

  return <button style={{ background: "#e25822" }} onClick={handleSwitch}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
