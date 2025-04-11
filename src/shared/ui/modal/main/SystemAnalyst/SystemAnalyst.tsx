import React, { useState } from 'react'

import { Button } from '@/shared/ui/Button'

import Close from '../../../../assets/icons/close.svg'

import styles from './SystemAnalyst.module.scss'

interface ModalSystemAnalystProps {
  onClose: () => void
}

const ModalSystemAnalyst: React.FC<ModalSystemAnalystProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'requirements' | 'tasks'>(
    'requirements'
  )

  const requirements = [
    'Знание методов сбора и анализа требований (интервью, анкетирование, моделирование)',
    'Опыт работы с UML и другими методами визуализации требований и процессов',
    'Умение разрабатывать техническую документацию',
    'Знание основ проектирования баз данных и работы с SQL',
    'Отличные аналитические способности и внимание к деталям',
    'Умение объяснять сложные технические концепции на доступном языке'
  ]

  const tasks = [
    'Анализ бизнес-процессов',
    'Интервью с заказчиками',
    'Документирование требований',
    'Сбор и анализ требований',
    'Моделирование процессов',
    'Введение документации проекта',
    'Грамотное построение работы с разработчиками'
  ]

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <Close className={styles.close} onClick={onClose} />

        <header className={styles.modal__header}>
          <h1 className={styles.modal__title}>Системный аналитик</h1>
          <p className={styles.modal__description}>
            Связующее звено между бизнес-потребностями и IT-решениями. Именно он
            анализирует требования.
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

export default ModalSystemAnalyst
