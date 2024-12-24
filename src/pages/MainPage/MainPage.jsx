import MainPageCard from '../../components/MainPage_card/MainPage_card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './MainPage.module.css'

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
        </div>
    );
}

export default MainPage;
