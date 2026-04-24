import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCartStore = create(persist(
  (set, get) => ({
    items: [],
    addToCart: (product) => {
      const exists = get().items.find(i => i.id === product.id)
      if (exists) {
        set({ items: get().items.map(i =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        )})
      } else {
        set({ items: [...get().items, { ...product, qty: 1 }] })
      }
    },
    removeFromCart: (id) => set({ items: get().items.filter(i => i.id !== id) }),
    updateQty: (id, qty) => set({ items: get().items.map(i => i.id === id ? { ...i, qty } : i) }),
    clearCart: () => set({ items: [] }),
    getTotal: () => get().items.reduce((acc, i) => acc + i.price * i.qty, 0),
  }),
  { name: 'cart-storage' }
))

export default useCartStore