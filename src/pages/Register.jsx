import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Input from '../components/atoms/Input'
import Button from '../components/atoms/Button'
import useAuthStore from '../store/authStore'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { register } = useAuthStore()
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (!name || !email || !password) {
      alert('Por favor completa todos los campos ⚠️')
      return
    }
    register(name, email, password)
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow w-full max-w-sm flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center">⚽ Crear cuenta</h2>

        <Input
          placeholder="Nombre completo"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Button onClick={handleSubmit}>Registrarse 🚀</Button>

        <p className="text-sm text-center text-gray-500">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register