import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  // Comprobamos si hay un token en localStorage (o cualquier otro mecanismo de autenticación)
  const authToken = localStorage.getItem('authToken');

  if (!authToken) {
    // Si no hay token, redirige a la página de inicio de sesión
    return <Navigate to="/" />;
  }

  // Si el token está presente, mostramos la página solicitada
  return element;
};

export default PrivateRoute;
