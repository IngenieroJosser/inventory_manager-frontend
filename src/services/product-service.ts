const API_BASE_URL = `${import.meta.env.VITE_API_URL_BACKEND}`;

export async function createProduct(product: string) {
    try {
        const response = await fetch(`${API_BASE_URL}product/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })

        if (!response.ok) {
            throw new Error(`Error al obtener los productos ${response}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function getProduct() {
    try {
        const response = await fetch(`${API_BASE_URL}product/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            const errorDetails = await response.json();
            throw new Error(`Error ${response.status}: ${errorDetails.message || response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener productos:", error);
        throw error;
    }
}


export async function getLowStock() {
    try {
        const response = await fetch(`${API_BASE_URL}product/low-stock`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            throw new Error(`Error al obtener el stock del producto`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

