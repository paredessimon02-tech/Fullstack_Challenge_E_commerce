import { useNavigate } from 'react-router-dom'
import Button from '../components/atoms/Button'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-4">
      <p className="text-8xl">⚽</p>
      <h1 className="text-6xl font-bold text-gray-300">404</h1>
      <p className="text-gray-500 text-lg">Página no encontrada</p>
      <Button onClick={() => navigate('/')}>Volver al inicio</Button>
    </div>
  )
}

export default NotFound