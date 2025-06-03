import './styles.scss'

import { TelegramIcon } from '../../../../assets/icons'
import Button from '../../../UI/Button'

const Contact = () => {
  return (
    <div className='header__contact'>
      <div className='header__contact-email'>
        <span className='header__contact-email-title'>E-mail для связи:</span>
        <a className='header__contact-email-link'>Edelweiss@gmail.com</a>
      </div>
      <div className='header__contact-telegram'>
        <TelegramIcon
          className='header__contact-telegram-icon'
        />
        <div className='header__contact-telegram-info'>
          <div className='header__contact-telegram-number'> +38099123456</div>
          <div className='header__contact-telegram-subtitle'>
            Отвечаем: с 10:00 до 19:00
          </div>
        </div>
      </div>
      <Button text='Обратный звонок'/>
    </div>
  )
}

export default Contact
