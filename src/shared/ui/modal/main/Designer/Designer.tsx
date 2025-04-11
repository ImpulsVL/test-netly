import React, { useState } from 'react'

import { Button } from '@/shared/ui/Button'

import Close from '../../../../assets/icons/close.svg'

import styles from './Designer.module.scss'

interface ModalSystemAnalystProps {
  onClose: () => void
}

const ModalDesigner: React.FC<ModalSystemAnalystProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'requirements' | 'tasks'>(
    'requirements'
  )

  const requirements = [
    'Умение учитывать потребности пользователей',
    'Знание инструментов дизайна (Figma, Adobe X или Sketch)',
    'Понимание принципов юзабилити, пользовательского опыта (UX)',
    'Знание основ типографики, цветовой теории и композиции',
    'Опыт создания прототипов и макетов',
    'Креативное мышление и способность генерировать новые идеи'
  ]

  const tasks = [
    'Разрабатывать пользовательские интерфейсы',
    'Создавать интерактивные макеты',
    'Проводить исследования пользователей',
    'Анализировать поведение пользователей',
    'Взаимодействовать с командой разработчиков для реализации дизайна'
  ]

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <Close className={styles.close} onClick={onClose} />

        <header className={styles.modal__header}>
          <h1 className={styles.modal__title}>UX/UI Дизайнер</h1>
          <p className={styles.modal__description}>
            Специалист, который отвечает за создание удобных и эстетичных
            интерфейсов для пользователей.
          </p>
        </header>

        <section className={styles.modal__switch}>
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
        </section>

        <section className={styles.modal__bid}>
          <Button buttonSize="large">Подать заявку</Button>
        </section>
      </div>
    </div>
  )
}

export default ModalDesigner
