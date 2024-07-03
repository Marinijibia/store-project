import { useEffect, useState } from "react";
import { fetchProducts, fetchCategoryProducts } from "../utils";
import ProductCard from '../components/productCard'
import { ALLOWED_CAT } from "../routes";
import { useParams } from "react-router-dom";

const Products = ({ setCartItems }) => {
    const { category } = useParams(); 
    const [ allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [ activeCat, setActiveCat] = useState('All')

    const handleFilterProducts = (productCategory = null) => {
        if (productCategory) {
            const filterProducts = allProducts.filter(
                (product) => product.category === productCategory
            );
            setProducts(filterProducts); 
        } else {
           setProducts(allProducts)
        }
        
        
        
    }
    useEffect(() => {
        if (!category) {
            const getProducts = async () => {
                const response = await fetchProducts();
                setProducts(response);
                setAllProducts(response);
            };
            getProducts().catch((e) => console.error('we have an error', e)); 
        } else {
            const getCategoryProduct = async () => {
                const response = await fetchCategoryProducts(category);
                setProducts(response);
            };
            getCategoryProduct().catch((e) => console.error('we have an error', e)); 
        }
        
    }, [category]);


    return (
        <div className="products-cont">
            {!category
            ? (<div className="category-select">
                <span 
                className={`select-cat-span 
                ${activeCat === 'All' 
                ? 'cat-active' : ''}`} 
                onClick={() => {handleFilterProducts(); 
                setActiveCat('All')}}
                >
                    All
                </span>
                <span 
                className={`select-cat-span 
                ${activeCat === "Men's" 
                ? 'cat-active' : ''}`} 
                onClick={() => {handleFilterProducts(ALLOWED_CAT.MENS); 
                setActiveCat("men's")}}>
                    Men's
                </span>
                <span 
                className={`select-cat-span 
                ${activeCat === "women's" 
                ? 'cat-active' : ''}`} 
                onClick={() => {handleFilterProducts(ALLOWED_CAT.WOMEN); 
                setActiveCat("women's")}}>
                    Women's
                </span>
            </div> )
            : (<div className="category-select"><span>{category}</span></div>)};
            
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
                        setCartItems={setCartItems}
                    />
                )}
            </div>
        </div>
    )
}

export default Products;