import { React } from "react";
import NumButton from "./NumButton";
const Number = (props) => {
    return (
        <div id="num1">
            <div className="row" > 
                <NumButton  value={7} symbols = "btn1" res = {props.result} />
                <NumButton value={8} symbols = "btn1" res = {props.result}/>
                <NumButton  value={9} symbols = "btn1" res = {props.result}/>
            </div>
            <div className="row">
                <NumButton  value={4} symbols = "btn1"res = {props.result}/>
                <NumButton value={5} symbols = "btn1" res = {props.result}/>
                <NumButton  value={6} symbols = "btn1"res = {props.result}/>
            </div>
            <div className="row">
                <NumButton value={1} symbols = "btn1"res = {props.result}/>
                <NumButton value={2} symbols = "btn1"res = {props.result}/>
                <NumButton value={3} symbols = "btn1"res = {props.result}/>
            </div>
            <div className="row">
                <NumButton  value={0} symbols = "btn1"res = {props.result}/>
            </div>
        </div>
    )
}
export default Number;