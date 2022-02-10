import React,{useState} from "react";


const Theme =_=>{
    const [myStyle, setStyle] = useState({
        color: 'black',
        backgroundColor: "white",
        // width : "100%",
        // height : "500px"
      })
      const [btn, setBtn] = useState("Dark Mood")
      const change = _ => {
        if (myStyle.color === "black") {
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

    return(
        <>
        <div style={myStyle} className="main">
  <h1>Using if condition</h1>
          <button onClick={change} style={{margin:"10px"}}>{btn}</button>
        </div>
      </>
    )
}

export default Theme