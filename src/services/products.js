import axios from "axios";

export async function getAllProducts(){
    return axios.get('https://dummyjson.com/products') 
}


export async function getProductById(id){
    return axios.get(`https://dummyjson.com/products/${id}`) 
}


export async function getProductByCategory(category){
    return axios.get(`https://dummyjson.com/products/category/${category}`) 
}

export async function getAllCategory(){
    return axios.get('https://dummyjson.com/products/categories') 
}