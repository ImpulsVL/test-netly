import React, { useState } from 'react'

import { Button } from '@/shared/ui/Button'

import Close from '../../../../assets/icons/close.svg'

import styles from './ProjectManager.module.scss'

interface ModalSystemAnalystProps {
  onClose: () => void
}

const ModalProjectManager: React.FC<ModalSystemAnalystProps> = ({
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'requirements' | 'tasks'>(
    'requirements'
  )

  const requirements = [
    'Знание методологий управления проектами (Agile, Scrum, Waterfall)',
    'Умение разрабатывать и поддерживать проектную документацию',
    'Знание основ управления ресурсами',
    'Опыт в управлении рисками и разрешении конфликтов'
  ]

  const tasks = [
    'Организация встреч и проектных мероприятий',
    'Координация команды и контроль задач',
    'Взаимодействие с клиентами',
    'Оценка рисков и разработка стратегий',
    'Подготовка отчетов о ходе проекта'
  ]

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <Close className={styles.close} onClick={onClose} />

        <header className={styles.modal__header}>
          <h1 className={styles.modal__title}>Менеджер проектов</h1>
          <p className={styles.modal__description}>
            Связующее звено между командой, заказчиком и бизнес-целями. Он
            планирует, координирует и контролирует выполнение задач, обеспечивая
            успешную реализацию проекта в срок и в рамках бюджета.
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

export default ModalProjectManager
