const API_URL = process.env.REACT_APP_API_URL_BACKEND || '';

/**
 * Realiza una petición POST al backend.
 * @param endpoint - El endpoint al que se enviará la petición (por ejemplo, 'auth/login').
 * @param body - El cuerpo de la petición en formato JSON.
 * @returns - La respuesta JSON del servidor.
 * @throws - Lanza un error si la respuesta no es exitosa.
 */
export const postRequest = async (endpoint: string, body: Record<string, unknown>) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error en la petición');
    }

    return await response.json();
  } catch (error) {
    console.error('Error en postRequest:', error);
    throw error;
  }
};

/**
 * Realiza una petición GET al backend.
 * @param endpoint - El endpoint al que se enviará la petición (por ejemplo, 'users').
 * @returns - La respuesta JSON del servidor.
 * @throws - Lanza un error si la respuesta no es exitosa.
 */
export const getRequest = async (endpoint: string) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error en la petición');
    }

    return await response.json();
  } catch (error) {
    console.error('Error en getRequest:', error);
    throw error;
  }
};
