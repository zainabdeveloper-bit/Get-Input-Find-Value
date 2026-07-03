import React, {useState} from "react";
function GetInputFieldValue(){
    const [data, setdata]=useState(null)
     const [print, setPrint]=useState(false)
    function getValue(val){
        // console.log(val.target.value)
        setdata(val.target.value)
        setPrint(false);
    }
    return(
        <div>
            {
            print ?
            <h2>{data}</h2>
            : null }
            {/* <h2>{data}</h2> */}
            <input type="text" onChange={getValue}></input>
            <button onClick={()=>setPrint(true)}>Display value</button>

        </div>
    )
}
export default GetInputFieldValue;