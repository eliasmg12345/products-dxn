export interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
    value: number;
}

export interface Metric {
    productId: string;
    cantidad: number;
}