import styles from './Button.module.css';

function Button({innerText, onClick}: {innerText: string, onClick?: () => void}) {
    return (
        <button className={styles.button} onClick={onClick}>
            {innerText}
        </button>
    );
}

export default Button;