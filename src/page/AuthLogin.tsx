import { useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import '../styles/page/auth-login.css';

const AuthLogin = () => {
  const toast = useRef<Toast>(null);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'operator'
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const showError = (message: string) => {
    toast.current?.show({
      severity: 'error',
      summary: 'Error',
      detail: message,
      life: 3000,
    });
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password, role } = formData;
  
    const apiUrl = import.meta.env.VITE_API_URL_BACKEND;
  
    try {
      const response = await fetch(`${apiUrl}users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, role }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        showError(errorData.error || 'Credenciales incorrectas.');
        return;
      }
  
      const data = await response.json();
  
      // Guardar token en localStorage o manejar autenticación
      localStorage.setItem('authToken', data.token);
  
      // Redirigir al usuario al dashboard
      if (formData.role !== 'operator') {
        navigate('/dashboard');
      } else {
        navigate('/inventory');
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      showError(`Ocurrió un problema: ${errorMessage}`);
    }
  };      

  return (
    <div className="form-login">
      <Toast ref={toast} />
      <h2>Iniciar Sesión || Inventory Manager</h2>
      <span>Accede para gestionar tu inventario de manera sencilla.</span>
      <span>
        ¿No tienes una cuenta?,{' '}
        <NavLink to="/register" className="btn-to-register">
          Regístrate aquí
        </NavLink>
      </span>

      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <Button 
          type="submit" 
          label="Iniciar sesión" 
          className="btn-submit" 
        />
      </form>
    </div>
  );
};

export default AuthLogin;
