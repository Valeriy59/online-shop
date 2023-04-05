import React, { useEffect, useState } from 'react'
import { Item } from '../../common/components/Item/Item'
import s from './Main.module.css'
import { Pagination } from '../Pgination/Pagination'
import { getItemsList } from '../../common/api/api'
import { Loader } from '../../common/components/Loader/Loader'
import { ItemType } from '../../common/types/types'

export const Main = () => {
  const [items, setItems] = useState<ItemType[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(4)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    getItemsList().then((result) => {
      setItems(result.data)
      setIsLoading(false)
    })
  }, [])

  const lastItem = currentPage * itemsPerPage
  const firstItem = lastItem - itemsPerPage
  const currentItems = items.slice(firstItem, lastItem)

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  const handleNext = () => {
    setCurrentPage((prev) => prev + 1)
  }
  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1)
  }

  return (
    <div className={s.contentContainer}>
      {!isLoading ? (
        <div className={s.productCardsContainer}>
          {currentItems.map((elem) => {
            return <Item item={elem} key={elem._id} />
          })}
        </div>
      ) : (
        <Loader />
      )}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
        currentPage={currentPage}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  )
}
