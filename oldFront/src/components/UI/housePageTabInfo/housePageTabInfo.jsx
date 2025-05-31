import React, { useState } from 'react';
import styles from './housePageTabInfo.module.css';
import openQuestionIcon from '../../../assets/icons/openQuestionIcon.svg';

const DescriptionTab = ({ text }) => {
    const [isOpenTab, setIsOpenTab] = useState(false);

    const handleOpenTab = () => {
        setIsOpenTab(prev => !prev);
    };

    if (innerWidth > 920) {
        return <div className={styles.house_page_tabs_info}>{text}</div>;
    }

    return (
        <div className={isOpenTab ? `${styles.house_page_tab} ${styles.isOpenTab}` : styles.house_page_tab}>
            <div onClick={handleOpenTab} className={styles.house_page_tab_title}>
                <img
                    className={isOpenTab ? `${styles.tabIcon} ${styles.isOpenQuestionIcon}` : styles.tabIcon}
                    src={openQuestionIcon}
                    alt="Icon"
                />
                Описание
            </div>
            <div className={styles.house_page_tab_content}>
                {text}
            </div>
        </div>
    );
};

const CharacteristicsTab = (props) => {
    const [isOpenTab, setIsOpenTab] = useState(false);

    const handleOpenTab = () => {
        setIsOpenTab(prev => !prev);
    };

    const renderContent = () => (
        <>
            <div className={styles.housePage_info_block_content}>
                <div className={styles.housePage_info_block_content_item}>
                    <div className={styles.housePage_info_block_content_item_title}>Общая площадь:</div>
                    {props.squareMeter}
                </div>
                <div className={styles.housePage_info_block_content_item}>
                    <div className={styles.housePage_info_block_content_item_title}>Размер дома:</div>
                    {props.square}
                </div>
                <div className={styles.housePage_info_block_content_item}>
                    <div className={styles.housePage_info_block_content_item_title}>Тип фундамента:</div>
                    {props.foundationType}
                </div>
                <div className={styles.housePage_info_block_content_item}>
                    <div className={styles.housePage_info_block_content_item_title}>Этажи:</div>
                    {props.floors}
                </div>
                <div className={styles.housePage_info_block_content_item}>
                    <div className={styles.housePage_info_block_content_item_title}>Спальни:</div>
                    {props.bedrooms}
                </div>
                <div className={styles.housePage_info_block_content_item}>
                    <div className={styles.housePage_info_block_content_item_title}>Санузлы</div>
                    {props.bathrooms}
                </div>
            </div>
            <div className={styles.housePage_info_block_content}>
                <div className={styles.housePage_info_block_content_item}>
                    <div className={styles.housePage_info_block_content_item_title}>Наличие второго света:</div>
                    {props.extraLight}
                </div>
                <div className={styles.housePage_info_block_content_item}>
                    <div className={styles.housePage_info_block_content_item_title}>Объем пиломатериала для силового каркаса:</div>
                    {props.polyMaterial}
                </div>
                <div className={styles.housePage_info_block_content_item}>
                    <div className={styles.housePage_info_block_content_item_title}>Сечение стоек наружных стен каркаса:</div>
                    {props.sectionOfRacks}
                </div>
                <div className={styles.housePage_info_block_content_item}>
                    <div className={styles.housePage_info_block_content_item_title}>Шаг стоек наружных стен каркаса:</div>
                    {props.stepOfRacks}
                </div>
                <div className={styles.housePage_info_block_content_item}>
                    <div className={styles.housePage_info_block_content_item_title}>Снеговая/Ветровая нагрузка:</div>
                    {props.SnowWindLoad}
                </div>
                <div className={styles.housePage_info_block_content_item}>
                    <div className={styles.housePage_info_block_content_item_title}>Проект адаптирован под регион:</div>
                    {props.projectAdaptation}
                </div>
            </div>
        </>
    );

    if (innerWidth > 920) {
        return (
            <div className={styles.house_page_tabs_info}>
                {renderContent()}
            </div>
        );
    }

    return (
        <div className={isOpenTab ? `${styles.house_page_tab} ${styles.isOpenTab}` : styles.house_page_tab}>
            <div onClick={handleOpenTab} className={styles.house_page_tab_title}>
                <img
                    className={isOpenTab ? `${styles.tabIcon} ${styles.isOpenQuestionIcon}` : styles.tabIcon}
                    src={openQuestionIcon}
                    alt="Icon"
                />
                Характеристики
            </div>
            <div className={styles.house_page_tabs_info}>
                {renderContent()}
            </div>
        </div>
    );
};

