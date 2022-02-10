import {button} from "react-bootstrap"
import { useState } from "react";
import pic1 from "../image/pic1.png"
import pic2 from "../image/pic2.png"

const Blb=_=>{
    let [on ,off] = useState(true)
    let[txt ,setTxt]= useState(true)

    let toggle=_=>{
        off(!on)
        setTxt(!txt)
    }
    return(
<>
<div className="imG" >
<h1>bulb</h1>
 <img src={on ? pic2 :pic1}  onClick={toggle} alt="" />
 <br/>
 
      <button className="btn btn-info" onClick={toggle}>{txt ?"on" :"off"}</button>
</div>

</>
    )
}
export default Blb