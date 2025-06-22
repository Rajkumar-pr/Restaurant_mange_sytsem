<<<<<<< HEAD
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
=======
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
>>>>>>> b2923ed75085a17916702d9fd8ef0d4092383c4b
