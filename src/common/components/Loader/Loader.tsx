import React from 'react'
import loaderImg from '../../assets/images/loading.gif'
import s from './Loader.module.css'

export const Loader = () => {
  return (
    <div className={s.loaderContainer}>
      <img src={loaderImg} alt="loader" />
    </div>
  )
}
