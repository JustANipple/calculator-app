import { useState } from "react"
import styles from "./ThemeSelector.module.css"

const ThemeSelector = () => {

    const [knob, setKnob] = useState("start");

    function handleClick() {
        if(knob === "start") {
            setKnob("center");
            document.body.setAttribute("class", "theme-two");
        } else if (knob === "center") {
            setKnob("end");
            document.body.setAttribute("class", "theme-three");
        } else {
            setKnob("start");
            document.body.setAttribute("class", "");
        }
    }

    return (
        <div className={styles.theme_selector}>

            <p className={styles.label}>theme</p>

            <div className={styles.selector}>
                <ul className={styles.selector_nums}>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
                <button 
                    className={styles.selector_switch}
                    onClick={handleClick}
                >
                    <div className={`${styles.switch_knob} ${styles[knob]}`}></div>
                </button>
            </div>

        </div>
    )
}

export default ThemeSelector