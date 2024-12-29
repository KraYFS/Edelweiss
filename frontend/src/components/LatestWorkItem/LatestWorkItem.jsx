import squareMeter from '../../assets/icons/mainPageCardIcons/squareMeter.svg'
import square from '../../assets/icons/mainPageCardIcons/square.svg'
import stairs from '../../assets/icons/mainPageCardIcons/stairs.svg'
import bathroom from '../../assets/icons/mainPageCardIcons/bathroom.svg'
import foundation from '../../assets/icons/mainPageCardIcons/foundation.svg'
import bedroom from '../../assets/icons/mainPageCardIcons/bedroom.svg'
import latestWork from '../../assets/latestWork.png'
import styles from './LatestWorkItem.module.css'

const LatestWorkItem = () => {
    return (
        <div className={styles.latest_work}>
            <img style={{ width: '367px' }} src={latestWork} alt="" />
            <span className={styles.info_icon}>
                ⓘ
            </span>
            <div className={styles.latest_work_hover_content}>
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
                <span className={styles.latest_work_more_info_link}>Подробнее</span>
            </div>
        </div>
    );
}

export default LatestWorkItem;
