import React, { useState } from 'react';
import styles from './Header.module.css';
import logoImg from '../assets/logo_aikg.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Функция плавной прокрутки к элементу по id
  const handleScroll = (e, targetId) => {
    e.preventDefault();               // отменяем переход по якорю
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();                      // закрываем мобильное меню после клика
  };

  const menuItems = [
    { label: 'О кафедре', id: 'about' },
    { label: 'Сотрудники', id: 'staff' },
    { label: 'Студенты', id: 'students' },
    { label: 'Выпускники', id: 'alumni' },
    { label: 'Контакты', id: 'contacts' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Верхняя строка: логотип, заголовок, бургер */}
        <div className={styles.topRow}>
          <div className={styles.logo}>
            <img src={logoImg} alt="Логотип кафедры" className={styles.logoIcon} />
          </div>
          <div className={styles.titleBlock}>
            <h1 className={styles.title}>
              Кафедра астрономии и космической геодезии
            </h1>
            <p className={styles.subtitle}>Физического факультета</p>
            <p className={styles.subtitle}>Томского государственного университета</p>
          </div>
          {/* Бургер теперь здесь */}
          <button
            className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ''}`}
            onClick={toggleMenu}
            aria-label="Меню"
          >
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
            <span className={styles.burgerLine}></span>
          </button>
          <div className={styles.placeholder}></div> {/* для симметрии на десктопе */}
        </div>

        {/* Нижняя строка: только навигация (на десктопе видна всегда, на мобильных выпадает) */}
        <div className={styles.bottomRow}>
          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <ul className={styles.menu}>
              {menuItems.map((item, index) => (
                <li key={index} className={styles.menuItem}>
                  <a href={`#${item.id}`} onClick={(e) => handleScroll(e, item.id)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;