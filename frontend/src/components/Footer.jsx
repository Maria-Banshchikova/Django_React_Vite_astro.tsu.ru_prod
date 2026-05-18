import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer id="contacts" className="footer">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Блок с картой */}
          <div className={styles.mapBlock}>
            <h3 className={styles.title}>Мы на карте</h3>
            <div className={styles.mapWrapper}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A1234567890abcdef&source=constructor"
                width="100%"
                height="300"
                allowFullScreen
                title="Карта ДубльГис"
                className={styles.mapIframe}
              ></iframe>
              {/* Примечание: выше пример Яндекс.Карт. Для ДубльГис нужно получить embed-код с их сайта */}
            </div>
          </div>

          {/* Блок с контактами */}
          <div className={styles.contactsBlock}>
            <h3 className={styles.title}>Контакты</h3>
            <ul className={styles.contactsList}>
              <li>
                <span className={styles.icon}>📍</span>
                <span className={styles.link}>634050, г. Томск пр. Ленина, 36, корпус 10, строение 27 (НИИ ПММ), офис 348</span>
              </li>
              <li>
                <span className={styles.icon}>📞</span>
                <a href="tel:+73822529590" className={styles.link}>+7 (3822) 529-776</a>
              </li>
              <li>
                <span className={styles.icon}>✉️</span>
                <a href="mailto:info@tsu.ru" className={styles.link}>astro.tsu@mail.ru</a>
              </li>
            </ul>

          </div>
        </div>

        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} Кафедра астрономии и космической геодезии ФФ ТГУ. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;