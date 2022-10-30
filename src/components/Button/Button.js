import styles from './Button.module.css'

const Button = (props) => {
    const addOneHandler = () => {
        props.onIncreaseIndex()
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <button onClick={addOneHandler}>Increaso Petronum</button>
            </div>
        </div>
    )
}

export default Button