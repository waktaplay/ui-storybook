import React, { useEffect, useMemo, useState } from 'react'
import './filter.css'
import people from './../assets/people.svg'
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
export const FilterMember = ({ onChange }: FilterProps) => {
  // const [selectOption, setSelectOption] = useState<number>(0)
  const [selectMember, setSelectMember] = useState<Array<object>>([{}])

  useEffect(() => {
    if (!onChange) return
    onChange()
  }, [selectMember, setSelectMember, onChange])

  return (
    <div className="filter_member_container">
      {selectMember.length > 0 && (
        <>
          {selectMember.map((member, index) => (
            <div key={index}>임시 chip</div>
          ))}
          <div className="filter_member_middel_line" />
        </>
      )}
      <FilterBase>
        <img src={people} alt="people_icon" />
        멤버 필터
      </FilterBase>
    </div>
  )
}
