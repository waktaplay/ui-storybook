import React, { useEffect, useState } from 'react'
import './filter.css'
import arrow_small_down from './../assets/arrow_small_down.svg'
import { FilterBase } from './FilterBase'

interface FilterProps {
  /**
   * On Value Change Handler
   */
  onChange?: (value: string) => void
  options: Array<{
    label: string
    value: string
  }>
  value?: string
}

/**
 * Primary UI component for user interaction
 */
export const FilterAlign = ({ onChange, options, value }: FilterProps) => {
  const [selectOption, setSelectOption] = useState<number>(0)

  useEffect(() => {
    if (!onChange) return
    onChange(options[selectOption].value)
  }, [selectOption, options, onChange])

  useEffect(() => {
    if (!value) return
    const index = options.findIndex((item) => item.value === value)
    if (index === -1) {
      console.error('options 에 일치하는 value 가 없습니다.')
      return
    }
    setSelectOption(index)
  }, [value, options])

  return (
    <FilterBase>
      {options[selectOption].label}
      <img src={arrow_small_down} alt="" className="filter-arrow" />
    </FilterBase>
  )
}
