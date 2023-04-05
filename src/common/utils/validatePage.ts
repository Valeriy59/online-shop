export const validatePage = (
  page: number,
  pagesCount: number,
  paginate: (value: number) => void
) => {
  if (page < 1) {
    paginate(1)
  } else if (page > pagesCount) {
    paginate(pagesCount)
  } else {
    paginate(page)
  }
}
