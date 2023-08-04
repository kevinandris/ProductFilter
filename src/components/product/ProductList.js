// ! parent class
import "./ProductList.css"
import { useState, useEffect } from 'react'
import Search from "../search/Search"
import Categories from "../categories/Categories"
import Product from './Product'
import { products as productData} from "../../product-data"

// ! pointing to a category type inside product-data.js file of array.
const allCategories = [
    "all",
    ...new Set(productData.map((product) => product.category))
]

const ProductList = () => {

    const [products, setProducts] = useState(productData);
    const [search, setSearch] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState(allCategories);

    const handleSearch = (e) => {
        setSearch(e.target.value)
    };

    const filterProducts = (category) => {
        if (category === "all") {
            setProducts(productData)
            return;
        }

        const newProducts = productData.filter((product) => product.category === category)
        setProducts(newProducts)
    }

    useEffect(() => {
        console.log(allCategories)
        setFilteredProducts(
            products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search, products]);
    
    return (
        <>
            <div className="header">
                <header className="container">
                    <h1 className='--color-white --text-center'> <span className='--color-danger'>Product</span> Filter</h1>

                    <div className='--flex-between --flex-dir-column --py'>
                        <Search inputValue={search} onInputChange={handleSearch} />
                        <Categories categories={categories} filterItems={filterProducts} />
                    </div>
                </header>

                <div className="product-container">
                    <div className="products container --grid-25 --py2">
                        {filteredProducts.length === 0 ? (
                            <h3>No Product found!!!</h3>
                        ) : (
                             filteredProducts.map((product) => {
                                 const { id, title, price, img } = product;
                                 {/* MAPPING MUST HAVE A key of item's id */}
                                 return (
                                     <div key={id}>
                                         <Product title={title} img={img} price={price}/>
                                     </div>
                                 );
                             })
                        )}
                    </div>
                </div>
            </div>   
        </>
    )
}

export default ProductList