import React, { useEffect, useState } from 'react'
import './filter.css'
import arrow_small_down from './assets/arrow_small_down.svg'

interface FilterProps {
  /**
   * On Value Change Handler
   */
  onChange?: () => void
  /**
   * Filter contetnts
   */
  value?: string
}

/**
 * Primary UI component for user interaction
 */
export const Filter = ({ value, ...props }: FilterProps) => {
  const [openSelectOption, setOpenSelectOption] = useState<boolean>(false)
  const toggleOpenSelectOption = () => {
    setOpenSelectOption(!openSelectOption)
  }

  // select box open 시 스크롤 disable
  useEffect(() => {
    const body = document.body
    if (openSelectOption) {
      body.setAttribute('style', 'overflow:hidden;')
    } else {
      body.setAttribute('style', '')
    }
    // unmounted 시 초기화
    return () => {
      body.setAttribute('style', '')
    }
  }, [openSelectOption])

  // select box 외부 클릭시 select box close
  useEffect(() => {
    const clickDetect = (e: MouseEvent) => {
      const filterElement = (e.target as HTMLDivElement).offsetParent
      if (filterElement?.id === 'filter-container') return
      setOpenSelectOption(false)
    }
    window.addEventListener('click', clickDetect)
    // unmounted 시 초기화
    return () => {
      window.removeEventListener('click', clickDetect)
    }
  }, [openSelectOption])

  return (
    <div className="filter-container" id="filter-container">
      <button
        onClick={toggleOpenSelectOption}
        className={[
          `filter-align`,
          openSelectOption ? 'filter-align--active' : '',
        ].join(' ')}
        {...props}
        id="filter-button"
      >
        {value}
        <img src={arrow_small_down} alt="" />
      </button>
    </div>
  )
}
