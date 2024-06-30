import { useEffect, useState } from "react";
import { fetchProducts } from "../utils";
import ProductCard from '../components/productCard'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const response = await fetchProducts();
            setProducts(response);
        };
        getProducts().catch((e) => console.error('we have an error', e));
    }, []);
    return (
        <div className="product-cont">
            <div className="category-select">

            </div>
            <div className="product-card-cont">
                {products.length > 0 
                && products.map((product) => product.category !== 'jewelery' && product.category !== 'electronics' && 
                    <ProductCard 
                        id={product.id}
                        rating={product.rating}
                        img={product.image}
                        categoryName={product.category}
                        productName={product.title}
                        description={product.description}
                        price={product.price}
                    />
                )}
            </div>
        </div>
    )
}

export default Products;