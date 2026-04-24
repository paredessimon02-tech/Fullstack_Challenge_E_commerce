import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/organisms/Navbar'
import Button from '../components/atoms/Button'
import useProductStore from '../store/productStore'
import useCartStore from '../store/cartStore'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const products = useProductStore(s => s.products)
  const addToCart = useCartStore(s => s.addToCart)
  const product = products.find(p => p.id === Number(id))

  if (!product) return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <p className="text-gray-400 text-xl">😕 Jersey no encontrado</p>
        <Button onClick={() => navigate('/')}>Volver al inicio</Button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow mt-8">
        <img src={product.image} alt={product.title} className="w-full md:w-80 object-contain" />
        <div className="flex flex-col gap-4">
          <span className="text-xs text-blue-600 font-semibold uppercase">{product.category}</span>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-500">{product.description}</p>
          <p className="text-3xl font-bold text-green-600">
            ${product.price.toLocaleString('es-CO')}
          </p>
          <p className="text-sm text-yellow-500">
            ⭐ {product.rating?.rate} ({product.rating?.count} reseñas)
          </p>
          <div className="flex gap-2 mt-4">
            <Button onClick={() => addToCart(product)}>Agregar al carrito 🛒</Button>
            <Button variant="secondary" onClick={() => navigate('/')}>Volver</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail