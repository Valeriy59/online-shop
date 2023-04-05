import React from 'react'
import s from './Badge.module.css'
import { convertValueToString } from '../../utils/convertValueToString'

type BadgePropsType = {
  value: number
}

export const Badge = ({ value }: BadgePropsType) => {
  return (
    <div className={s.badge}>
      <span>{convertValueToString(value)}</span>
    </div>
  )
}
