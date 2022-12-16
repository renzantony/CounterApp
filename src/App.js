import Counter from "./Counter"
import {useState} from 'react'
function App() {
  const[state,setState]=useState(false)
  return (
    <div className="App">
      <h1 onClick={()=>setState(!state)}>Show/Hide</h1>
      {
      /* state=false
      !state=true
      setState(true)
      state=true */}
      { state ? <Counter/>: null }  
    </div>
  );
}

export default App;
