import React, { useState } from 'react';
import styles from './housePageTabInfo.module.css'


const HousePageTabInfo = (props) => {
    if (props.type === 'description') {
        return (
            <div className={styles.house_page_tabs_info}>
                {props.text}
            </div>
        );
    } else if (props.type === 'characteristics') {
        return (
            <div className={styles.house_page_tabs_info}>
                <div className={styles.housePage_info_block_content}>
                    <div className={styles.housePage_info_block_content_item}>
                        <div className={styles.housePage_info_block_content_item_title}>
                            Общая площадь:
                        </div>
                        {props.squareMeter}
                    </div>
                    <div className={styles.housePage_info_block_content_item}>
                        <div className={styles.housePage_info_block_content_item_title}>
                            Размер дома:
                        </div>
                        {props.square}
                    </div>
                    <div className={styles.housePage_info_block_content_item}>
                        <div className={styles.housePage_info_block_content_item_title}>
                            Тип фундамента:
                        </div>
                        {props.foundationType}
                    </div>
                    <div className={styles.housePage_info_block_content_item}>
                        <div className={styles.housePage_info_block_content_item_title}>
                            Этажи:
                        </div>
                        {props.floors}
                    </div>
                    <div className={styles.housePage_info_block_content_item}>
                        <div className={styles.housePage_info_block_content_item_title}>
                            Спальни:
                        </div>
                        {props.bedrooms}
                    </div>
                    <div className={styles.housePage_info_block_content_item}>
                        <div className={styles.housePage_info_block_content_item_title}>
                            Санузлы
                        </div>
                        {props.bathrooms}
                    </div>
                </div>
                <div className={styles.housePage_info_block_content}>
                    <div className={styles.housePage_info_block_content_item}>
                        <div className={styles.housePage_info_block_content_item_title}>
                            Наличие второго света:
                        </div>
                        {props.extraLight}
                    </div>
                    <div className={styles.housePage_info_block_content_item}>
                        <div className={styles.housePage_info_block_content_item_title}>
                            Объем пиломатериала для силового каркаса:
                        </div>
                        {props.polyMaterial}
                    </div>
                    <div className={styles.housePage_info_block_content_item}>
                        <div className={styles.housePage_info_block_content_item_title}>
                            Сечение стоек наружных стен каркаса:
                        </div>
                        {props.sectionOfRacks}
                    </div>
                    <div className={styles.housePage_info_block_content_item}>
                        <div className={styles.housePage_info_block_content_item_title}>
                            Шаг стоек наружных стен каркаса:
                        </div>
                        {props.stepOfRacks}
                    </div>
                    <div className={styles.housePage_info_block_content_item}>
                        <div className={styles.housePage_info_block_content_item_title}>
                            Снеговая/Ветровая нагрузка:
                        </div>
                        {props.SnowWindLoad}
                    </div>
                    <div className={styles.housePage_info_block_content_item}>
                        <div className={styles.housePage_info_block_content_item_title}>
                            Проект адаптирован под регион:
                        </div>
                        {props.projectAdaptation}
                    </div>
                </div>
            </div >
        )
    } else if (props.type === 'faq') {
        const [isOpen, setIsOpen] = useState(false)

        const openQuestion = () => {
            setIsOpen(prev => !prev)
        }

        return (
            <div className={styles.house_page_tabs_info_faq}>
                <div onClick={openQuestion} className={styles.house_page_tab_question}>
                    Какой-то вопрос по проекту
                    <div className={isOpen ? `${styles.house_page_tab_question_content} ${styles.isOpen}` : styles.house_page_tab_question_content}>
                        Кстати,  сделанные на базе интернет-аналитики выводы могут быть подвергнуты целой серии независимых исследований. Повседневная практика показывает, что консультация с широким активом влечет за собой процесс внедрения и модернизации укрепления моральных ценностей. Картельные сговоры не допускают ситуации, при которой многие известные личности ограничены исключительно образом мышления.
                    </div>
                </div>
            </div>
        )
    }
}

export default HousePageTabInfo;
