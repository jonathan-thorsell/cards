import styles from './FPCard.module.css';

function FPCard({innerText, className}: {innerText: string | string[], className?: string}) {
    return (
        <div className={`${styles.card} ${className ? className : ''}`}>
            {innerText}
        </div>
    );
}

export default FPCard;