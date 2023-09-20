import { useState } from "react"
import styles from "./Calculator.module.css"

const Calculator = () => {

    const [display, setDisplay] = useState(0);

    function Display() {
        return (
            <div className={styles.display}>{display}</div>
        )
    }

    function Key({ value }) {

        function handleKeyClick() {
            setDisplay(`${display}${value}`)
        }

        return (
            <button onClick={handleKeyClick}>{value}</button>
        )

    }

    function Keyboard() {
        return (
            <table className={styles.keyboard}>
                <tbody className={styles.keyboard_body}>
                    <tr className={styles.table_row}>
                        <td> <Key value={7}/> </td>
                        <td> <button>8</button> </td>
                        <td> <button>9</button> </td>
                        <td className={styles.del}> <button>del</button> </td>
                    </tr>
                    <tr className={styles.table_row}>
                        <td> <button>4</button> </td>
                        <td> <button>5</button> </td>
                        <td> <button>6</button> </td>
                        <td> <button>+</button> </td>
                    </tr>
                    <tr className={styles.table_row}>
                        <td> <button>1</button> </td>
                        <td> <button>2</button> </td>
                        <td> <button>3</button> </td>
                        <td> <button>-</button> </td>
                    </tr>
                    <tr className={styles.table_row}>
                        <td> <button>.</button> </td>
                        <td> <button>0</button> </td>
                        <td> <button>/</button> </td>
                        <td className={styles.multiplier}> <button>x</button> </td>
                    </tr>
                    <tr className={styles.table_row_bottom}>
                        <td className={styles.reset}> <button>reset</button> </td>
                        <td className={styles.result}> <button>=</button> </td>
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