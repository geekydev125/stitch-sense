import styles from './BouncingDots.module.css'

function BouncingDots() {
    return (
        <div className={styles['bouncing-loader']}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default BouncingDots