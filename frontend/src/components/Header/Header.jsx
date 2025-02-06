import styles from './Header.module.css';
import telegramIcon from '../../assets/icons/telegramIcon.svg';
import burgerMenuCloseBtn from '../../assets/icons/burgerMenuCloseBtn.svg';
import Button from '../UI/Button/Button';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const openBurgerMenu = () => {
        setIsActive((prev) => !prev);
        document.documentElement.style.overflowY = !isActive ? 'hidden' : 'auto';
        document.body.style.overflowY = !isActive ? 'hidden' : 'auto';
    };

    const closeBurgerMenu = (destination) => {
        if (location.pathname === destination) {
            setIsActive(false);
            document.documentElement.style.overflowY = 'auto';
            document.body.style.overflowY = 'auto';
            return;
        }
        setIsActive(false);
        document.documentElement.style.overflowY = 'auto';
        document.body.style.overflowY = 'auto';
        setTimeout(() => {
            navigate(destination);
        }, 600);
    };

    const getBurgerLinkClass = (destination) =>
        location.pathname === destination
            ? `${styles.nav_links_burger_menu} ${styles.active}`
            : styles.nav_links_burger_menu;

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
                            <a className={styles.mail} href="#">
                                Edelweiss@gmail.com
                            </a>
                        </div>
                        <div className={styles.header_telegram}>
                            <img
                                src={telegramIcon}
                                alt="Telegram Icon"
                                className={styles.header_telegram_icon}
                            />
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
                    <div
                        className={
                            isActive
                                ? `${styles.burger_menu} ${styles.active}`
                                : styles.burger_menu
                        }
                    >
                        <div className={styles.burger_menu_inner}>
                            <nav className={styles.burger_nav}>
                                <a
                                    href="/catalog"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        closeBurgerMenu('/catalog');
                                    }}
                                    className={getBurgerLinkClass('/catalog')}
                                >
                                    Каталог
                                </a>
                                <a
                                    href="/project"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        closeBurgerMenu('/project');
                                    }}
                                    className={getBurgerLinkClass('/project')}
                                >
                                    проектирование
                                </a>
                                <a
                                    href="/construction"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        closeBurgerMenu('/construction');
                                    }}
                                    className={getBurgerLinkClass('/construction')}
                                >
                                    строительство
                                </a>
                                <a
                                    href="/about"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        closeBurgerMenu('/about');
                                    }}
                                    className={getBurgerLinkClass('/about')}
                                >
                                    о компании
                                </a>
                                <a
                                    href="/blog"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        closeBurgerMenu('/blog');
                                    }}
                                    className={getBurgerLinkClass('/blog')}
                                >
                                    блог
                                </a>
                                <a
                                    href="/clients"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        closeBurgerMenu('/clients');
                                    }}
                                    className={getBurgerLinkClass('/clients')}
                                >
                                    клиентам
                                </a>
                                <a
                                    href="/contacts"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        closeBurgerMenu('/contacts');
                                    }}
                                    className={getBurgerLinkClass('/contacts')}
                                >
                                    контакты
                                </a>
                            </nav>
                        </div>
                        <img
                            src={burgerMenuCloseBtn}
                            className={styles.burgerMenuCloseBtn}
                            onClick={openBurgerMenu}
                            alt="Close menu"
                        />
                    </div>
                    <span onClick={openBurgerMenu} className={styles.burger_menu_btn}>
                        |||
                    </span>
                </div>
                <nav className={styles.header_nav}>
                    <NavLink
                        to="/catalog"
                        className={({ isActive }) =>
                            isActive ? `${styles.nav_links} ${styles.active}` : styles.nav_links
                        }
                    >
                        Каталог
                    </NavLink>
                    <NavLink
                        to="/project"
                        className={({ isActive }) =>
                            isActive ? `${styles.nav_links} ${styles.active}` : styles.nav_links
                        }
                    >
                        проектирование
                    </NavLink>
                    <NavLink
                        to="/construction"
                        className={({ isActive }) =>
                            isActive ? `${styles.nav_links} ${styles.active}` : styles.nav_links
                        }
                    >
                        строительство
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? `${styles.nav_links} ${styles.active}` : styles.nav_links
                        }
                    >
                        о компании
                    </NavLink>
                    <NavLink
                        to="/blog"
                        className={({ isActive }) =>
                            isActive ? `${styles.nav_links} ${styles.active}` : styles.nav_links
                        }
                    >
                        блог
                    </NavLink>
                    <NavLink
                        to="/clients"
                        className={({ isActive }) =>
                            isActive ? `${styles.nav_links} ${styles.active}` : styles.nav_links
                        }
                    >
                        клиентам
                    </NavLink>
                    <NavLink
                        to="/contacts"
                        className={({ isActive }) =>
                            isActive ? `${styles.nav_links} ${styles.active}` : styles.nav_links
                        }
                    >
                        контакты
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
