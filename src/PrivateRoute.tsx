import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

interface PrivateRouteProps {
    element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated === undefined) {
        // Muestra un cargador mientras verificamos la autenticación
        return <div>Cargando...</div>;
    }

    return isAuthenticated ? <>{element}</> : <Navigate to="/" />;
};

export default PrivateRoute;
