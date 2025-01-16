import styles from './Header.module.css'
import telegramIcon from '../../assets/icons/telegramIcon.svg'
import Button from '../UI/Button/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [isActive, setIsActive] = useState(false)

    const openBurgerMenu = () => {
        isActive ? setIsActive(false) : setIsActive(true)
        document.documentElement.style.overflowY = !isActive ? 'hidden' : 'auto';
        document.body.style.overflowY = !isActive ? 'hidden' : 'auto';
    }

    return (
        <header className={styles.header}>
            <div className={styles.header_inner}>
                <div className={styles.header_first_block}>
                    <Link to="/" className={styles.header_logo}>
                        Edelweiss
                    </Link>
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
                        <Button padding="12px 20px" text="Обратный звонок" />
                    </div>
                    <div className={isActive ? `${styles.burger_menu} ${styles.active}` : styles.burger_menu}>
                        {/* <div className={styles.burger_menu_inner}>
                        <nav className={styles.header_nav}>
                            <a href="#" className={styles.nav_links}>Каталог</a>
                            <a href="#" className={styles.nav_links}>проектирование</a>
                            <a href="#" className={styles.nav_links}>строительство</a>
                            <a href="#" className={styles.nav_links}>о компании</a>
                            <a href="#" className={styles.nav_links}>блог</a>
                            <a href="#" className={styles.nav_links}>клиентам</a>
                            <a href="#" className={styles.nav_links}>контакты</a>
                        </nav>
                    </div> */}
                        <span onClick={openBurgerMenu}>закрыть</span>
                    </div>
                    <span onClick={openBurgerMenu} className={styles.burger_menu_btn}>|||</span>
                </div>
                <nav className={styles.header_nav}>
                    <a href="#" className={styles.nav_links}>Каталог</a>
                    <a href="#" className={styles.nav_links}>проектирование</a>
                    <a href="#" className={styles.nav_links}>строительство</a>
                    <a href="#" className={styles.nav_links}>о компании</a>
                    <a href="#" className={styles.nav_links}>блог</a>
                    <a href="#" className={styles.nav_links}>клиентам</a>
                    <a href="#" className={styles.nav_links}>контакты</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
