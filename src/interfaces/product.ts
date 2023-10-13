export interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
}

export interface Metric {
    productId: string;
    cantidad: number;
    name:string;
}