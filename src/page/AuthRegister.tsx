import { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
import '../styles/page/auth-register.css';

const AuthRegister = () => {
  const toast = useRef<Toast>(null);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    role: 'operator',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const showSuccess = () => {
    toast.current?.show({
      severity: 'success',
      summary: 'Registro exitoso',
      detail: 'Tu cuenta ha sido creada. Ahora puedes iniciar sesión.',
      life: 3000,
    });
  };

  const showInfo = (message: string) => {
    toast.current?.show({
      severity: 'info',
      summary: 'Información',
      detail: message,
      life: 3000,
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

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password, confirmPassword, role } = formData;

    if (password !== confirmPassword) {
      showInfo('Las contraseñas no coinciden.');
      return;
    }

    const apiUrl = import.meta.env.VITE_API_URL_BACKEND;

    try {
      const response = await fetch(`${apiUrl}users/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password, role }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        showInfo(errorData.error || 'El usuario ya está registrado.');
        return;
      }

      showSuccess();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      showError(`Ocurrió un problema: ${errorMessage}`);
    }
  };

  return (
    <div className="form-register">
      <Toast ref={toast} />
      <h2>Registro || Inventory Manager</h2>
      <span>Regístrate para comenzar a gestionar tu inventario fácilmente.</span>
      <span>
        ¿Ya tienes una cuenta?,{' '}
        <NavLink to="/" className="btn-to-register">
          Inicia sesión aquí
        </NavLink>
      </span>

      <form onSubmit={handleRegister}>
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

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <Button type="submit" label="Registrarse" className="btn-submit" />
      </form>
    </div>
  );
};

export default AuthRegister;
