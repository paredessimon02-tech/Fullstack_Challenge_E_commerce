import { useNavigate } from 'react-router-dom'
import Navbar from '../components/organisms/Navbar'
import Button from '../components/atoms/Button'
import useCartStore from '../store/cartStore'

const Checkout = () => {
  const { items, getTotal, clearCart } = useCartStore()
  const navigate = useNavigate()

  const handleConfirm = () => {
    alert('¡Compra realizada con éxito! 🎉⚽')
    clearCart()
    navigate('/')
  }

  if (items.length === 0) return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <p className="text-gray-400 text-xl">No tienes productos en el carrito 😕</p>
        <Button onClick={() => navigate('/')}>Ver jerseys</Button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">📋 Resumen de compra</h1>

        <div className="bg-white rounded-lg shadow p-6">
          {items.map(item => (
            <div key={item.id} className="flex justify-between items-center py-3 border-b">
              <div>
                <p className="font-medium text-sm">{item.title}</p>
                <p className="text-xs text-gray-500">{item.description}</p>
                <p className="text-xs text-gray-400">Cantidad: {item.qty}</p>
              </div>
              <p className="font-bold text-green-600">
                ${(item.price * item.qty).toLocaleString('es-CO')}
              </p>
            </div>
          ))}

          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-bold">Total:</p>
            <p className="text-xl font-bold text-green-600">
              ${getTotal().toLocaleString('es-CO')}
            </p>
          </div>
        </div>

        <div className="mt-6 flex gap-2 justify-end">
          <Button variant="secondary" onClick={() => navigate('/cart')}>Volver al carrito</Button>
          <Button onClick={handleConfirm}>Confirmar compra 🎉</Button>
        </div>
      </div>
    </div>
  )
}

export default Checkout