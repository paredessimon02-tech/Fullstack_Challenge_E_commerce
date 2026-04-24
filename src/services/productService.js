import { create } from 'zustand'
import mockProducts from '../mockdata/products'
import { fetchProducts } from '../services/productService'

const useProductStore = create((set, get) => ({
  products: mockProducts,
  search: '',
  category: 'todos',
  currentPage: 1,
  perPage: 8,
  loading: false,

  setSearch: (search) => set({ search, currentPage: 1 }),
  setCategory: (category) => set({ category, currentPage: 1 }),
  setPage: (page) => set({ currentPage: page }),

  loadFromAPI: async () => {
    try {
      set({ loading: true })
      const { data } = await fetchProducts()
      set({ products: data, loading: false })
    } catch (error) {
      console.error('Error cargando API, usando mockdata', error)
      set({ loading: false })
    }
  },

  getFiltered: () => {
    const { products, search, category } = get()
    return products.filter(p => {
      const matchSearch = p.title.toLowerCase().includes(search.toLowerCase())
      const matchCat = category === 'todos' || p.category === category
      return matchSearch && matchCat
    })
  },

  getPaginated: () => {
    const { currentPage, perPage } = get()
    const filtered = get().getFiltered()
    const start = (currentPage - 1) * perPage
    return filtered.slice(start, start + perPage)
  },

  getTotalPages: () => Math.ceil(get().getFiltered().length / get().perPage),
}))

export default useProductStore