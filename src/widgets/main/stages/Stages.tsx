import React from 'react'

import { Button } from '@/shared/ui/Button'

import styles from './Stages.module.scss'

import StagesImage from '/src/shared/assets/images/stagesImage.svg'

const Stages: React.FC = () => {
  return (
    <section className={styles.stages}>
      <h2 className={styles.stages__title}>Этапы стажировки</h2>

      <div className={styles.stages__block}>
        <ol className={styles.stages__list}>
          <li className={styles.stages__item}>
            <h3 className={styles.stages__title}>
              <span className={styles.stages__number}>1</span>
              <span className={styles.stages__name}>Старт</span>
            </h3>
            <p className={styles.stages__itemText}>
              Первый месяц глубокая адаптация, проверяем твои навыки, даём
              возможность донабрать теории, начинаем изучать командные
              взаимодействия, подготавливаемся к проекту.
            </p>
          </li>

          <li className={styles.stages__item}>
            <h3 className={styles.stages__title}>
              <span className={styles.stages__number}>2</span>
              <span className={styles.stages__name}>Погружение в проект</span>
            </h3>
            <p className={styles.stages__itemText}>
              Со второго месяца у тебя появляется проект. Проект сложный, с
              настоящим заказчиком, где ты работаешь в полноценной команде.
              Стажировка в таком цикле, готовит тебя к сложным проектам.
            </p>
          </li>

          <li className={styles.stages__item}>
            <h3 className={styles.stages__title}>
              <span className={styles.stages__number}>3</span>
              <span className={styles.stages__name}>Работа над проектом</span>
            </h3>
            <p className={styles.stages__itemText}>
              Каждый участник команды развивает компетенции по своему
              направлению, где ему помогают наставники. Они работают с вами как
              тимлиды, т.е. вникают в суть, делают ревью вашей работы.
            </p>
          </li>

          <li className={styles.stages__item}>
            <h3 className={styles.stages__title}>
              <span className={styles.stages__number}>4</span>
              <span className={styles.stages__name}>Защита проекта</span>
            </h3>
            <p className={styles.stages__itemText}>
              Все проекты будут презентованы на специальном мероприятии «Demo
              day» на которое мы пригласим представителей разных компаний. Это
              хороший шанс трудоустроиться, а самым лучшим мы предложим работу в
              процессе стажировки.
            </p>
          </li>
        </ol>

        <StagesImage />
      </div>

      <Button buttonSize="large" className={styles.bid}>
        Подать заявку
      </Button>
    </section>
  )
}

export default Stages
