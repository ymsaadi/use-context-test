import styles from './Display.module.css'
import {useIndex} from "../../IndexContext";

const Display = () => {
    const index = useIndex()

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                I'm the display component #{index}
            </div>
        </div>
    )
}

export default Display