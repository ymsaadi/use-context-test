import styles from './Button.module.css'

const Button = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <button>Increaso Petronum</button>
            </div>
        </div>
    )
}

export default Button