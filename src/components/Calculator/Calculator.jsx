import { useState } from "react"
import styles from "./Calculator.module.css"
import PropTypes from 'prop-types'

const Calculator = () => {

    const [display, setDisplay] = useState(0);
    const [number, setNumber] = useState(0);
    const [operation, setOperation] = useState();

    function Display() {
        return (
            <div className={styles.display}>{display}</div>
        )
    }

    function Key({ value }) {
        //number key event
        function handleKeyClick() {
            if(display === 0) {
                setDisplay(value);
            } else {
                setDisplay(`${display}${value}`);
            }
        }
        //delete key event
        function handleDelClick() {
            if(display.length > 1) {
                setDisplay(display.toString().slice(0, display.length - 1));
            } else {
                setDisplay(0);
            }
        }
        //reset key event
        function handleResetClick() {
        }
        //dot key event
        function handleDotClick() {
        }
        //operation key event
        function handleOperationClick(value) {
        }

        //result key event
        function handleResultClick() {
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