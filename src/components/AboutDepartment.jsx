import React, { useState} from 'react'; /* useState – это хук состояния (state hook). Он позволяет функциональному компоненту React хранить и изменять данные, которые влияют на отображение. */
import styles from './AboutDepartment.module.css';
import img0 from '../assets/department/Obschie-retush_4.jpg';
import img1 from '../assets/department/Obschie-retush_2.jpg';
import img2 from '../assets/department/kupol.png';
import img3 from '../assets/department/astronom.jpeg';
import img4 from '../assets/department/praktika.jpg';
import img5 from '../assets/department/teleskop.jpg';
import img6 from '../assets/department/oblozhka.png';
import img7 from '../assets/department/natasha.jpeg';

const images = [
  { src: img1, caption: 'Сотрудники кафедры', float: 'left' },
  { src: img2, caption: 'Обсерватория ТГУ', float: 'right' },
  { src: img3, caption: 'Купол телескопа на главном корпусе ТГУ', float: 'left' },
  { src: img4, caption: 'Геодезическая практика', float: 'right' },
  { src: img5, caption: 'Телескоп', float: 'left' },
  { src: img6, caption: 'Учебник по Астрофизике Тамарова В.А.', float: 'right' },
  { src: img7, caption: 'Выпускница кафедры Наталья Лаптева', float: 'left' },
];

