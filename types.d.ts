type product = {
    id?: string,
    name: string,
    photo: string,
    stock: number,
    price: number,
    discount: number,
    discription: string,
    category: category
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
    id: number;
    name: string;
    description: string;
    price: number;
    discount: number;
    imageUrl: string;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
    brandId: number;
    categoryId: number;
    userId: number;
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

type mySession = {
    id: string,
    name: string,
    email: string
} | null;

type category = "topwear" | "bottomwear" | "footwear" | "hoodie" | "mousepad" | "mug" | "cap";

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    discount: number;
    imageUrl: string;
    stock: number;
    createdAt: Date;
    updatedAt: Date;
    brandId: number | null;
    categoryId: number | null;
    userId: string;
    imageId: string;
}