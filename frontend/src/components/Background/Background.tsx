import styles from './Background.module.css';

function Background({children, containerClass, variant}: {children?: React.ReactNode, variant?: string, containerClass?: string}) {
    return (
        <div className={styles.background}>
            <div className={`${styles.container} ${containerClass}`}>
                {children}
            </div>
        </div>
    );
}

export default Background;