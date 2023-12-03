import { React } from "react";
import NumButton from "./NumButton";
const Symbols = (props) => {
    return (
        <div className="symb">
            <NumButton value="+" symbols = "btn2" res = {props.result.getUserInputNumberAndOperator} /> 
            <NumButton value="-" symbols = "btn2" res = {props.result.getUserInputNumberAndOperator}/>
            <NumButton value="/" symbols = "btn2" res = {props.result.getUserInputNumberAndOperator}/>
            <NumButton  value="*" symbols = "btn2" res = {props.result.getUserInputNumberAndOperator}/>
            <NumButton  value="=" symbols = "btn2" res={props.result.getUserInputNumberAndOperator} />
            <NumButton  value="CE" symbols = "btn2" res = {props.result.clear_the_screen}/>
            
      </div> 
    )

}
export default Symbols;