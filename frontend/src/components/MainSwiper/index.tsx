import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type MainSwiperProps<T> = {
  data: T[]
  htmlElem: (item: T) => React.ReactNode
}

function MainSwiper<T>({ data, htmlElem }: MainSwiperProps<T>) {
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
      {data.map((item, index) => (
        <SwiperSlide key={index}>{htmlElem(item)}</SwiperSlide>
      ))}
    </Swiper>
  )
}

export default MainSwiper
