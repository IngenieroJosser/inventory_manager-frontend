const API_BASE_URL = `${import.meta.env.VITE_API_URL_BACKEND}`;

export async function getAllOrder() {
    try {
        const response = await fetch(`${API_BASE_URL}orders/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            throw new Error(`Error al obtener pedidos: ${response}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function addOrder(order:string) {
    try {
        const response = await fetch(`${API_BASE_URL}orders/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })

        if (!response.ok) {
            throw new Error(`Error al añadir una order ${response}`);
        }

        const data = await response.json()
        return data;
    } catch(error) {
        console.error(error);
    }
}

export async function updateOrder(orderId:number, updateData: string) {
    try {
        const response = await fetch(`${API_BASE_URL}/orders/${orderId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })

        if (!response.ok) {
            throw new Error(`Error al actualizar el pedido ${response}`)
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error al actualizar el pedido ${error}`)
    }
}