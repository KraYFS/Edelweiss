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


const HousePage = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const [thumbsSwiper, setThumbsSwiper] = useState();

    useEffect(() => {
        fetch(`${BASE_URL}/api/houseInfo/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    if (!data) return <div>wait</div>
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
                        <div className={styles.housePage_info}>
                            <div className={styles.house_page_swiper}>
                                <Swiper
                                    modules={[Thumbs]}
                                    style={{ width: '970px', height: '554px' }}
                                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                                >
                                    {data.pictures.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <img src={image} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <Swiper
                                    modules={[Thumbs]}
                                    onSwiper={setThumbsSwiper}
                                    slidesPerView={20}
                                    style={{ width: '970px', marginTop: '4px' }}
                                >
                                    {data.pictures.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <img style={{ width: '48px', padding: '4px' }} src={image} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HousePage;
