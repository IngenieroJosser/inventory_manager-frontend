import { useState, useEffect } from "react";

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Verifica el token en tiempo real
        const token = localStorage.getItem("authToken");
        setIsAuthenticated(!!token);
    }, []);

    const logOut = () => {
        // Función de cierre de sesión
        localStorage.removeItem("authToken");
        setIsAuthenticated(false);
    };

    return { isAuthenticated, logOut };
};
