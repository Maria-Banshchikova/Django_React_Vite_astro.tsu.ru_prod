import React, { useState, useEffect } from 'react';
import api from '../services/api';
import styles from './TeachersSection.module.css';

const TeachersSection = () => {
  const [teachers, setTeachers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);  // состояние видимости блока с карточками
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleBlock = () => setIsOpen(prev => !prev); //setIsOpen(!isOpen); // const toggleBlock = () => setIsOpen((prev) => !prev); // было

    useEffect(() => {
    const loadTeachers = async () => {
      try {
        const response = await api.getTeachers();  // метод getTeachers нужно добавить в api.js
        // Если API возвращает массив напрямую (без пагинации)
        setTeachers(response.data);
        setError(null);
      } catch (err) {
        console.error('Ошибка загрузки преподавателей:', err);
        setError('Не удалось загрузить список преподавателей.');
      } finally {
        setLoading(false);
      }
    };
    loadTeachers();
  }, []);

  if (loading) {
    return (
      <section id="staff" className={styles.teachersSection}>
        <div className={styles.container}>
          <div className={styles.headerRow}>
            <h2 className={styles.sectionTitle}>Наши преподаватели</h2>
            <button className={styles.toggleButton} onClick={toggleBlock} aria-label="Показать преподавателей">
              +
            </button>
          </div>
          <p>Загрузка...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="staff" className={styles.teachersSection}>
        <div className={styles.container}>
          <div className={styles.headerRow}>
            <h2 className={styles.sectionTitle}>Наши преподаватели</h2>
            <button className={styles.toggleButton} onClick={toggleBlock} aria-label="Показать преподавателей">
              +
            </button>
          </div>
          <p style={{ color: '#ffaaaa' }}>{error}</p>
        </div>
      </section>
    );
  }



// <section id="staff" className={styles.teachersSection}>
  return (
    <section id="staff" className="teachersSection">
      <div className={styles.container}>
        {/* Заголовок и кнопка в одной строке */}
        <div className={styles.headerRow}>
          <h2 className={styles.sectionTitle}>Наши преподаватели</h2>
          <button
            className={styles.toggleButton}
            onClick={toggleBlock}
            aria-label={isOpen ? 'Скрыть преподавателей' : 'Показать преподавателей'}
          >
            {isOpen ? '−' : '+'}
          </button>
        </div>

      {/* Новая информация под заголовком */}
      <div className={styles.teachersDescription}>
        <p>
          Коллектив кафедры включает ведущих специалистов в области астрономии,
          космической геодезии и информационных технологий. Наши преподаватели – 
          кандидаты и доктора наук, активно участвующие в международных исследованиях.
          Они передают студентам не только теоретические знания, но и практический опыт,
          полученный в ведущих научных центрах России.
        </p>
      </div>

        {isOpen && (
          <div className={styles.grid}>
            {teachers.map((item) => (
              <div key={item.id} className={styles.card}>
                <div className={styles.photoWrapper}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={styles.photo}
                    loading="lazy"
                  />
                </div>
                <div className={styles.info}>
                  <h3 className={styles.name}>{item.name}</h3>
                  <p className={styles.position}>{item.position}</p>
                  <a
                    href={item.persona}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Профиль на persona.tsu.ru
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TeachersSection;