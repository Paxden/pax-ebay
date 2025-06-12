import React from 'react'

// Components
import FilterBar from '../Component/TrendingProduct/FilterBar'
import ProductsContainer from '../Component/TrendingProduct/ProductsContainer'

function TrendingProduct() {
  return (
    <div className='trending-product'>
      <FilterBar />

      {/* product Container */}
      <ProductsContainer />
    </div>
  )
}

export default TrendingProduct
