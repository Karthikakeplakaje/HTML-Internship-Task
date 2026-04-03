import React from "react"
const child = (props)=>{
    
    return(
        <>
        <h1>{props.data}</h1>
        <img height ={100}src={props.pic} />
        </>
    )
}
export default child