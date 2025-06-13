import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import type { HouseFeatures } from '../../types/HouseFeatures'

type MainSwiperProps = {
  data?: HouseFeatures[]
}

const MainSwiper = ({ data = [] }: MainSwiperProps) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false
      }}
      pagination={{ clickable: true }}
    >
      {data.map(item => {
        return (
          <SwiperSlide>

          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default MainSwiper
