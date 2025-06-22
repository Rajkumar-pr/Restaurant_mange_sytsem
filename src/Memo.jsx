
import React,{ueState,useMemo} from "react";

function Memo(){
    const [count,setCount]=useState(0);
    const [data,setData]=useState(1);
    const [double,setDouble]=useState(1);
    const handleChange=(e)=>{
        setData(e.target.value);
        setDouble(2*data);

    }
    return(
        useMemo()
        <div>
increase <button onClick={setCount((prev)=>(prev+1))}>
Add 1
</button>
count is:{count}
Double of data is 
<input type="text" value={data} onChange={handleChange}/>

        </div>
    )
            }
