import React, { useState } from 'react'

import { Button } from '@/shared/ui/Button'

import Close from '../../../../assets/icons/close.svg'

import styles from './Ceo.module.scss'

interface ModalSystemAnalystProps {
  onClose: () => void
}

const ModalCeo: React.FC<ModalSystemAnalystProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'requirements' | 'tasks'>(
    'requirements'
  )

  const requirements = [
    'Знание основ стратегического управления и бизнес-планирования',
    'Опыт работы с финансовыми показателями и понимание бухгалтерского учёта',
    'Знание принципов маркетинга и продаж',
    'Опыт работы с инструментами аналитики и управления проектами',
    'Умение проводить анализ конкурентной среды и разрабатывать стратегии роста',
    'Умение принимать решения на основе данных'
  ]

  const tasks = [
    'Управление командой, координация работы подразделений',
    'Участие в принятии ключевых решений по продуктам и услугам',
    'Разработка стратегии развития IT стартапа',
    'Адаптация бизнес-стратегий',
    'Анализ рыночных тенденций '
  ]

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <Close className={styles.close} onClick={onClose} />

        <header className={styles.modal__header}>
          <h1 className={styles.modal__title}>СЕО</h1>
          <p className={styles.modal__description}>
            Специалист, определяет стратегическое направление компании, управляя
            бизнес-процессами и принимая ключевые решения.
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

export default ModalCeo
