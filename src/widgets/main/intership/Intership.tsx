import React from 'react'

import styles from './Intership.module.scss'

const Intership: React.FC = () => {
  return (
    <section className={styles.internship}>
      <h2 className={styles.internship__title}>О стажировке</h2>

      <ul className={styles.internship__list}>
        <li className={styles.internship__item}>
          <h2 className={styles.internship__itemTitle}>Команда</h2>
          <p className={styles.internship__itemText}>
            Работай на настоящих проектах, в настоящей команде. Вместе мы решаем
            задачи, обсуждаем идеи и добиваемся результатов!
          </p>
        </li>
        <li className={styles.internship__item}>
          <h2 className={styles.internship__itemTitle}>Интенсив</h2>
          <p className={styles.internship__itemText}>
            Каждая неделя, вложенная в изучение IT, — это новый этап вашего
            пути. Тебя ждёт 4 месяца интенсивной стажировки и обучения.
          </p>
        </li>
        <li className={styles.internship__item}>
          <h2 className={styles.internship__itemTitle}>Наставники</h2>
          <p className={styles.internship__itemText}>
            Опытные специалисты, которые всегда готовы помочь. Обращайтесь с
            любыми вопросами, вместе найдем ответы.
          </p>
        </li>
        <li className={styles.internship__item}>
          <h2 className={styles.internship__itemTitle}>Опыт</h2>
          <p className={styles.internship__itemText}>
            Ты сможешь 4 месяца работать в полноценной команде разработчиков.
          </p>
        </li>
      </ul>
    </section>
  )
}

export default Intership