const FAQTab = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenIcon, setIsOpenIcon] = useState(false);
    const [isOpenTab, setIsOpenTab] = useState(false);

    const handleOpenTab = () => {
        setIsOpenTab(prev => !prev);
    };

    const openQuestion = () => {
        setIsOpen(prev => !prev);
        setIsOpenIcon(prev => !prev);
    };

    if (innerWidth > 920) {
        return (
            <div className={styles.house_page_tabs_info_faq}>
                <div onClick={openQuestion} className={styles.house_page_tab_question}>
                    <div className={styles.faq_title}>
                        <img
                            className={isOpen ? `${styles.questionIcon} ${styles.isOpenQuestionIcon}` : styles.questionIcon}
                            src={openQuestionIcon}
                            alt="Icon"
                        />
                        Какой-то вопрос по проекту
                    </div>
                    <div className={isOpenIcon ? `${styles.house_page_tab_question_content} ${styles.isOpen}` : styles.house_page_tab_question_content}>
                        <span className={styles.house_page_tab_question_content_text}>
                            Кстати, сделанные на базе интернет-аналитики выводы могут быть подвергнуты целой серии независимых исследований. Повседневная практика показывает, что консультация с широким активом влечет за собой процесс внедрения и модернизации укрепления моральных ценностей. Картельные сговоры не допускают ситуации, при которой многие известные личности ограничены исключительно образом мышления.
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={isOpenTab ? `${styles.house_page_tab} ${styles.isOpenTab}` : styles.house_page_tab}>
            <div onClick={handleOpenTab} className={styles.house_page_tab_title}>
                <img
                    className={isOpenTab ? `${styles.tabIcon} ${styles.isOpenQuestionIcon}` : styles.tabIcon}
                    src={openQuestionIcon}
                    alt="Icon"
                />
                Описание
            </div>
            <div className={styles.house_page_tab_content}>
                <div onClick={openQuestion} className={styles.house_page_tab_question}>
                    <div className={styles.faq_title}>
                        <img
                            className={isOpen ? `${styles.questionIcon} ${styles.isOpenQuestionIcon}` : styles.questionIcon}
                            src={openQuestionIcon}
                            alt="Icon"
                        />
                        Какой-то вопрос по проекту
                    </div>
                    <div className={isOpenIcon ? `${styles.house_page_tab_question_content} ${styles.isOpen}` : styles.house_page_tab_question_content}>
                        <span className={styles.house_page_tab_question_content_text}>
                            Кстати, сделанные на базе интернет-аналитики выводы могут быть подвергнуты целой серии независимых исследований. Повседневная практика показывает, что консультация с широким активом влечет за собой процесс внедрения и модернизации укрепления моральных ценностей. Картельные сговоры не допускают ситуации, при которой многие известные личности ограничены исключительно образом мышления.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const HousePageTabInfo = (props) => {
    switch (props.type) {
        case 'description':
            return <DescriptionTab text={props.text} />;
        case 'characteristics':
            return (
                <CharacteristicsTab
                    squareMeter={props.squareMeter}
                    square={props.square}
                    foundationType={props.foundationType}
                    floors={props.floors}
                    bedrooms={props.bedrooms}
                    bathrooms={props.bathrooms}
                    extraLight={props.extraLight}
                    polyMaterial={props.polyMaterial}
                    sectionOfRacks={props.sectionOfRacks}
                    stepOfRacks={props.stepOfRacks}
                    SnowWindLoad={props.SnowWindLoad}
                    projectAdaptation={props.projectAdaptation}
                />
            );
        case 'faq':
            return <FAQTab />;
        default:
            return null;
    }
};

export default HousePageTabInfo;
