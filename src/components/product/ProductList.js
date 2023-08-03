import "./ProductList.css"
import { useState } from 'react'
import Search from "../search/Search"
import Categories from "../categories/Categories"
import Product from './Product'
import { products as productData} from "../../product-data"

const ProductList = () => {

    const [products, setProducts] = useState(productData)
    
    return (
        <>
            <div className="header">
                <header className="container">
                    <h1 className='--color-white --text-center'> <span className='--color-danger'>Product</span> Filter</h1>

                    <div className='--flex-between --flex-dir-column --py'>
                        <Search/>
                        <Categories />
                    </div>
                </header>

                <div className="product-container">
                    <div className="products container --grid-25 --py2">
                        {products.map((product) => {
                            const { id, title, price, img } = product;

                            {/* MAPPING MUST HAVE A key of item's id */}
                            return (
                                <div key={id}>
                                    <Product title={title} img={img} price={price}/>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>   
        </>
    )
}

export default ProductList