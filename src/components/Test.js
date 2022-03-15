import React, { useEffect, useState } from 'react'

export default function Test() {
  //         const [count, setCount] = useState(0);

  // useEffect(()=>{setTimeout(()=>{setCount(count+1),1000})})
  // // useEffect(()=>{setTimeout(()=>{setCount((count)=>count + 1);},1000);});
  const [count, setCount] = useState(0);

  useEffect(() => { setTimeout(() => { setCount(count + 1) }, 1000) }, [count]);


  return (
    <div>
      {count}
      {/* hello there */}
    </div>
  )
}
//const vrr=()=>setCount((count) => count + 1);