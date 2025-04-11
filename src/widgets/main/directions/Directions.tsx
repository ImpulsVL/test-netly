import React from 'react'

import Settings from '/src/shared/assets/icons/settings.svg'
import Key from '/src/shared/assets/icons/key.svg'
import Document from '/src/shared/assets/icons/document.svg'
import Direct from '/src/shared/assets/icons/direct.svg'
import Arrow from '/src/shared/assets/icons/arrow.svg'
import Pc from '/src/shared/assets/icons/pc.svg'
import Figma from '/src/shared/assets/icons/figma.svg'
import MainImage from '/src/shared/assets/images/mainPage.svg'

import { ModalName } from '@/app/main/MainPage'

import styles from './Directions.module.scss'

type DirectionsProps = {
  openModal: (modalName: ModalName) => void
}

const Directions: React.FC<DirectionsProps> = ({ openModal }) => {
  return (
    <section className={styles.directions}>
      <MainImage />
      <div className={styles.directions__content}>
        <h2 className={styles.directions__title}>Направления</h2>

        <ul className={styles.directions__list}>
          <li
            className={styles.directions__item__backend}
            onClick={() => openModal('backEnd')}>
            <Settings />
            <p className={styles.directions__itemText}>Backend</p>
          </li>
          <li
            className={styles.directions__item__frontend}
            onClick={() => openModal('frontEnd')}>
            <Key />
            <p className={styles.directions__itemText}>Frontend</p>
          </li>
          <li
            className={styles.directions__item__analyst}
            onClick={() => openModal('systemAnalyst')}>
            <Document />
            <p className={styles.directions__itemText}>System Analyst</p>
          </li>
          <li
            className={styles.directions__item__manager}
            onClick={() => openModal('projectManager')}>
            <Direct />
            <p className={styles.directions__itemText}>Project Manager</p>
          </li>
          <li
            className={styles.directions__item__seo}
            onClick={() => openModal('ceo')}>
            <Arrow />
            <p className={styles.directions__itemText}>CEO</p>
          </li>
          <li
            className={styles.directions__item__test}
            onClick={() => openModal('test')}>
            <Pc />
            <p className={styles.directions__itemText}>Тестировщик</p>
          </li>
          <li
            className={styles.directions__item__designer}
            onClick={() => openModal('designer')}>
            <Figma />
            <p className={styles.directions__itemText}>UI/UX Designer</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Directions
