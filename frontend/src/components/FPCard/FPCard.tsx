import styles from './FPCard.module.css';

function FPCard({innerTexts, colors}: {innerTexts: string[], colors: string[]}) {
    // let i = 0;

    // const onClick = (el: HTMLDivElement) => {
    //     const card = el as HTMLDivElement;
    //     card.style.transform = card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
    // };

    const onCreate = (el: HTMLDivElement) => {
        el.style.setProperty('--card-color', colors[0]);
        // if (colors.length > 1) {
        //     el.addEventListener('click', () => onClick(el));
        //     el.classList.add(styles.clickable);
        // }
    };

    const handleRef = (el: HTMLDivElement | null) => {
        if (el) onCreate(el);
    };

    return (
        <div className={styles.card} ref={handleRef}>
            {innerTexts}
        </div>
    );
}

export default FPCard;