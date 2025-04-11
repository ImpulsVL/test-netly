'use client'

import { useState } from 'react'

import ModalBackEnd from '@/shared/ui/modal/main/BackEnd/BackEnd'
import ModalCeo from '@/shared/ui/modal/main/Ceo/Ceo'
import ModalDesigner from '@/shared/ui/modal/main/Designer/Designer'
import ModalFrontEnd from '@/shared/ui/modal/main/FrontEnd/FrontEnd'
import ModalProjectManager from '@/shared/ui/modal/main/ProjectManager/ProjectManager'
import ModalSystemAnalyst from '@/shared/ui/modal/main/SystemAnalyst/SystemAnalyst'
import ModalTest from '@/shared/ui/modal/main/Test/Test'
import Footer from '@/widgets/footer/footer'
import Header from '@/widgets/header/header'
import Directions from '@/widgets/main/directions/Directions'
import Intership from '@/widgets/main/intership/Intership'
import Stages from '@/widgets/main/stages/Stages'

import styles from './MainPage.module.scss'

export type ModalName =
  | 'systemAnalyst'
  | 'projectManager'
  | 'frontEnd'
  | 'backEnd'
  | 'test'
  | 'ceo'
  | 'designer'

const MainPage = ({}) => {
  const [modalStates, setModalStates] = useState({
    systemAnalyst: false,
    projectManager: false,
    frontEnd: false,
    backEnd: false,
    test: false,
    ceo: false,
    designer: false
  })

  const openModal = (modalName: ModalName) => {
    setModalStates(prev => ({ ...prev, [modalName]: true }))
  }

  const closeModal = (modalName: ModalName) => {
    setModalStates(prev => ({ ...prev, [modalName]: false }))
  }

  return (
    <div className={styles.mainPage}>
      <Header />

      <main className={styles.main}>
        <h1 className="visualy__hidden">Акадимя Абдрашитова</h1>

        <Directions openModal={openModal} />

        <Intership />

        <Stages />

        {modalStates.systemAnalyst && (
          <ModalSystemAnalyst onClose={() => closeModal('systemAnalyst')} />
        )}
        {modalStates.projectManager && (
          <ModalProjectManager onClose={() => closeModal('projectManager')} />
        )}
        {modalStates.frontEnd && (
          <ModalFrontEnd onClose={() => closeModal('frontEnd')} />
        )}
        {modalStates.backEnd && (
          <ModalBackEnd onClose={() => closeModal('backEnd')} />
        )}
        {modalStates.test && <ModalTest onClose={() => closeModal('test')} />}
        {modalStates.ceo && <ModalCeo onClose={() => closeModal('ceo')} />}
        {modalStates.designer && (
          <ModalDesigner onClose={() => closeModal('designer')} />
        )}
      </main>

      <Footer />
    </div>
  )
}

export default MainPage
