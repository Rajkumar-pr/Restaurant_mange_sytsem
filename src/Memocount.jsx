<<<<<<< HEAD
import React from 'react'
import ChildComp from './ChildComp'

function Memocount() {
  const[count,setCount]=useState(0);
  return (
    <div>
      <ChildComp name="Ajinkya"/>
<button onClick={()=>setCount(count+1)}>Incre,ment</button>
    </div>
  )
}

export default Memocount
=======
import React from 'react'
import ChildComp from './ChildComp'

function Memocount() {
  const[count,setCount]=useState(0);
  return (
    <div>
      <ChildComp name="Ajinkya"/>
<button onClick={()=>setCount(count+1)}>Incre,ment</button>
    </div>
  )
}

export default Memocount
>>>>>>> b2923ed75085a17916702d9fd8ef0d4092383c4b
