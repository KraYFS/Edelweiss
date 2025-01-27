import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import styles from './HousePage.module.css'
import { BASE_URL } from '../../urls.ts'
import Title from '../../components/UI/Title/Title.jsx';
import Header from '../../components/Header/Header.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/thumbs';
import { Thumbs } from 'swiper/modules';
import Button from '../../components/UI/Button/Button.jsx';
import squareMeter from '../../assets/icons/housePageInfo/squareMeter.svg'
import square from '../../assets/icons/housePageInfo/square.svg'
import stairs from '../../assets/icons/housePageInfo/stairs.svg'
import bathroom from '../../assets/icons/housePageInfo/bathroom.svg'
import foundation from '../../assets/icons/housePageInfo/foundation.svg'
import bedroom from '../../assets/icons/housePageInfo/bedroom.svg'
import HousePageTabInfo from '../../components/UI/housePageTabInfo/housePageTabInfo.jsx';


const HousePage = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const [thumbsSwiper, setThumbsSwiper] = useState();
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        'Описание',
        'Характеристики',
        'FAQ'
    ];

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    useEffect(() => {
        fetch(`${BASE_URL}/api/houseInfo/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    if (!data) return <div>wait</div>

    const tabsContent = [
        <HousePageTabInfo type='description' text='Изготавливаем домокомплекты каркасных домов с возможностью доставки в регионы. Мы располагаем крупнейшим, среди строительных компаний, штатом проектировщиков. Готовы выполнить задачи по разработке проектов домов, фундаментов и инженерных коммуникаций любой сложности. Ключевая философия нашей компании заключается в открытости и близости к каждому потенциальному и, что важно, состоявшемуся клиенту. Стараемся снимать видеоролики с каждого из наших объектов, рассказывать о технологиях, тонкостях работы, рассказывать об используемых инструментах, а так же брать у заказчиков честные видео отзывы.' />,
        <HousePageTabInfo type='characteristics' square={data.square} squareMeter={data.squareMeter} foundationType={data.foundationType} floors={data.floors} bedrooms={data.bedrooms} bathrooms={data.bathrooms} extraLight={data.extraLight} polyMaterial={data.polyMaterial} sectionOfRacks={data.sectionOfRacks} stepOfRacks={data.stepOfRacks} SnowWindLoad={data.SnowWindLoad} projectAdaptation={data.projectAdaptation} />,
        <HousePageTabInfo type='faq' />
    ]

    return (
        <>
            <Header />
            <div className={styles.housePage}>
                <div className="container">
                    <div className={styles.housePage_inner}>
                        {/* <div className={styles.history_items}>
                        <Link className={styles.history_item}></Link>
                    </div> */}
                        <Title align="center" text={`${data.name}`} />
                        <div className={styles.housePage_content}>
                            <div className={styles.house_page_swiper}>
                                <Swiper
                                    modules={[Thumbs]}
                                    style={{ maxWidth: '970px', height: '554px' }}
                                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                >
                                    {data.pictures.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <img style={{ maxWidth: '970px', height: '554px' }} src={image} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <Swiper
                                    modules={[Thumbs]}
                                    onSwiper={setThumbsSwiper}
                                    slidesPerView={20}
                                    style={{ maxWidth: '970px', marginTop: '4px' }}
                                >
                                    {data.pictures.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <img style={{ maxWidth: '48px', minHeight: "48px", padding: '4px' }} src={image} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                            <div className={styles.housePage_info_block}>
                                <Button text="Обратный звонок" padding="23px 119px" />
                                <div className={styles.housePage_info_block_content}>
                                    <div className={styles.housePage_info_block_content_item}>
                                        <div className={styles.housePage_info_block_content_item_title}>
                                            <img src={squareMeter} alt="" />
                                            Общая площадь:
                                        </div>
                                        {data.squareMeter}
                                    </div>
                                    <div className={styles.housePage_info_block_content_item}>
                                        <div className={styles.housePage_info_block_content_item_title}>
                                            <img src={square} alt="" />
                                            Размер дома:
                                        </div>
                                        {data.square}
                                    </div>
                                    <div className={styles.housePage_info_block_content_item}>
                                        <div className={styles.housePage_info_block_content_item_title}>
                                            <img src={foundation} alt="" />
                                            Тип фундамента:
                                        </div>
                                        {data.foundationType}
                                    </div>
                                    <div className={styles.housePage_info_block_content_item}>
                                        <div className={styles.housePage_info_block_content_item_title}>
                                            <img src={stairs} alt="" />
                                            Этажи:
                                        </div>
                                        {data.floors}
                                    </div>
                                    <div className={styles.housePage_info_block_content_item}>
                                        <div className={styles.housePage_info_block_content_item_title}>
                                            <img src={bedroom} alt="" />
                                            Спальни:
                                        </div>
                                        {data.bedrooms}
                                    </div>
                                    <div className={styles.housePage_info_block_content_item}>
                                        <div className={styles.housePage_info_block_content_item_title}>
                                            <img src={bathroom} alt="" />
                                            Санузлы
                                        </div>
                                        {data.bathrooms}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.house_page_tabs}>
                            {tabs.map((tab, index) => {
                                return (
                                    <div
                                        key={index}
                                        onClick={() => handleTabClick(index)}
                                        className={`${styles.house_page_tab} ${activeTab === index ? styles.active : ''}`}>
                                        {tab}
                                    </div>
                                )
                            })}
                        </div>
                        <div className={styles.tabsContent}>
                            {tabsContent[activeTab]}
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default HousePage;
