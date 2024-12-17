import styles from './Header.module.css'
import telegramIcon from '../../assets/icons/telegramIcon.svg'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header_inner}>
                <div className={styles.header_first_block}>
                    <a href='#' className={styles.header_logo}>
                        Edelweiss
                    </a>
                    <div className={styles.header_info}>
                        <div className={styles.header_mail}>
                            <span className={styles.header_mail_title}>
                                E-mail для связи:
                            </span>
                            <a className={styles.mail} href="#">Edelweiss@gmail.com</a>
                        </div>
                        <div className={styles.header_telegram}>
                            <img src={telegramIcon} alt="" className={styles.header_telegram_icon} />
                            <div className={styles.telegram_info}>
                                <span className={styles.header_telegram_title}>
                                    +38099123456
                                </span>
                                <span className={styles.header_telegram_subtitle}>
                                    Отвечаем: с 10:00 до 19:00
                                </span>
                            </div>
                        </div>
                        <button className={styles.callMe_btn}>
                            Обратный вызов
                        </button>
                    </div>
                </div>
                <div className={styles.header_second_block}>

                </div>
            </div>
        </header>
    );
}

export default Header;
