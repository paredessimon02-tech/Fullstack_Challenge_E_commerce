import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Input from '../components/atoms/Input'
import Button from '../components/atoms/Button'
import useAuthStore from '../store/authStore'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login } = useAuthStore()
  const navigate = useNavigate()

  const handleSubmit = () => {
    const ok = login(email, password)
    if (ok) navigate('/')
    else setError('Credenciales incorrectas ❌')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow w-full max-w-sm flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center">⚽ Iniciar sesión</h2>

        {error && (
          <p className="text-red-500 text-sm text-center bg-red-50 py-2 rounded">
            {error}
          </p>
        )}

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

        <Button onClick={handleSubmit}>Entrar</Button>

        <p className="text-sm text-center text-gray-500">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login