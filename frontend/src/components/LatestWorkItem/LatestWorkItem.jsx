import squareMeter from '../../assets/icons/mainPageCardIcons/squareMeter.svg'
import square from '../../assets/icons/mainPageCardIcons/square.svg'
import stairs from '../../assets/icons/mainPageCardIcons/stairs.svg'
import bathroom from '../../assets/icons/mainPageCardIcons/bathroom.svg'
import foundation from '../../assets/icons/mainPageCardIcons/foundation.svg'
import bedroom from '../../assets/icons/mainPageCardIcons/bedroom.svg'
import styles from './LatestWorkItem.module.css'
import viewIcon from '../../assets/icons/viewIcon.svg'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../urls'

const LatestWorkItem = (props) => {
    const addNewView = () => {
        fetch(`${BASE_URL}/api/houseInfo/${props.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                views: props.views + 1
            })
        })
    }

    return (
        <div className={styles.latest_work}>
            <img style={{ width: '100%', minHeight: '320px' }} src={props.picture} alt="" />
            <span className={styles.info_icon}>
                ⓘ
            </span>
            <div className={styles.views}>
                <img className={styles.viewIcon} src={viewIcon} alt="" />
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
                <Link onClick={addNewView} to={`${props.link}`} className={styles.latest_work_more_info_link}>Подробнее</Link>
            </div>
        </div>
    );
}

export default LatestWorkItem;
