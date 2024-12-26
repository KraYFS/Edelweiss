import MainPageCard from '../../components/MainPage_card/MainPage_card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './MainPage.module.css'
import img from '../../assets/categoryItem.png'

const MainPage = () => {
    return (
        <div className={styles.mainPage}>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <MainPageCard />
                </SwiperSlide>
                <SwiperSlide>
                    <MainPageCard />
                </SwiperSlide>
                <SwiperSlide>
                    <MainPageCard />
                </SwiperSlide>
            </Swiper>
            <div className="container">
                <section className={styles.category_house}>
                    <a href='#' className={styles.category_house_item}>
                        <img className={styles.category_house_item_img} src={img} alt="" />
                        <h2 className={styles.category_house_item_title}>
                            Готовые одноэтажные дома
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 8L14.2759 8" stroke="white" strokeWidth="2" strokeLinejoin="bevel" />
                                <path d="M8.48267 1.48279L14.9999 8.00003L8.48267 14.5173" stroke="white" strokeWidth="2" />
                            </svg>
                        </h2>
                    </a>
                    <a href='#' className={styles.category_house_item}>
                        <img className={styles.category_house_item_img} src={img} alt="" />
                        <h2 className={styles.category_house_item_title}>
                            Готовые двухэтажные дома
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 8L14.2759 8" stroke="white" strokeWidth="2" strokeLinejoin="bevel" />
                                <path d="M8.48267 1.48279L14.9999 8.00003L8.48267 14.5173" stroke="white" strokeWidth="2" />
                            </svg>
                        </h2>
                    </a>
                    <a href='#' className={styles.category_house_item}>
                        <img className={styles.category_house_item_img} src={img} alt="" />
                        <h2 className={styles.category_house_item_title}>
                            Готовые дома с терассой
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 8L14.2759 8" stroke="white" strokeWidth="2" strokeLinejoin="bevel" />
                                <path d="M8.48267 1.48279L14.9999 8.00003L8.48267 14.5173" stroke="white" strokeWidth="2" />
                            </svg>
                        </h2>
                    </a>
                    <a href='#' className={styles.category_house_item}>
                        <img className={styles.category_house_item_img} src={img} alt="" />
                        <h2 className={styles.category_house_item_title}>
                            Готовые дома с гаражем
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 8L14.2759 8" stroke="white" strokeWidth="2" strokeLinejoin="bevel" />
                                <path d="M8.48267 1.48279L14.9999 8.00003L8.48267 14.5173" stroke="white" strokeWidth="2" />
                            </svg>
                        </h2>
                    </a>
                    <a href='#' className={styles.category_house_item}>
                        <img className={styles.category_house_item_img} src={img} alt="" />
                        <h2 className={styles.category_house_item_title}>
                            Готовые бани
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 8L14.2759 8" stroke="white" strokeWidth="2" strokeLinejoin="bevel" />
                                <path d="M8.48267 1.48279L14.9999 8.00003L8.48267 14.5173" stroke="white" strokeWidth="2" />
                            </svg>
                        </h2>
                    </a>
                    <a href='#' className={styles.category_house_item}>
                        <img className={styles.category_house_item_img} src={img} alt="" />
                        <h2 className={styles.category_house_item_title}>
                            Готовые одноэтажные дома
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 8L14.2759 8" stroke="white" strokeWidth="2" strokeLinejoin="bevel" />
                                <path d="M8.48267 1.48279L14.9999 8.00003L8.48267 14.5173" stroke="white" strokeWidth="2" />
                            </svg>
                        </h2>
                    </a>
                </section>

            </div>
        </div>
    );
}

export default MainPage;
