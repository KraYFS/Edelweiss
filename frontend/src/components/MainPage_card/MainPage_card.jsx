import styles from './MainPage_card.module.css'
import squareMeter from '../../assets/icons/mainPageCardIcons/squareMeter.svg'
import square from '../../assets/icons/mainPageCardIcons/square.svg'
import stairs from '../../assets/icons/mainPageCardIcons/stairs.svg'
import bathroom from '../../assets/icons/mainPageCardIcons/bathroom.svg'
import foundation from '../../assets/icons/mainPageCardIcons/foundation.svg'
import bedroom from '../../assets/icons/mainPageCardIcons/bedroom.svg'

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
                            <img src={square} alt="" />
                            9.40 x 7.50 м
                        </div>
                        <div className={styles.house_option}>
                            <img src={foundation} alt="" />
                            Свайный
                        </div>
                        <div className={styles.house_option}>
                            <img src={stairs} alt="" />
                            1
                        </div>
                        <div className={styles.house_option}>
                            <img src={bedroom} alt="" />
                            2
                        </div>
                        <div className={styles.house_option}>
                            <img src={bathroom} alt="" />
                            1
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MainPageCard;
