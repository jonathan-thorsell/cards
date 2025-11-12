import styles from './Background.module.css';
import blueBlob from '../../assets/blueBlob.svg';
import greenBlob from '../../assets/greenBlob.svg';
import redBlob from '../../assets/redBlob.svg';

function Background({children, className, variant=''}: {children?: React.ReactNode, variant?: string, className?: string}) {
    return (
        <>
            <div className={styles.background}>
                <div className={`${styles.container} ${className}`}>
                    {children}
                </div>
            </div>
            <img
                src={blueBlob}
                alt="blue blob"
                className={`${styles.blob} ${styles.blueBlob}${variant ? ` ${styles[variant]}` : ''}`}
            />
            <img
                src={greenBlob}
                alt="green blob"
                className={`${styles.blob} ${styles.greenBlob}${variant ? ` ${styles[variant]}` : ''}`}
            />
            <img
                src={redBlob}
                alt="red blob"
                className={`${styles.blob} ${styles.redBlob}${variant ? ` ${styles[variant]}` : ''}`}
            />
        </>
    );
}

export default Background;