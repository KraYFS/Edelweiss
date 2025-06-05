import './styles.scss'

import {
  BathroomIcon,
  BedroomIcons,
  FoundationIcon,
  SquareIcon,
  SquareMeterIcon,
  StairsIcon
} from '../../../../assets/icons'
import type { HouseFeatures } from '../../../../types/HouseFeatures'

type Feature = { img: React.ReactNode; prop: keyof HouseFeatures }

const features: Feature[] = [
  { img: <SquareMeterIcon />, prop: 'squareMeter' },
  { img: <SquareIcon />, prop: 'square' },
  { img: <FoundationIcon />, prop: 'foundationType' },
  { img: <StairsIcon />, prop: 'floors' },
  { img: <BedroomIcons />, prop: 'bedrooms' },
  { img: <BathroomIcon />, prop: 'bathrooms' }
]

const MainSliderCardInfo = (props: HouseFeatures) => {
  return (
    <div className='main-slider-card__info'>
      {features.map(({ img, prop }) => {
        return (
          <div key={prop} className='main-slider-card__feature'>
            {img}
            {props[prop]}
          </div>
        )
      })}
    </div>
  )
}

export default MainSliderCardInfo
