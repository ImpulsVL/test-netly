import Dzen from '../../shared/assets/icons/dzen.svg'
import Mail from '../../shared/assets/icons/mail.svg'
import Telegram from '../../shared/assets/icons/telegram.svg'
import Vk from '../../shared/assets/icons/vk.svg'
import LogoAcademi from '../../shared/assets/images/logoAcademi.svg'

import styles from './footer.module.scss'

const Footer = ({}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__first}>
        <LogoAcademi />

        <ul className={styles.footer__list}>
          <li>
            <a className={styles.footer__item} href="#">
              © 2024 Академия Абдрашитова
            </a>
          </li>
          <li>
            <a className={styles.footer__item} href="#">
              ООО «Рэд Кэт»
            </a>
          </li>
          <li>
            <a className={styles.footer__item} href="#">
              ИНН 7000010643
            </a>
          </li>
        </ul>
      </div>

      <ul className={styles.footer__second}>
        <li>
          <a className={styles.footer__link} href="#">
            <Mail />
            По всем вопросам
          </a>
        </li>

        <li>
          <a className={styles.footer__link} href="#">
            <Vk />
            Сообщество во ВКонтакте
          </a>
        </li>

        <li>
          <a className={styles.footer__link} href="#">
            <Telegram />
            Канал в Telegram
          </a>
        </li>

        <li>
          <a className={styles.footer__link} href="#">
            <Dzen />
            Мы на Дзене
          </a>
        </li>
      </ul>

      <div className={styles.footer__third}>
        <p className={styles.footer__text}>
          Политика обработки персональных данных
        </p>
      </div>
    </footer>
  )
}

export default Footer
