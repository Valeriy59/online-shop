export type ItemType = {
  _id: string
  title: string
  price: number
  category: {
    _id: string
    name: string
    slug: string
  }
  description: string
  createdBy: {
    role: string
    _id: string
    name: string
  }
  createdAt: string
  updatedAt: string
  slug: string
  image: string
}
