import { useState } from "react"
import styles from "./ThemeSelector.module.css"

const ThemeSelector = () => {

    localStorage.getItem("theme") === null ? localStorage.setItem("theme", "start") : "";

    const [knob, setKnob] = useState(localStorage.getItem("theme"));

    window.addEventListener("load", () => {
        if (knob === "start") {
            document.body.setAttribute("class", "");
        } else if (knob === "center") {
            document.body.setAttribute("class", "theme-two");
        } else if (knob === "end") {
            document.body.setAttribute("class", "theme-three");
        }
    })

    function handleClick() {
        if(knob === "start") {
            setKnob("center");
            localStorage.setItem("theme", "center");
            document.body.setAttribute("class", "theme-two");
        } else if (knob === "center") {
            setKnob("end");
            localStorage.setItem("theme", "end");
            document.body.setAttribute("class", "theme-three");
        } else {
            setKnob("start");
            localStorage.setItem("theme", "start");
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