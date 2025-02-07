import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import styles from './CatalogPage.module.css'
import Title from '../../components/UI/Title/Title';
import CatalogFilterTab from '../../components/UI/CatalogFilterTab/CatalogFilterTab';
import oneStoryIcon from '../../assets/icons/catalogTabIcons/oneStoryIcon.svg'
import twoStoryIcon from '../../assets/icons/catalogTabIcons/twoStoryIcon.svg'
import houseWithGarage from '../../assets/icons/catalogTabIcons/houseWithGarage.svg'
import HouseWithATerrace from '../../assets/icons/catalogTabIcons/HouseWithATerrace.svg'
import Bathhouse from '../../assets/icons/catalogTabIcons/Bathhouse.svg'
import CatalogCard from '../../components/UI/CatalogCard/CatalogCard';
import { BASE_URL } from '../../urls';

const CatalogPage = () => {
    const CatalogFilterTabs = [
        { title: 'Все типы домов' },
        { title: 'Одноэтажный дом', icon: oneStoryIcon },
        { title: 'Двухэтажный дом', icon: twoStoryIcon },
        { title: 'Дом с гаражем', icon: houseWithGarage },
        { title: 'Дом с террасой', icon: HouseWithATerrace },
        { title: 'Баня', icon: houseWithGarage }
    ]


    const [activeFilterTab, setActiveFilterTab] = useState(0)
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`${BASE_URL}/api/houseInfo/`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const handleTabClick = (index) => {
        setActiveFilterTab(index)
    }

    if (!data) return <>wait</>
    return (
        <>
            <Header />
            <div className={styles.catalogPage}>
                <div className="container">
                    <div className={styles.catalogPage_inner}>
                        <Title align='center' text='Готовые проекты' />
                        <div className={styles.catalog_filter_tabs}>
                            {CatalogFilterTabs.map(({ title, icon }, index) => {
                                return <CatalogFilterTab className={activeFilterTab === index ? styles.activeTab : ''} key={index} onClick={() => handleTabClick(index)} title={title} icon={icon} />
                            })}
                        </div>
                        <div className={styles.catalog}>
                            <aside className={styles.catalog_filter}>
                                <div className={styles.catalog_filter_title}>
                                    Фильтры
                                </div>
                                <div className={styles.filter_item_wrapper}>
                                    <span className={styles.filter_item_title}>
                                        Тип
                                    </span>
                                    <select className={styles.filter_item} value={activeFilterTab} onChange={(e) => handleTabClick(+e.target.value)}>
                                        <option value="" disabled hidden>
                                            Выберите тип дома
                                        </option>
                                        {
                                            CatalogFilterTabs.map(({ title, icon }, index) => {
                                                return <option key={index} value={index}>{title}</option>
                                            })
                                        }
                                    </select>
                                </div>
                                <div className={styles.filter_item_wrapper}>
                                    <span className={styles.filter_item_title}>
                                        Технологии строительсива
                                    </span>
                                    <select className={styles.filter_item}>
                                        <option>
                                            Свайный
                                        </option>
                                    </select>
                                </div>
                                <div className={styles.filter_item_wrapper}>
                                    <span className={styles.filter_item_title}>
                                        Стиль дома
                                    </span>
                                    <select className={styles.filter_item}>
                                        <option>
                                            Красивый
                                        </option>
                                    </select>
                                </div>
                                <div className={styles.filter_item_wrapper}>
                                    <span className={styles.filter_item_title}>
                                        Этажи
                                    </span>
                                    <select className={styles.filter_item}>
                                        <option>
                                            1
                                        </option>
                                    </select>
                                </div>
                            </aside>
                            <div className={styles.catalog_items}>
                                {
                                    data.map((item, index) => {
                                        return <CatalogCard
                                            title={item.name}
                                            img={item.pictures[0]}
                                            squareMeter={item.squareMeter}
                                            square={item.square}
                                            bedrooms={item.bedrooms}
                                            link={`/house page/${item._id}`}
                                            key={index}
                                        />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CatalogPage;
