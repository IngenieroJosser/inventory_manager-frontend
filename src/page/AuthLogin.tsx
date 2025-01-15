import '../styles/page/auth-login.css';
import { NavLink } from 'react-router-dom';

const AuthLogin = () => {
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL_BACKEND}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Error al iniciar sesión');
      }

      const data = await response.json();
      alert('Inicio de sesión exitoso. Token recibido: ' + data.token);
      localStorage.setItem('token', data.token);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="form-login">
      <h2>Inicio de sesión || Inventory Manager</h2>
      <span>Iniciar sesión con nosotros y comienza a gestionar tu inventario al mejor estilo.</span>
      <span>¿No tienes una cuenta?, <NavLink to='/register' className='btn-to-register'>Comienza registrandote</NavLink></span>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input type="text" name="username" id="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" required />
        </div>

        <button type="submit" className="btn-submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default AuthLogin;
