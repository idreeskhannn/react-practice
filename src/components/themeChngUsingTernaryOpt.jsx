
import { useState } from "react";


const Ternary=_=>{
let [color ,setColor]=useState(true)


return(
    <div className="ter" style={{backgroundColor  :color ? "white" :"black" ,color :color ?"black":"white" }}>
    
    <h1>Using Ternary Operator</h1>
<button style={{margin : "1px"}} onClick={()=>setColor(!color) } >Theme Change</button>
</div>


    )
}
export default Ternary