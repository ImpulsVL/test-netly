'use client'

import { FC, useEffect, useRef, useState, HTMLAttributes } from 'react'

import IconSelect from '../../../assets/icons/check-select.svg'
import IconClose from '../../../assets/icons/x-select.svg'

import styles from './Select.module.scss'

interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'large' | 'medium' | 'small'
  elements?: string[]
  placeholder?: string
  topLabel?: string
  bottomLabel?: string
  id?: string
}

const Select: FC<SelectProps> = ({
  size = 'medium',
  elements = [
    'Первый вариант',
    'Второй вариант',
    'Третий вариант',
    'Четвертый вариант',
    'Пятый вариант'
  ],
  placeholder = 'Dropdown',
  topLabel = 'Top Label',
  bottomLabel = 'Bottom Label',
  id
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectValue, setSelectValue] = useState<string>(placeholder)
  const selectRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (element: string) => {
    setSelectValue(element)
    setIsOpen(false)
  }

  const resetSelection = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectValue(placeholder)
  }

  const toggleDropdown = () => {
    setIsOpen(prev => !prev)
  }

  return (
    <div className={styles['select-wrapper']} ref={selectRef}>
      <label
        className={[styles[`${size}-select-text`], styles['select-label']].join(
          ' '
        )}
        htmlFor={id}
      >
        {topLabel}
      </label>

      <div
        className={styles['select-opener']}
        onClick={toggleDropdown}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        id={id}
      >
        <span
          className={[
            styles['select-text'],
            styles[`${size}-select-text`]
          ].join(' ')}
        >
          {selectValue}
        </span>
        {selectValue !== placeholder ? (
          <IconClose
            className={styles['select-svg']}
            onClick={resetSelection}
            aria-label="Clear selection"
          />
        ) : (
          <IconSelect className={styles['select-svg']} />
        )}
      </div>

      {isOpen && (
        <ul
          className={styles['select-list']}
          role="listbox"
          style={{
            maxHeight: `${Math.min(elements.length, 4) * 44}px`
          }}
        >
          {elements.map((element, index) => (
            <li
              key={index}
              className={styles['select-element']}
              onClick={() => handleSelect(element)}
              role="option"
              aria-selected={selectValue === element}
            >
              <span className={styles['select-button']}>{element}</span>
            </li>
          ))}
        </ul>
      )}

      {bottomLabel && (
        <span
          className={[
            styles['bottom-label'],
            styles[`bottom-${size}-label`]
          ].join(' ')}
        >
          {bottomLabel}
        </span>
      )}
    </div>
  )
}

export default Select
