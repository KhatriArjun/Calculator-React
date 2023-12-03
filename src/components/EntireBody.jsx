import { React, useState } from "react";
import '../calculator/body.css'
import Number from './Number.jsx';
import Symbols from "./Symbols";

const EntireBody = () => {
    let tempStr = ""
    let [finalArr, setFinalArr] = useState([])
    let [emptStr, setEmptStr] = useState('')
    let [tempnum, setTempnum] = useState('')
    let stack = []
    let expression = []
    const [finalresult,setfinalresult]=useState()


    const getUserInputNumberAndOperator = (e) => {
        let number_OR_operator = e.target.innerText
        if (!(number_OR_operator == "=")) {
            tempStr += number_OR_operator
            setEmptStr([...emptStr, tempStr])
        }
        breakme:
        {
            if (finalArr.length == 0 && (number_OR_operator == "/" || number_OR_operator == "*") && (emptStr = "")) {
                alert("syntax error")
                setEmptStr('')
            }
            else if (number_OR_operator == "/" || number_OR_operator == "*" || number_OR_operator == "-" || number_OR_operator == "+" || number_OR_operator == "=") {
                let tempvalue = parseInt(tempnum, 10)
                finalArr.push(tempvalue)
                setFinalArr([...finalArr])
                tempvalue = null
                setTempnum('')

                let tempsymbol = emptStr[(emptStr.length) - 1]
                if (tempsymbol == "+" || tempsymbol == "-" || tempsymbol == "*" || tempsymbol == "/") {
                    alert("two symbols in row")
                    setEmptStr('')
                    setFinalArr([])
                    break breakme

                }
                if (!(number_OR_operator == "=")) {
                    finalArr.push(number_OR_operator)
                    setFinalArr([...finalArr])

                }
                console.log(finalArr)
            }
        }
        if (!(number_OR_operator == "/" || number_OR_operator == "*" || number_OR_operator == "-" || number_OR_operator == "+"))
            getnumber(number_OR_operator)


        if (number_OR_operator == "=") {
            finalArr.forEach(
                (value) => {
                    let i = stack.length
                    if (!(value == "/" || value == "*" || value == "+" || value == "-")) {
                        expression.push(value)

                    }
                    else {
                        if (stack.length == 0) {
                            stack.push(value)

                        }
                        else if (value == "/") {

                            if (stack[(stack.length) - 1] == "+" || stack[(stack.length) - 1] == "-") {
                                stack.push(value)

                            }
                            else {
                                expression.push(stack[(stack.length) - 1])
                                stack.pop()

                                stack.push(value)

                            }

                        }
                        else if (value == "*") {

                            if (stack[(stack.length) - 1] == "+" || stack[(stack.length) - 1] == "-") {
                                stack.push(value)

                            }
                            else {
                                expression.push(stack[(stack.length) - 1])
                                stack.pop()

                                stack.push(value)

                            }


                        }
                        else if (value == "+") {
                            for (i = 0; i <= stack.length; i++) {
                                if (stack[(stack.length) - 1] == "*" || stack[(stack.length) - 1] == "/") {
                                    expression.push(stack[(stack.length) - 1])
                                    stack.pop()


                                }
                                else if (stack[(stack.length) - 1] == "-") {
                                    expression.push(stack[(stack.length) - 1])
                                    stack.pop()


                                }
                            }
                            stack.push(value)
                        }
                        else if (value == "-") {
                            for (i = 0; i <= stack.length; i++) {
                                if (stack[(stack.length) - 1] == "*" || stack[(stack.length) - 1] == "/") {
                                    expression.push(stack[(stack.length) - 1])
                                    stack.pop()


                                }
                                else if (stack[(stack.length) - 1] == "+") {
                                    expression.push(stack[(stack.length) - 1])
                                    stack.pop()


                                }

                            }
                            stack.push(value)
                        }

                    }

                }

            )
            while ((stack.length) != 0) {
                expression.push(stack[(stack.length) - 1])
                stack.pop()


            }
            console.log(expression)
            // console.log(stack)
            expression.forEach((val) => {
                if (!(val == "/" || val == "*" || val == "-" || val == "+")) {
                    stack.push(val)
                }
                else {
                    let a = stack[(stack.length) - 1]
                    stack.pop()
                    let b = stack[(stack.length) - 1]
                    stack.pop()
                    let output
                    if (val == "/") {
                        output=b/a
                        stack.push(output)
                    }
                    else if (val == "*") {
                        output=b*a
                        stack.push(output)
                    }
                    else if (val == "+") {
                        output=b+a
                        stack.push(output)
                    }
                    else if (val == "-") {
                        output=b-a
                        stack.push(output)
                    }
                }
            })
            // console.log(stack[(stack.length) - 1])
            setfinalresult(stack[(stack.length) - 1])
        }
    }
    const getnumber = (number1) => {

        setTempnum(tempnum += number1)


    }



    const clear_the_screen = () => {
        setEmptStr('')
        setFinalArr([])
        stack=[]

    }





    return (
        <div id="mainframe">
            {/* <Screen value={val} /> */}
            <div id="screen1">
                <h3 id="result">  {emptStr}   </h3>
                <h4 id="output">{finalresult}</h4>

            </div>
            <div id="subframe">
                <Number result={getUserInputNumberAndOperator} />
                <Symbols result={{ getUserInputNumberAndOperator, clear_the_screen }} />
            </div>
        </div>
    )
}
export default EntireBody;
