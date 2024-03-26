import React, { useEffect, useRef, useState } from 'react'
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
  const inputRef = useRef<HTMLInputElement>(null)

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

  // select box 외부 클릭시 options close
  useEffect(() => {
    if (!openSelectOption) return
    inputRef.current?.focus()
  }, [openSelectOption])

  return (
    <div className="filter-container" id="filter-container">
      <button
        onMouseDown={() =>
          // blur 이벤트 순서 이슈로 timeout 추가
          setTimeout(() => {
            !openSelectOption && setOpenSelectOption(true)
          })
        }
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
      {/* select box 외부 클릭시 options close 를 위한 blur 감지 */}
      <input onBlur={() => setOpenSelectOption(false)} ref={inputRef} />
    </div>
  )
}
