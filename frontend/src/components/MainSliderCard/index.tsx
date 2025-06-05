import './styles.scss'

import { Link } from 'react-router-dom'

import type { HouseFeatures } from '../../types/HouseFeatures'
import MainSliderCardInfo from './components/MainSliderCardInfo'

type Props = {
  picture: string
  title: string
  id: string
} & HouseFeatures

const MainSliderCard = ({
  picture,
  title,
  id,
  squareMeter,
  square,
  foundationType,
  floors,
  bedrooms,
  bathrooms
}: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${picture})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: 'cover'
      }}
      className='main-slider-card'
    >
      <div className='container'>
        <div className='main-slider-card__content'>
          <div className='main-slider-card__title'>
            {title} →
            <br />
            <Link className='main-slider-card__link' to={`/house page/${id}`}>
              Подробнее
            </Link>
          </div>
          <MainSliderCardInfo
            squareMeter={squareMeter}
            square={square}
            foundationType={foundationType}
            floors={floors}
            bedrooms={bedrooms}
            bathrooms={bathrooms}
          />
        </div>
      </div>
    </div>
  )
}

export default MainSliderCard
