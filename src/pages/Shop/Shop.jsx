import React from 'react'
import Header from '../../component/Header/Header'
import hero_section from '../../assets/hero section background.jpg'
import './Shop.css'
import ProductGrid from '../../component/ProductGrid/ProductGrid'
import data from '../../../public/data/data.json'

import Footer from '../../component/Footer/Footer'
import SemiFooter from '../../component/SemiFooter/SemiFooter'



function Shop() {
  return (
    <>
      <Header />

      <div className="shop-hero">
        <img
          src={hero_section}
          alt="Hero"
          className="hero-bg"
        />
        <div className="hero-content">
          <p>Shop</p>
          <div className='path'>
            <span className='home'>Home &gt;</span>
            <span className='shop'>&nbsp;shop</span>
          </div>
        </div>
      </div>

      <div className='hero-title'>
        <p>Discover our latest collection of premium furniture</p>
      </div>

      {/* ProductGrid handles pagination internally */}
      <ProductGrid
        products={data}
        showHeading={false}
        showButton={false}
        pagination={true}
        itemsPerPage={15}
      />
      <SemiFooter/>

      
<Footer/>
    </>
  )
}

export default Shop
