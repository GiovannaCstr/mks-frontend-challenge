export interface Products {
    brand: string;
    createdAt: string;
    description: string;
    id: number;
    name: string;
    photo: string;
    price: string;
    updatedAt: string;
}

export interface ProductsInCart extends Products {
    quantity: number
}