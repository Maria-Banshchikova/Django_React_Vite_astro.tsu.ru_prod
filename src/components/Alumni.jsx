import React, { useState, useEffect } from 'react';
import api from '../services/api';
import styles from './Alumni.module.css';

const Alumni = () => {
  const [alumni, setAlumni] = useState([]);       // данные о выпускниках
  const [loading, setLoading] = useState(true);   // состояние загрузки
  const [error, setError] = useState(null);       // ошибка

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const openModal = (imageUrl, year) => {
    setSelectedImage(imageUrl);
    setSelectedYear(year);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedYear(null);
  };

  useEffect(() => {
    const loadAlumni = async () => {
      try {
        const response = await api.getAlumni();   // GET /api/alumni/
        setAlumni(response.data);
        setError(null);
      } catch (err) {
        console.error('Ошибка загрузки выпускников:', err);
        setError('Не удалось загрузить список выпускников.');
      } finally {
        setLoading(false);
      }
    };
    loadAlumni();
  }, []);

if (loading) {
    return (
      <section id="alumni" className="alumniSection">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наши выпускники</h2>
          <p>Загрузка...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="alumni" className="alumniSection">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наши выпускники</h2>
          <p style={{ color: '#ffaaaa' }}>{error}</p>
        </div>
      </section>
    );
  }

  if (alumni.length === 0) {
    return (
      <section id="students" className="alumniSection">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наши выпускники</h2>
          <p>Пока нет данных о выпускниках. Загляните позже!</p>
        </div>
      </section>
    );
  }

  return (
    <section id='alumni' className="alumniSection">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Наши выпускники</h2>
        <div className={styles.scrollWrapper}>
          <div className={styles.alumniGrid}>
            {alumni.map((item) => (
              <article key={item.id} className={styles.alumniCard}>
                <div className={styles.cardImage}>
                  <img
                    src={item.image}
                    alt={`Выпуск ${item.year}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => openModal(item.image, item.year)}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.groupNumber}>Выпуск {item.year}</h3>
                  <ol className={styles.alumniList}>
                    {item.spisok.map((student, idx) => (
                      <li key={idx}>{student}</li>
                    ))}
                  </ol>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
        {selectedImage && (
          <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <img src={selectedImage} alt={selectedYear} className={styles.modalImage} />
          <p className={styles.modalCaption}>Выпуск {selectedYear}</p>
          <button className={styles.closeButton} onClick={closeModal}>✕</button>
        </div>
  </div>
)}
    </section>
  );
};

export default Alumni;