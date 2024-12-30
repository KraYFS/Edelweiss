import squareMeter from '../../assets/icons/mainPageCardIcons/squareMeter.svg'
import square from '../../assets/icons/mainPageCardIcons/square.svg'
import stairs from '../../assets/icons/mainPageCardIcons/stairs.svg'
import bathroom from '../../assets/icons/mainPageCardIcons/bathroom.svg'
import foundation from '../../assets/icons/mainPageCardIcons/foundation.svg'
import bedroom from '../../assets/icons/mainPageCardIcons/bedroom.svg'
import latestWork from '../../assets/latestWork.png'
import styles from './LatestWorkItem.module.css'

const LatestWorkItem = (props) => {
    return (
        <div className={styles.latest_work}>
            <img style={{ width: '367px' }} src={latestWork} alt="" />
            <span className={styles.info_icon}>
                ⓘ
            </span>
            <div className={styles.views}>
                {props.views}
            </div>
            <div className={styles.latest_work_hover_content}>
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
                    {props.stairs}
                </div>
                <div className={styles.house_option}>
                    <img src={bedroom} alt="" />
                    {props.bedrooms}
                </div>
                <div className={styles.house_option}>
                    <img src={bathroom} alt="" />
                    {props.bathrooms}
                </div>
                <span className={styles.latest_work_more_info_link}>Подробнее</span>
            </div>
        </div>
    );
}

export default LatestWorkItem;
