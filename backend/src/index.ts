import { libro, curso } from "./database/Iproducts";
import { ProductManager } from "./class/ProductManager";


//ProductManager
const productManager = new ProductManager();

console.log(productManager.getProducts());

productManager.addProduct(libro);

console.log(productManager.getProducts());

productManager.addProduct(curso);

productManager.getProductById(11);
