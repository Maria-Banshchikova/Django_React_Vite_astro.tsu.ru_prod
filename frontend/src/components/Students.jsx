import React, { useState, useEffect } from 'react';
import api from '../services/api';
import styles from './Students.module.css';

// <section id="students" className={styles.studentsSection}>
const Students = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const openModal = (imageUrl, groupName) => {
    setSelectedImage(imageUrl);
    setSelectedGroup(groupName);
  };
  const closeModal = () => {
    setSelectedImage(null);
    setSelectedGroup(null);
  };

  useEffect(() => {
    const loadGroups = async () => {
      try {
        const response = await api.getStudents(); // метод в api.js
        // Если API возвращает массив объектов
        setGroups(response.data);
        setError(null);
      } catch (err) {
        console.error('Ошибка загрузки групп студентов:', err);
        setError('Не удалось загрузить список групп.');
      } finally {
        setLoading(false);
      }
    };
    loadGroups();
  }, []);

  if (loading) {
    return (
      <section id="students" className="studentsSection">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наши студенты</h2>
          <p>Загрузка...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="students" className="studentsSection">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наши студенты</h2>
          <p style={{ color: '#ffaaaa' }}>{error}</p>
        </div>
      </section>
    );
  }

  if (groups.length === 0) {
    return (
      <section id="students" className="studentsSection">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Наши студенты</h2>
          <p>Пока нет данных о студентах. Загляните позже!</p>
        </div>
      </section>
    );
  }
/*                   <img src={item.image} alt={`Группа ${item.group}`} />  так было*/
  return (
    <section id="students" className="studentsSection">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Наши студенты</h2>
        <div className={styles.scrollWrapper}>
          <div className={styles.studentsGrid}>
            {groups.map((item) => (
              <article key={item.id} className={styles.studentCard}>
                <div className={styles.cardImage}>
                  <img
                    src={item.image}
                    alt={`Группа ${item.group}`}
                    className={styles.photo}
                    loading="lazy"
                    onClick={() => openModal(item.image, item.group)}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.groupNumber}>Группа {item.group}</h3>
                  <ol className={styles.studentsList}>
                    {item.spisok.map((spisok, idx) => (
                      <li key={idx}>{spisok}</li>
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
            <img src={selectedImage} alt={selectedGroup} className={styles.modalImage} />
            <p className={styles.modalCaption}>Группа {selectedGroup}</p>
            <button className={styles.closeButton} onClick={closeModal}>✕</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Students;