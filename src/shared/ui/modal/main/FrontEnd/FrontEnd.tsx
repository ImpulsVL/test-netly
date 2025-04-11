import React, { useState } from 'react'

import { Button } from '@/shared/ui/Button'

import Close from '../../../../assets/icons/close.svg'

import styles from './FrontEnd.module.scss'

interface ModalSystemAnalystProps {
  onClose: () => void
}

const ModalFrontEnd: React.FC<ModalSystemAnalystProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'requirements' | 'tasks'>(
    'requirements'
  )

  const requirements = [
    'Отличные аналитические способности, внимание к деталям',
    'Знание JavaScript, HTML и CSS',
    ' Опыт работы с библиотекой React',
    'Знание современных инструментов сборки проектов (Webpack, Vite)',
    'Опыт работы с системами контроля версий (Git)',
    'Знание методологий и принципов веб-разработки (ACSS, BEM, Mobile First)'
  ]

  const tasks = [
    'Работа с адаптивной версткой',
    'Работа с кросс-браузерной совместимостью',
    'Реализация интерактивных элементов и анимаций',
    'Разработка и поддержка пользовательского интерфейса',
    'Проведение код-ревью, участие в обсуждениях дизайна',
    'Участие в проектировании UX и юзабилити-тестировании.'
  ]

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <Close className={styles.close} onClick={onClose} />

        <header className={styles.modal__header}>
          <h1 className={styles.modal__title}>Frontend-разработчик</h1>
          <p className={styles.modal__description}>
            Cпециалист, который занимается созданием интерфейса приложения, с
            которым взаимодействует пользователь. Он реализует визуальные
            элементы, структуру и функциональность.
          </p>
        </header>

        <div className={styles.modal__switch}>
          <div className={styles.switch__titles}>
            <span
              className={`${styles.title__switch} ${activeTab === 'requirements' ? styles.active : ''}`}
              onClick={() => setActiveTab('requirements')}
            >
              Требования
            </span>
            <span
              className={`${styles.title__switch} ${activeTab === 'tasks' ? styles.active : ''}`}
              onClick={() => setActiveTab('tasks')}
            >
              Задачи
            </span>
          </div>

          <div className={styles.modal__requirementsList}>
            {activeTab === 'requirements'
              ? requirements.map((item, index) => (
                  <div
                    key={`req-${index}`}
                    className={styles.modal__requirementItem}
                  >
                    {item}
                  </div>
                ))
              : tasks.map((item, index) => (
                  <div key={`task-${index}`} className={styles.modal__taskItem}>
                    {item}
                  </div>
                ))}
          </div>
        </div>

        <div className={styles.modal__bid}>
          <Button buttonSize="large">Подать заявку</Button>
        </div>
      </div>
    </div>
  )
}

export default ModalFrontEnd
