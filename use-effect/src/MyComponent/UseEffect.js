import { useEffect,useState } from 'react';
function UseEffect() {
  
    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(111);
    let normal=888;
    console.log("Outsode the function")
    useEffect(()=>{
      console.log("Hello");
      console.log(count+normal);
      console.log(count1);

      console.log("hcbsjcb",normal)
    },[count],[normal]);
    function norma()
    {
        normal=normal+1;
        console.log("Normal ke ander");
    }
    return (
    <div >
      <h1>Hello To using use Effect in hooks {count}....</h1>
      <button onClick={()=>{setCount(count+1)}}>Start</button>
      <button onClick={()=>norma()}>Normal</button>
    </div>
  );
    
  }
  export default UseEffect