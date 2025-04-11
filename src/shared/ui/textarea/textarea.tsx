'use client'

import { FC, TextareaHTMLAttributes } from 'react'

import styles from './textarea.module.scss'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: 'large' | 'medium' | 'small'

  isDisabled?: boolean
  isError?: boolean

  topLabel?: string
  bottomLabel?: string
}

const Textarea: FC<TextareaProps> = ({
  size = 'medium',
  isDisabled = false,
  isError = false,
  topLabel = 'label',
  bottomLabel = 'This is a helper text',
  id,
  ...rest
}) => {
  return (
    <div className={styles[`textarea-container`]}>
      <label
        className={[styles[`top-label`], styles[`top-${size}-label`]].join(' ')}
        htmlFor={id}>
        {size} {topLabel}
      </label>
      <textarea
        id={id}
        className={[
          styles[`textarea`],
          styles[`${size}-textarea`],
          styles[`${isError && 'textarea-error'}`]
        ].join(' ')}
        placeholder={`${size} text area`}
        disabled={isDisabled}
        {...rest}
      ></textarea>
      <span
        className={[
          styles[`bottom-label`],
          styles[`bottom-${size}-label`],
          styles[`${isError && 'text-error'}`],
          styles[`${isDisabled && 'text-disabled'}`]
        ].join(' ')}>
        {bottomLabel}
      </span>
    </div>
  )
}

export default Textarea
