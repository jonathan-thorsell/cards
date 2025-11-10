import styles from './Background.module.css';
import blueBlob from '../../assets/blueBlob.svg';

function Background({children, containerClass, variant=''}: {children?: React.ReactNode, variant?: string, containerClass?: string}) {
    return (
        <>
            <div className={styles.background}>
                <div className={`${styles.container} ${containerClass}`}>
                    {children}
                </div>
            </div>
            <img
                src={blueBlob}
                alt="blue blob"
                className={`${styles.blob} ${styles.blueBlob}${variant ? ` ${styles[variant]}` : ''}`}
            />
        </>
    );
}

export default Background;