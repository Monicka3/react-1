import { useState } from "react";

function Count() {
  const [stext,setstext]=useState(true)
  let myStr="Reusable components: Components are the building blocks of any React application, and a single app usually consists of multiple components. These components have their logic and controls, and they can be reused throughout the application, which in turn dramatically reduces the application’s development time."
  return (
    <div>
     <p>{stext ? myStr.slice(0,50)+'...': myStr}</p>
     <button onClick={()=>setstext(!stext)}>{stext?'Show More':'Show Less'}</button>
    </div>
  );
}

export default Count;
