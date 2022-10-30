import styles from './Display.module.css'

const Display = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                I'm the display component #{props.index}
            </div>
        </div>
    )
}

export default Display