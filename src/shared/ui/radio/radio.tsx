'use client'

import { FC, InputHTMLAttributes } from 'react'

import Checked from './assets/checked.svg'
import Unchecked from './assets/unchecked.svg'
import styles from './radio.module.scss'

interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'large' | 'medium' | 'small'
  isDisabled?: boolean
  id: string
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Radio: FC<RadioProps> = ({
  size = 'medium',
  isDisabled = false,
  id,
  checked = false,
  onChange,
  ...rest
}) => {
  return (
    <label
      htmlFor={id}
      className={[
        styles[`input-wrapper`],
        styles[`${size}-input-wrapper`],
        isDisabled ? styles['disabled'] : ''
      ].join(' ')}
    >
      <input
        id={id}
        className={[styles[`input-radio`], styles[`${size}-input-radio`]].join(
          ' '
        )}
        type="radio"
        disabled={isDisabled}
        checked={checked}
        onChange={onChange}
        {...rest}
      />

      <div className={styles[`radio-svg-wrapper`]}>
        <Unchecked
          className={[
            styles[`radio-svg`],
            styles[`${size}-radio-svg`],
            checked ? styles['hidden'] : ''
          ].join(' ')}
        />
        <Checked
          className={[
            styles[`radio-svg`],
            styles[`${size}-radio-svg`],
            !checked ? styles['hidden'] : ''
          ].join(' ')}
        />
      </div>
    </label>
  )
}

export default Radio
