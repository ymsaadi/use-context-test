import styles from './Display.module.css'

const Display = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                I'm the display component #1
            </div>
        </div>
    )
}

export default Display