import React, { memo } from 'react'
import s from './Item.module.css'
import { Badge } from '../Badge/Badge'

type ItemPropsType = {
  item: any
}
export const Item = memo(({ item }: ItemPropsType) => {
  return (
    <section className={s.itemContainer}>
      <div className={s.itemImageContainer}>
        <img src={'https://jjji.ru/600x600'} alt="Image: item" className={s.itemImage} />
      </div>
      <span className={s.itemName}>{item.title}</span>
      <div className={s.itemCategory}>{item.category.name}</div>
      <div className={s.itemBadge}>
        <Badge value={item.price} />
      </div>
    </section>
  )
})
