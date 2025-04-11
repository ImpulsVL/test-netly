import React, { useState } from 'react'

import { Button } from '@/shared/ui/Button'

import Close from '../../../../assets/icons/close.svg'

import styles from './BackEnd.module.scss'

interface ModalSystemAnalystProps {
  onClose: () => void
}

const ModalBackEnd: React.FC<ModalSystemAnalystProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'requirements' | 'tasks'>(
    'requirements'
  )

  const requirements = [
    'Отличные аналитические способности и внимание к деталям',
    'Знание PHP и фреймворка Laravel',
    'Опыт работы с реляционными базами данных (MySQL, PostgreSQL)',
    'Знание RESTful API и принципов проектирования архитектуры',
    'Опыт работы с системами контроля версий (Git)',
    'Умение работать с пакетным менеджером Composer'
  ]

  const tasks = [
    'Разработка серверной логики',
    'Работа с базами данных',
    'Реализация и оптимизация RESTful API',
    'Проведение код-ревью, участие в командных встречах',
    'Участие в проектировании архитектуры и выборе технологий'
  ]

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <Close className={styles.close} onClick={onClose} />

        <header className={styles.modal__header}>
          <h1 className={styles.modal__title}>Backend-разработчик</h1>
          <p className={styles.modal__description}>
            Отвечает за серверную логику и взаимодействие с базами данных,
            разрабатывая API и настраивая интеграции.
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

export default ModalBackEnd
