import { useNavigate } from 'react-router-dom'
import Navbar from '../components/organisms/Navbar'
import Button from '../components/atoms/Button'
import useCartStore from '../store/cartStore'

const Cart = () => {
  const { items, removeFromCart, updateQty, getTotal } = useCartStore()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">🛒 Tu carrito</h1>

        {items.length === 0
          ? (
            <div className="text-center py-12 flex flex-col items-center gap-4">
              <p className="text-gray-400 text-lg">Tu carrito está vacío 😕</p>
              <Button onClick={() => navigate('/')}>Ver jerseys</Button>
            </div>
          )
          : (
            <>
              {items.map(item => (
                <div key={item.id} className="flex gap-4 items-center bg-white rounded-lg p-4 mb-3 shadow-sm">
                  <img src={item.image} className="w-16 h-16 object-contain" />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.description}</p>
                    <p className="text-green-600 font-bold">
                      ${item.price.toLocaleString('es-CO')}
                    </p>
                  </div>
                  <input
                    type="number"
                    min={1}
                    value={item.qty}
                    onChange={e => updateQty(item.id, Number(e.target.value))}
                    className="w-14 border rounded px-2 py-1 text-center"
                  />
                  <Button variant="danger" onClick={() => removeFromCart(item.id)}>✕</Button>
                </div>
              ))}

              <div className="text-right mt-6 flex flex-col items-end gap-3">
                <p className="text-xl font-bold">
                  Total: ${getTotal().toLocaleString('es-CO')}
                </p>
                <div className="flex gap-2">
                  <Button variant="secondary" onClick={() => navigate('/')}>Seguir comprando</Button>
                  <Button onClick={() => navigate('/checkout')}>Ir al Checkout ✅</Button>
                </div>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Cart