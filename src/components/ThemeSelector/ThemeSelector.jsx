import styles from "./ThemeSelector.module.css"

const ThemeSelector = () => {
    return (
        <div className={styles.theme_selector}>

            <p className={styles.label}>theme</p>

            <div className={styles.selector}>
                <ul className={styles.selector_nums}>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
                <button className={styles.selector_switch}>
                    <div className={styles.switch_knob}></div>
                </button>
            </div>

        </div>
    )
}

export default ThemeSelector