import react from "react"
import Blb from "./components/Bulb";
import Count from "./components/counter";
import Theme from "./components/themeChange";   
import Ternary from "./components/themeChngUsingTernaryOpt";
import "./index.css"
const App = _ => {

  return (
    <>
<Theme />  
<Ternary />
<Blb />
<Count /> 
    </>
  );
}

export default App;
