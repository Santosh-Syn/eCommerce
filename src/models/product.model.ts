export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    count: number;
}

export interface CartItem extends Product{
    count: number
}