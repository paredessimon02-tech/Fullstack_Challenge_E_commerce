import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import users from '../mockdata/users'

const useAuthStore = create(persist(
  (set) => ({
    user: null,
    login: (email, password) => {
      const found = users.find(u => u.email === email && u.password === password)
      if (found) { set({ user: found }); return true }
      return false
    },
    register: (name, email, password) => {
      const newUser = { id: Date.now(), name, email, password }
      users.push(newUser)
      set({ user: newUser })
    },
    logout: () => set({ user: null }),
  }),
  { name: 'auth-storage' }
))

export default useAuthStore