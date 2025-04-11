import React, { useState } from 'react'

import { Button } from '@/shared/ui/Button'

import Close from '../../../../assets/icons/close.svg'

import styles from './Test.module.scss'

interface ModalSystemAnalystProps {
  onClose: () => void
}

const ModalTest: React.FC<ModalSystemAnalystProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'requirements' | 'tasks'>(
    'requirements'
  )

  const requirements = [
    'Знание инструментов тестирования (Postman, Swagger)',
    'Понимание работы методологий разработки ПО(Agile, Scrum)',
    'Знание методов и техник тестирования',
    'Понимание принципов работы с API',
    'Основы написания тест-кейсов и чек-листов',
    'Способность грамотно описывать тест-кейсы, составлять чек-листы и баг-репорты '
  ]

  const tasks = [
    'Разработка тестовой документации',
    'Проведение ручного тестирования',
    'Проведение автоматизированного тестирования',
    'Документация багов',
    'Взаимодействие с командой для решения проблем'
  ]

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <Close className={styles.close} onClick={onClose} />

        <header className={styles.modal__header}>
          <h1 className={styles.modal__title}>Тестировщик (QA-специалист)</h1>
          <p className={styles.modal__description}>
            Это профессионал, отвечающий за качество программного обеспечения.
            Главная задача QA-специалиста — находить ошибки и недочеты до того,
            как продукт попадет к пользователю.
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

export default ModalTest
