import React, { useState, useEffect, Fragment } from 'react';
import api from '../services/api';
import styles from './NewsFeed.module.css';

// Заглушка, если у новости нет картинки
import defaultImage1 from '../assets/images/01.avif';
import defaultImage2 from '../assets/images/02.avif';
import defaultImage3 from '../assets/images/03.jpg';
import defaultImage4 from '../assets/images/04.avif';
import defaultImage5 from '../assets/images/05.webp';

// Массив заглушек
const defaultImages = [defaultImage1, defaultImage2, defaultImage3, defaultImage4, defaultImage5];

// Возвращает заглушку на основе id новости (стабильно для одной и той же новости)
const getDefaultImage = (id) => {
  const index = id % defaultImages.length; // для id 1 -> индекс 1, для id 2 -> 2, etc.
  return defaultImages[index];
};

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null);

  const openModal = async (id) => {
    try {
      const response = await api.getNewsById(id);
      setSelectedNews(response.data);
    } catch (error) {
      console.error('Ошибка загрузки полной новости:', error);
    }
  };

  const closeModal = () => setSelectedNews(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const response = await api.getNews();
        // Предполагаем, что API возвращает массив объектов вида:
        // { id, title, content, date, is_published, image }
        // Сортируем по дате (новые сверху)
        const newsData = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setNews(newsData);
        setError(null);
      } catch (err) {
        console.error('Ошибка загрузки новостей:', err);
        setError('Не удалось загрузить новости. Попробуйте позже.');
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  // Форматирование даты из строки ISO в "DD Month YYYY"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  // Определяем тип новости: если дата в будущем -> 'event', иначе 'news'
  const getNewsType = (dateString) => {
    const newsDate = new Date(dateString);
    const today = new Date();
    return newsDate > today ? 'event' : 'news';
  };

  if (loading) {
    return (
      <section id="news" className="newsSection">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Лента новостей</h2>
          <p>Загрузка новостей...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="news" className="newsSection">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Лента новостей</h2>
          <p style={{ color: '#ffaaaa' }}>{error}</p>
        </div>
      </section>
    );
  }

  if (news.length === 0) {
    return (
      <section id="news" className="newsSection">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Лента новостей</h2>
          <p>Пока нет новостей. Загляните позже!</p>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="newsSection">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Лента новостей</h2>
        <div className={styles.scrollWrapper}>
          <div className={styles.newsGrid}>
            {news.map((item) => {
              const newsType = getNewsType(item.date);
              return (
                <article 
                  key={item.id} 
                  className={styles.newsCard}
                  onClick={item.full_content ? () => openModal(item.id) : undefined}
                  style={item.full_content ? { cursor: 'pointer' } : {}}
                >
                  <div className={styles.cardImage}>
                    <img
                      /*src={item.image || defaultImage} /* когда была одна заглушка */
                      /*alt={item.title}*/
                      src={item.image || getDefaultImage(item.id)} /* для нескольких заглушек */
                      alt={item.title}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <span
                      className={`${styles.tag} ${newsType === 'event' ? styles.eventTag : styles.newsTag
                        }`}
                    >
                      {newsType === 'event' ? 'Анонс' : 'Новость'}
                    </span>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <time className={styles.cardDate}>{formatDate(item.date)}</time>
                    <p className={styles.cardDescription}>
                      {item.content.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
      {selectedNews && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>✕</button>
              <h2>{selectedNews.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: selectedNews.full_content.replace(/\n/g, '<br/>') }} />
        {selectedNews.image && <img src={selectedNews.image} alt={selectedNews.title} style={{ maxWidth: '100%' }} />}
          </div>
        </div>
      )}
    </section>
  );
};
/*<p className={styles.cardDescription}>{item.content}</p> Так было, а сейчас с переносами на новые строки*/
export default NewsFeed;