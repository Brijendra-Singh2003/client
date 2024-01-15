type product = {
    id: string,
    name: string,
    photo: string,
    stock: number,
    price: number
}

type customer = {
    id: string,
    photo: string,
    name: string,
    gender: "male" | "female" | "other",
    email: string,
    role: "user" | "admin"
}

type transaction = {
    name: string,
    amount: number,
    discount: number,
    quantity: number,
    status: "Processing" | "Shipped" | "Delivered",
}

type item = {
    id: string,
    name: string,
    price: number,
    discount: number,
    image: string,
    rating?: number,
}

type collection = {
    title: string,
    items: item[]
}

type User = {
    id: number;
    email: string;
    name: string | null;
    role: string;
}