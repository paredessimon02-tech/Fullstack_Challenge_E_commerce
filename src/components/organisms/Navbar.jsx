import { Link } from 'react-router-dom'
import Badge from '../atoms/Badge'
import useCartStore from '../../store/cartStore'
import useAuthStore from '../../store/authStore'

const Navbar = ({ searchValue, onSearch }) => {
  const cartCount = useCartStore(s => s.items.length)
  const { user, logout } = useAuthStore()

  return (
    <nav className="bg-white shadow px-6 py-4 flex items-center gap-4 justify-between">
      <Link to="/" className="text-xl font-bold text-blue-600">⚽ JerseyShop</Link>

      {onSearch && (
        <input
          className="border rounded px-3 py-1 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="🔍 Buscar jerseys..."
          value={searchValue}
          onChange={e => onSearch(e.target.value)}
        />
      )}

      <div className="flex items-center gap-4">
        <Link to="/cart" className="flex items-center gap-1 font-medium">
          🛒 <Badge count={cartCount} />
        </Link>
        {user
          ? <>
              <span className="text-sm text-gray-600">Hola, {user.name}</span>
              <button onClick={logout} className="text-sm text-red-500 hover:underline">Salir</button>
            </>
          : <Link to="/login" className="text-sm text-blue-600 hover:underline">Login</Link>
        }
      </div>
    </nav>
  )
}

export default Navbar