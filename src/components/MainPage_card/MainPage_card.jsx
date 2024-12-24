import styles from './MainPage_card.module.css'
import squareMeter from '../../assets/icons/mainPageCardIcons/squareMeter.svg'

const MainPageCard = () => {
    return (
        <div className={styles.MainPageCard}>
            <div className="container">
                <div className={styles.mainPage_card_content}>
                    <div className={styles.mainPage_card_title}>
                        Проект каркасного одноэтажного дома 20ЧА04.00 →
                        <br />
                        <span className={styles.mainPage_card_price}>
                            10 грн.
                        </span>
                    </div>
                    <div className={styles.house_options}>
                        <div className={styles.house_option}>
                            <img src={squareMeter} alt="" />
                            91 м²
                        </div>
                        <div className={styles.house_option}>
                            <img src={squareMeter} alt="" />
                            91 м²
                        </div>
                        <div className={styles.house_option}>
                            <img src={squareMeter} alt="" />
                            91 м²
                        </div>
                        <div className={styles.house_option}>
                            <img src={squareMeter} alt="" />
                            91 м²
                        </div>
                        <div className={styles.house_option}>
                            <img src={squareMeter} alt="" />
                            91 м²
                        </div>
                        <div className={styles.house_option}>
                            <img src={squareMeter} alt="" />
                            91 м²
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MainPageCard;
