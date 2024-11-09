import { useState } from "react";

function Count() {
  const [count,setcount]=useState(0)
  return (
    <div>
      Hii,today we are going to see howmany times you clicked the button!<br/>
      <button onClick={()=>setcount(count+1)}>Click me!</button><br/>
      {count}<br/>
      {count>10?<span>Stop playing with my button!!</span>:""}

    </div>
  );
}

export default Count;
