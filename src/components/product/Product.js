import React from 'react'
import './Product.css'
import productImg from '../../images/7.png'

const Product = () => {
  return (
    <div className='product --card'>
      <img src={productImg} alt="product image" />

      <div className='--bg-primary --center-all --p'>
        <h3 className='--text-light'>Shirt Product</h3>

        <div className='--flex-between --width-100'>
          <p className='--text-light'>$17.9</p>
          <button className='--btn --btn-danger'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product