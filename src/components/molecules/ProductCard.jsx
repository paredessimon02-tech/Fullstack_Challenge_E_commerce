import { useNavigate } from 'react-router-dom'
import Button from '../atoms/Button'
import useCartStore from '../../store/cartStore'

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const addToCart = useCartStore(s => s.addToCart)

  return (
    <div className="border rounded-lg p-4 flex flex-col gap-2 hover:shadow-lg transition bg-white">
      <img src={product.image} alt={product.title} className="h-48 object-contain" />
      <span className="text-xs text-blue-600 font-semibold uppercase">{product.category}</span>
      <h3 className="font-semibold text-sm line-clamp-2">{product.title}</h3>
      <p className="text-xs text-gray-500">{product.description}</p>
      <p className="text-green-600 font-bold">${product.price.toLocaleString('es-CO')}</p>
      <div className="flex gap-2 mt-auto">
        <Button onClick={() => navigate(`/product/${product.id}`)}>Ver</Button>
        <Button onClick={() => addToCart(product)} variant="secondary">+ Carrito</Button>
      </div>
    </div>
  )
}

export default ProductCard