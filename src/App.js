import react, { useState } from "react"
import "./index.css"
const App = _ => {
  const [myStyle, setStyle] = useState({
    color: 'black',
    backgroundColor: "white",
    // width : "100%",
    // height : "500px"
  })
  const [btn, setBtn] = useState("Dark Mood")
  const change = _ => {
    if (myStyle.color == "black") {
      setStyle({
        color: 'white',
        backgroundColor: "black"
      })
      setBtn("light Mood")
    }
    else {
            
      setStyle({
        color: 'black',
        backgroundColor: "white"
      })
      setBtn("dark Mood")
    }
    }
  return (
    <>
      <div style={myStyle} className="main">

        <button onClick={change} >{btn}</button>
      </div>
    </>
  );
}

export default App;
