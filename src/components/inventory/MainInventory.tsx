import React, { useState, useEffect } from 'react';
import "../../styles/page/inventory/main-inventory.css";
import { Chart } from 'primereact/chart';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { getAllOrder } from '../../services/order-service';
import { getProduct } from '../../services/product-service'

// Pedido
interface Order {
    _id: string;
    productId: string;
    quantity: number;
    supplier: string;
    orderDate: string;
    status: string;
}

// Productos
export interface IVariant {
    size?: string;
    color?: string;
    stock: number;
}

interface Product {
    code: string;
    name: string;
    category: string;
    price: number;
    variants: IVariant[];
    lowStockThreshold: number;
    image: Buffer;
    description: string;
    isActive: boolean;
}

const MainInventory: React.FC = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [orders, setOrders] = useState<Order[]>([]);
    const [product, setProduct] = useState<Product[]>([]);
    

    useEffect(() => {
        const textColor = '#333';
        const textColorSecondary = '#666';
        const surfaceBorder = '#ddd';

        const data = {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
            datasets: [
                {
                    label: 'Pedidos',
                    backgroundColor: '#007bff',
                    borderColor: '#007bff',
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
            ]
        };

        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        display: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    useEffect(() => {
        const fetchOrders = async () => {
            const data = await getAllOrder();
            setOrders(data);
        };

        const fetchProduct = async () => {
            const data = await getProduct();
            const activeProducts = data.filter((product: Product) => product.isActive);
            setProduct(activeProducts);
        };

        fetchOrders();
        fetchProduct();
    }, []);

    const variantTemplate = (rowData: Product) => (
        <ul>
            {rowData.variants.map((variant, index) => (
                <li key={index}>
                    Talla: {variant.size || 'N/A'}, Color: {variant.color || 'N/A'}, Stock: {variant.stock}
                </li>
            ))}
        </ul>
    );

    const imageTemplate = (rowData: Product) => {
        const imageSrc = `data:image/jpeg;base64,${btoa(String.fromCharCode(...new Uint8Array(rowData.image)))}`;
        return <img src={imageSrc} alt={rowData.name} style={{ width: '50px', height: '50px' }} />;
    };

    const isActiveTemplate = (rowData: Product) => (rowData.isActive ? 'Activo' : 'Inactivo');

    return (
        <main>
            {/* Gráfica y tabla de pedidos */}
            <section className="container-order">
                <div className="card">
                    <Chart type="bar" data={chartData} options={chartOptions} />
                </div>
                <div className="card-dataTable">
                    <DataTable value={orders} tableStyle={{ width: '100%' }}>
                        <Column field="_id" header="ID"></Column>
                        <Column field="quantity" header="Cantidad"></Column>
                        <Column field="supplier" header="Proveedor"></Column>
                        <Column field="orderDate" header="Fecha de pedido"></Column>
                        <Column field="status" header="Estado"></Column>
                    </DataTable>
                </div>
            </section>

            {/* Gráfica y tabla de productos */}
            <section className="container-product">
                <div className="card">
                    <Chart type="bar" data={chartData} options={chartOptions} />
                </div>
                <div className="card-dataTable">
                    <DataTable value={product} tableStyle={{ width: '100%' }}>
                        <Column field="code" header="Código"></Column>
                        <Column field="name" header="Nombre"></Column>
                        <Column field="category" header="Categoría"></Column>
                        <Column field="price" header="Precio"></Column>
                        <Column body={variantTemplate} header="Variantes"></Column>
                        <Column field="lowStockThreshold" header="Stock bajo"></Column>
                        <Column body={imageTemplate} header="Imagen"></Column>
                        <Column field="description" header="Descripción"></Column>
                        <Column body={isActiveTemplate} header="Estado"></Column>
                    </DataTable>
                </div>
            </section>
        </main>
    );
};

export default MainInventory;
