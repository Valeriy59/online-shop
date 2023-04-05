import React, { ChangeEvent } from 'react'
import s from './Pagination.module.css'
import { CustomButton } from '../../common/components/CustomButton/CustomButton'

type PaginationPropsType = {
  itemsPerPage: number
  currentPage: number
  totalItems: number
  paginate: (pageNumber: number) => void
  handlePrev: () => void
  handleNext: () => void
}

export const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
  handleNext,
  handlePrev,
}: PaginationPropsType) => {
  const pageNumbers = []
  const pagesCount = Math.ceil(totalItems / itemsPerPage)

  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    paginate(+event.currentTarget.value)
  }

  return (
    <div className={s.paginationContainer}>
      <span>Current page: </span>
      <input className={s.input} value={currentPage} onChange={handleChange} />
      <CustomButton onClick={handlePrev} disabled={currentPage === 1}>{`Prev`}</CustomButton>
      <ul className={s.pagesContainer}>
        {pageNumbers.map((page) => (
          <li
            className={currentPage === page ? s.pageItem + ' ' + s.active : s.pageItem}
            key={page}
          >
            <a href={'!#'} onClick={() => paginate(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
      <CustomButton
        onClick={handleNext}
        disabled={currentPage === pagesCount}
      >{`Next`}</CustomButton>
    </div>
  )
}
