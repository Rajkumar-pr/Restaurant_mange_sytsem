
import React,{useState,useEffect,useRef} from 'react'

const ChildComp=(props)=>{

    const val=useRef(0);
    useEffect(()=>{
        val.current+=1;
    })
  return (
    <div>
      value is:{val.current}
      name is :{props.name}
    </div>
  )
}

export default ChildComp

