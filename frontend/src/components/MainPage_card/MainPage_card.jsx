import styles from './MainPage_card.module.css'
import squareMeter from '../../assets/icons/mainPageCardIcons/squareMeter.svg'
import square from '../../assets/icons/mainPageCardIcons/square.svg'
import stairs from '../../assets/icons/mainPageCardIcons/stairs.svg'
import bathroom from '../../assets/icons/mainPageCardIcons/bathroom.svg'
import foundation from '../../assets/icons/mainPageCardIcons/foundation.svg'
import bedroom from '../../assets/icons/mainPageCardIcons/bedroom.svg'
import { Link } from 'react-router-dom'

const MainPageCard = (props) => {
    return (
        <div style={{ background: `url(${props.picture}) top no-repeat` }} className={styles.MainPageCard}>
            <div className="container">
                <div className={styles.mainPage_card_content}>
                    <div className={styles.mainPage_card_title}>
                        {props.title} →
                        <br />
                        <Link to={`/house page/${props.id}`} className={styles.mainPage_card_link}>
                            Подробнее
                        </Link>
                    </div>
                    <div className={styles.house_options}>
                        <div className={styles.house_option}>
                            <img src={squareMeter} alt="" />
                            {props.squareMeter}
                        </div>
                        <div className={styles.house_option}>
                            <img src={square} alt="" />
                            {props.square}
                        </div>
                        <div className={styles.house_option}>
                            <img src={foundation} alt="" />
                            {props.foundationType}
                        </div>
                        <div className={styles.house_option}>
                            <img src={stairs} alt="" />
                            {props.floors}
                        </div>
                        <div className={styles.house_option}>
                            <img src={bedroom} alt="" />
                            {props.bedrooms}
                        </div>
                        <div className={styles.house_option}>
                            <img src={bathroom} alt="" />
                            {props.bathrooms}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default MainPageCard;