const AboutDepartment = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleExpand = () => setIsExpanded(!isExpanded);
  const openModal = (img) => setSelectedImage(img);
  const closeModal = () => setSelectedImage(null);

  return (
    <section id="about" className="aboutSection">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>О кафедре</h2>

        {/* Краткий блок: фото слева, текст справа + кнопка */}
        <div className={styles.summaryBlock}>
          <div className={styles.summaryPhoto}>
            <img src={img0} alt="Сотрудники кафедры" />
          </div>
          <div className={styles.summaryText}>
            <p>
              Кафедра астрономии и космической геодезии Томского государственного университета, объединяет древнюю науку о небесных телах и 
              современные спутниковые технологии. Мы готовим специалистов в области астрометрии, небесной механики и астрофизики, 
              а также в сфере геодезического обеспечения координатной основы и позиционирования в Солнечной системе. Кафедра активно сотрудничает 
              с ведущими научными и промышленными партнёрами, обеспечивая высокий уровень исследований и практико-ориентированного обучения.
            </p>
            <div className={styles.buttonWrapper}>
              <button className={styles.toggleButton} onClick={toggleExpand}>
                {isExpanded ? 'Свернуть' : 'Подробнее'}
              </button>
            </div>
          </div>
        </div>


        {/* Развёрнутый блок с полным текстом и 6 картинками (появляется при isExpanded) */}
        {isExpanded && (
        <div className={styles.contentCard}>
          <div className={styles.textWrapper}>
            {/* Первая картинка (слева) */}
            <div className={styles.floatLeft}>
              <img 
                src={images[0].src} 
                alt={images[0].caption}
                onClick={() => openModal(images[0])}
                className={styles.clickableImage}
              />
              <p className={styles.imageCaption}>{images[0].caption}</p>
            </div>
            <h2>История </h2>
            <p>
              Всё началось около ста лет назад. По инициативе профессора Николая Никоноровича Горячева в 1920-х годах на физико-математическом факультете Томского университета была открыта кафедра астрономии и геодезии, где начали готовить первых специалистов в области астрономии. С 1923 года при кафедре функционирует астрономическая обсерватория. 
            </p>
            <p>
              Современный этап развития кафедры начался в 2001 году, когда подготовка по специальности «Астрономия» была переведена на Физический факультет ТГУ, а сама кафедра получила название Кафедра астрономии и космической геодезии. С тех пор она готовит не только астрономов, но и востребованных инженеров, владеющих информационными технологиями для решения задач в сфере геодезии и картографии.
            </p>

            {/* Вторая картинка (справа) */}
            <div className={styles.floatRight}>
              <img 
                src={images[1].src} 
                alt={images[1].caption}
                onClick={() => openModal(images[1])}
                className={styles.clickableImage}
              />
              <p className={styles.imageCaption}>{images[1].caption}</p>
            </div>
            <h2>Образование</h2>
            <p>
              Кафедра объединяет фундаментальные знания с самыми современными ИТ-навыками.
            </p>
            <h4>Сроки и программы обучения:</h4>
            <ul>
              <li>Базовое высшее образование (4 года);</li>
    	        <li>Магистратура (2 года);</li>
    	        <li>Аспирантура для тех, кто хочет продолжить научную карьеру.</li>
            </ul>
            {/* Третья картинка (слева) */}
            <div className={styles.floatRight}>
              <img 
                src={images[2].src} 
                alt={images[2].caption}
                onClick={() => openModal(images[2])}
                className={styles.clickableImage}
              />
              <p className={styles.imageCaption}>{images[2].caption}</p>
            </div>
            <h4>Чему вы научитесь:</h4>
            <ul>
              <li>Фундаментальная подготовка: основы физики, геодезии и динамики космического полета.</li>
              <li>Современное программирование: языки Python, C++ и Delphi, применение этих знаний для разработки ПО в астрономии, геодезии и навигации.</li>
              <li>Передовые спутниковые технологии: спутниковая геодезия (GPS, ГЛОНАСС), радиоинтерферометрия со сверхдлинными базами (РСДБ).</li>
              <li>Анализ данных и ИИ: магистры знакомятся с методами машинного обучения и анализа больших объемов астрономических данных.</li>
              <li>Важная особенность: уже с 3-го курса вы сможете заниматься реальной научной работой, большинство студентов к выпуску являются соавторами публикаций в научных журналах. Учебный процесс обеспечивают 3 профессора, доктора наук, 7 доцентов и ведущие специалисты из профильных НИИ.</li>
            </ul>
            {/* Четвёртая картинка (справа) */}
            <div className={styles.floatLeft}>
              <img 
                src={images[3].src} 
                alt={images[3].caption}
                onClick={() => openModal(images[3])}
                className={styles.clickableImage}
              />
              <p className={styles.imageCaption}>{images[3].caption}</p>
            </div>
            <h4>Научная работа</h4>
            <p>
              Отдел небесной механики и астрометрии НИИ ПММ при ТГУ является базовым для проведения научно-исследовательской работы сотрудниками, аспирантами и студентами кафедры.
            </p>
            <p>
              Сотрудники и студенты кафедры продолжают научные традиции, заложенные еще профессором Н.Н. Горячевым, проводя исследования по динамике малых тел Солнечной системы (астероидов, комет, спутников планет).
            </p>
            <ul>
              <li>В 1970-1980-х годах в НИИ ПММ под руководством профессора Татьяны Валентиновны Бордовицыной была создана всемирно известная научная школа по численным методам динамики малых тел.</li>
              <li>С 1997 года группа профессора Владимира Александровича Бордовицына развивает на кафедре ещё одно важное направление — исследования физики пульсаров. В настоящее время проводятся в области спектроскопии звезд. </li>
              {/* Пятая картинка (справа) */}
              <div className={styles.floatRight}>
                <img 
                  src={images[4].src} 
                  alt={images[4].caption}
                  onClick={() => openModal(images[4])}
                  className={styles.clickableImage}
                />
              <p className={styles.imageCaption}>{images[4].caption}</p>
            </div>              
              <li>Кафедра активно сотрудничает с ведущими научными и промышленными партнерами, включая АО «Информационные спутниковые системы» им. М. Ф. Решетнева, и институтами РАН (Институт астрономии РАН и др.).</li>
              <li>С 2019 года работает лаборатория компьютерного моделирования и машинного анализа астрономических данных, где студенты занимаются исследованием астероидов, искусственных спутников и проблемой космического мусора.</li>
            </ul>
            <p>
              Научная работа на кафедре проводится в рамках госбюджетной тематики, грантов Российского фонда фундаментальных исследований, Российского научного фонда и хоздоговоров.
            </p>
            {/* Шестая картинка (слева) */}
            <div className={styles.floatLeft}>
              <img 
                src={images[5].src} 
                alt={images[5].caption}
                onClick={() => openModal(images[5])}
                className={styles.clickableImage}
              />
              <p className={styles.imageCaption}>{images[5].caption}</p>
            </div>
            <h4>Карьера выпускников</h4>
            <p>
              Широкий спектр знаний и навыков делает выпускников кафедры востребованными в разных сферах.
            </p>
            <ul>
                <li>Космическая индустрия: ИСС им. Решетнева, Газпром космические системы.</li>
                <li>IT-сектор: компании, специализирующиеся на геоинформационных системах (ГИС), такие как Геомикс, ИндорМост, NextTech, Talestorm.</li>
                <li>Геодезические и строительные фирмы**: ГеоСибПроект, АпексГеоСтрой (Томск), Дубль ГИС.</li>
                <li>Госструктуры и наука: продолжение научной карьеры в аспирантуре.</li>
            </ul>
            {/* Седьмая  картинка (справа) */}
            <div className={styles.floatRight}>
              <img 
                src={images[6].src} 
                alt={images[6].caption}
                onClick={() => openModal(images[6])}
                className={styles.clickableImage}
              />
              <p className={styles.imageCaption}>{images[6].caption}</p>
            </div>
            <h4>Карьера выпускников</h4>
            <p>
            Примеры профессий:
            </p>
            <ul>
                <li>Инженер-исследователь (в области астрономии или астрофизики),</li>
                <li>Инженер-геодезист (для кадастрового учета, строительства, разведки полезных ископаемых),</li>
                <li>Дата-аналитик, программист, специалист по созданию и развитию ГИС-систем.</li>
            </ul>
          </div>
        </div>
        )}
      </div>

      {/* Модальное окно */}
      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.caption} className={styles.modalImage} />
            <p className={styles.modalCaption}>{selectedImage.caption}</p>
            <button className={styles.closeButton} onClick={closeModal}>✕</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutDepartment;