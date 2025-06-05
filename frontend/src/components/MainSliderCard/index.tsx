import './styles.scss'

import { Link } from 'react-router-dom'

type Props = {
  picture: string
  title: string
  id: string
}

const MainSliderCard = ({ picture, title, id }: Props) => {
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
        </div>
      </div>
    </div>
  )
}

export default MainSliderCard
