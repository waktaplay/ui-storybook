import React, { useEffect, useMemo, useState } from 'react'
import './filter.css'
import arrow_small_down from './../assets/arrow_small_down.svg'
import { FilterBase } from './FilterBase'

interface FilterProps {
  /**
   * On Value Change Handler
   */
  onChange?: (value: string) => void
}

/**
 * Primary UI component for user interaction
 */
export const FilterAlign = ({ onChange }: FilterProps) => {
  const [selectOption, setSelectOption] = useState<number>(0)
  const options = useMemo(() => [{ text: '최신순', value: 'new' }], [])

  useEffect(() => {
    if (!onChange) return
    onChange(options[selectOption].value)
  }, [selectOption, options, onChange])

  return (
    <FilterBase>
      {options[selectOption].text}
      <img src={arrow_small_down} alt="" className="filter-arrow" />
    </FilterBase>
  )
}
