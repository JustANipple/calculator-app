import styles from "./Calculator.module.css"

const Calculator = () => {

    function Display() {
        return (
            <div className={styles.display}>0</div>
        )
    }

    function Keyboard() {
        return (
            <table>
                <tr>
                    <td> <button>7</button> </td>
                    <td> <button>8</button> </td>
                    <td> <button>9</button> </td>
                    <td> <button>del</button> </td>
                </tr>
                <tr>
                    <td> <button>4</button> </td>
                    <td> <button>5</button> </td>
                    <td> <button>6</button> </td>
                    <td> <button>+</button> </td>
                </tr>
                <tr>
                    <td> <button>1</button> </td>
                    <td> <button>2</button> </td>
                    <td> <button>3</button> </td>
                    <td> <button>-</button> </td>
                </tr>
                <tr>
                    <td> <button>.</button> </td>
                    <td> <button>0</button> </td>
                    <td> <button>/</button> </td>
                    <td> <button>x</button> </td>
                </tr>
                <tr>
                    <td> <button>reset</button> </td>
                    <td> <button>=</button> </td>
                </tr>
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