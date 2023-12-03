import { React } from 'react';
const NumButton = (props) => {
//     const getVal = (e) => {
//         console.log(e.target.innerHTML);
//    }
    if (props.value == "=") {
        return (
          
        
            <button className={props.symbols } onClick={(e)=>{props.res(e)}}> {props.value}</button>
        )
    }
if (props.value == "CE"){
    return (
        <button className={props.symbols } onClick={()=>{ props.res()}} > {props.value}</button>
    )
    
}
        return (
            <button className={props.symbols } onClick={(e)=>{ props.res(e)}} > {props.value}</button>
        )
    

    // return (
    //     <>
    //         {/* <button className={props.symbols} >{props.value}</button> */}
    //         <button className={props.symbols } onClick={(e)=>{ props.value != "=" props.res(e)}} > {props.value}</button>
            
    //     </> 
        
    // )
    
}
export default NumButton;