import styles from './MainPage_card.module.css'

const MainPageCard = () => {
    return (
        <div className={styles.MainPageCard}>
            <div className="container">
                <div className={styles.mainPage_card_title}>
                    Проект каркасного одноэтажного дома 20ЧА04.00 →
                    <br />
                    <span className={styles.mainPage_card_price}>
                        10 грн.
                    </span>
                </div>
            </div>
        </div >
    );
}

export default MainPageCard;
