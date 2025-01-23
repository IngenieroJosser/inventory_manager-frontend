const API_BASE_URL = `${import.meta.env.VITE_API_URL_BACKEND}`;

export async function logOut() {
    try {
        // Hacemos una petición al backend para cerrar la sesión
        const response = await fetch(`${API_BASE_URL}users/log-out`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Agregar cualquier cabecera adicional si es necesario (como el token de autenticación)
                // 'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
            },
            credentials: 'include', // Si estás usando cookies para la autenticación
        });

        // Comprobamos la respuesta
        if (response.ok) {
            // Eliminar el token del localStorage u otros lugares donde lo guardes
            localStorage.removeItem('authToken');

            // Retornamos algo si es necesario (por ejemplo, un mensaje de éxito)
            return { success: true, message: 'Sesión cerrada correctamente.' };
        } else {
            throw new Error('Error al cerrar la sesión.');
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            return { success: false, message: error.message };
        } else {
            return { success: false, message: 'Error desconocido.' };
        }
    }
}
