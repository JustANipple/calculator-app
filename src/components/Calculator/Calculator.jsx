import { useState } from "react"
import styles from "./Calculator.module.css"
import PropTypes from 'prop-types'

const Calculator = () => {

    const [currentNum, setCurrentNum] = useState(0);
    const [prevNum, setPrevNum] = useState(0);
    const [operation, setOperation] = useState("");

    function Display() {
        return (
            <div className={styles.display}> 
                <p className={styles.display_txt}>{currentNum}</p> 
            </div>
        )
    }

    function Key({ value }) {
        //number key event
        function handleKeyClick() {
            if(currentNum.toString().length < 12) {
                if(currentNum === 0) {
                    setCurrentNum(value);
                } else {
                    setCurrentNum(`${currentNum}${value}`);
                }
            }
        }
        //delete key event
        function handleDelClick() {
            if(currentNum.length > 1) {
                setCurrentNum(currentNum.toString().slice(0, currentNum.length - 1));
            } else {
                setCurrentNum(0);
                setOperation("");
            }
        }
        //reset key event
        function handleResetClick() {
            setCurrentNum(0);
            setOperation("");
        }
        //dot key event
        function handleDotClick() {
            if(!currentNum.toString().includes(".")) {
                setCurrentNum(`${currentNum}${value}`)
            }
        }
        //operation key event
        function handleOperationClick(value) {
            setPrevNum(Number(currentNum));
            switch(value) {
                case "+":
                    setOperation("+");
                    break;
                case "-":
                    setOperation("-");
                    break;
                case "x":
                    setOperation("*");
                    break;
                case "/":
                    setOperation("/");
                    break;
            }
            if(currentNum !== 0 && prevNum !== 0 && operation !== "") {
                makeOperation();
            }
            setCurrentNum(0);
        }

        function makeOperation() {
            let result = 0;
            switch(operation) {
                case "+":
                    result = prevNum + currentNum;
                    break;
                case "-":
                    result = prevNum - currentNum;
                    break;
                case "*":
                    result = prevNum * currentNum;
                    break;
                case "/":
                    result = prevNum / currentNum;
                    break;
            }
            setPrevNum(result);
            setCurrentNum(0);
        }

        //result key event
        function handleResultClick() {
            let result = 0;
            switch(operation) {
                case "+":
                    result = prevNum + Number(currentNum);
                    break;
                case "-":
                    result = prevNum - Number(currentNum);
                    break;
                case "*":
                    result = prevNum * Number(currentNum);
                    break;
                case "/":
                    result = prevNum / Number(currentNum);
                    break;
            }
            setCurrentNum(Number(result));
            setPrevNum(0);
        }

        if(value === "del") {
            return <button onClick={handleDelClick} value={value}>{value}</button>
        } else if (value === "reset") {
            return <button onClick={handleResetClick} value={value}>{value}</button>
        } else if (value === "+" || value === "-" || value === "x" || value === "/") {
            return <button onClick={() => handleOperationClick(value)} value={value}>{value}</button>
        } else if (value === ".") {
            return <button onClick={handleDotClick} value={value}>{value}</button>
        } else if (value === "=") {
            return <button onClick={handleResultClick} value={value}>{value}</button>
        } else {
            return <button onClick={handleKeyClick} value={value}>{value}</button>
        }
    }

    Key.propTypes = {
        value: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    };

    function Keyboard() {
        return (
            <table className={styles.keyboard}>
                <tbody className={styles.keyboard_body}>
                    <tr className={styles.table_row}>
                        <td> <Key value={7}/> </td>
                        <td> <Key value={8}/> </td>
                        <td> <Key value={9}/> </td>
                        <td className={styles.del}> <Key value={"del"}/> </td>
                    </tr>
                    <tr className={styles.table_row}>
                        <td> <Key value={4}/> </td>
                        <td> <Key value={5}/> </td>
                        <td> <Key value={6}/> </td>
                        <td> <Key value={"+"}/> </td>
                    </tr>
                    <tr className={styles.table_row}>
                        <td> <Key value={1}/> </td>
                        <td> <Key value={2}/> </td>
                        <td> <Key value={3}/> </td>
                        <td> <Key value={"-"}/> </td>
                    </tr>
                    <tr className={styles.table_row}>
                        <td> <Key value={"."}/> </td>
                        <td> <Key value={0}/> </td>
                        <td> <Key value={"/"}/> </td>
                        <td className={styles.multiplier}> <Key value={"x"}/> </td>
                    </tr>
                    <tr className={styles.table_row_bottom}>
                        <td className={styles.reset}> <Key value={"reset"}/> </td>
                        <td className={styles.result}> <Key value={"="}/> </td>
                    </tr>
                </tbody>
            </table>
        )
    }

    return (
        <div className={styles.calculator}>
            <Display />
            <Keyboard />
        </div>
    )
}



export default Calculator