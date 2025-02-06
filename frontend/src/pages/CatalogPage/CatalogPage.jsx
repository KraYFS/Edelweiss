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
        { title: 'Одноэтажный дом', icon: oneStoryIcon },
        { title: 'Двухэтажный дом', icon: twoStoryIcon },
        { title: 'Дом с гаражем', icon: houseWithGarage },
        { title: 'Дом с террасой', icon: HouseWithATerrace },
        { title: 'Баня', icon: houseWithGarage },
        { title: 'Все типы домов' }
    ]


    const [activeFilterTab, setActiveFilterTab] = useState(CatalogFilterTabs.length - 1)
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`${BASE_URL}/api/houseInfo/`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    const handleTabClick = (index) => {
        setActiveFilterTab(index)
    }

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
                            </aside>
                            <div className={styles.catalog_items}>
                                {!data
                                    ? (<>wait</>)
                                    : data.map((item, index) => {
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
