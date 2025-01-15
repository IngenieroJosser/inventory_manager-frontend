import '../styles/page/auth-register.css';
import { NavLink } from 'react-router-dom';

const AuthRegister = () => {
  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const confirmPassword = (document.getElementById('confirmPassword') as HTMLInputElement).value;

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL_BACKEND}/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Error al registrar usuario');
      }

      alert('Registro exitoso. Ahora puedes iniciar sesión.');
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="form-register">
      <h2>Registro || Inventory Manager</h2>
      <span>Regístrate para comenzar a gestionar tu inventario fácilmente.</span>
      <span>¿Ya tienes una cuenta?, <NavLink to='/' className='btn-to-register'>Inicia sesión aquí</NavLink></span>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input type="text" name="username" id="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input type="password" name="confirmPassword" id="confirmPassword" required />
        </div>

        <button type="submit" className="btn-submit">Registrarse</button>
      </form>
    </div>
  );
};

export default AuthRegister;
