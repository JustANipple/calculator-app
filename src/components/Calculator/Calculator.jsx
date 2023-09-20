import styles from "./Calculator.module.css"

const Calculator = () => {

    function Display() {
        return (
            <div className={styles.display}>399,981</div>
        )
    }

    function Keyboard() {
        return (
            <table className={styles.keyboard}>
                <tbody className={styles.keyboard_body}>
                    <tr className={styles.table_row}>
                        <td> <button>7</button> </td>
                        <td> <button>8</button> </td>
                        <td> <button>9</button> </td>
                        <td> <button className={styles.del}>del</button> </td>
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
                        <td> <button>x</button> </td>
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