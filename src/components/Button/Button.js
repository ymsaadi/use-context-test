import styles from './Button.module.css'
import {useIndexUpdate} from "../../IndexContext";

const Button = () => {
    const addOneHandler = useIndexUpdate()

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <button onClick={addOneHandler}>Increaso Petronum</button>
            </div>
        </div>
    )
}

export default Button