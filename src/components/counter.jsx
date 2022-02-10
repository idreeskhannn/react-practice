import React,{useState} from "react";


const Count =_=>{
    // const state = useState()
    // let count = 1

    let [currentCount , setCount] =useState(1)
    const inc =_=>{
        // console.log(`click ${count++}`)
        // console.log(state)
        setCount(currentCount + 1)
        // console.log(Count)
        
    }
    
//     let [currentDecre,updatDec] = useState("")
// const dec =_=>{
//     console.log(currentDecre)
//     updatDec(currentCount-1)
// }
    return(
<>
<div className="bt">
<h1>{currentCount}</h1>

<button onClick={inc}>Increment</button>
{/* <button onClick={dec}> decremnet</button> */}
    
</div>
</>

    )
}
export default Count