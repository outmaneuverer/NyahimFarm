import React from 'react'
import Products from '../components/products'
import PageHero from '../components/PageHero'

const ProductsPage: React.FC = () => {
  return (
    <div>
      <PageHero 
      title={'Explore Variety Of Our Products'} 
      image={'https://images.unsplash.com/photo-1575843401197-5fbec2bccf0f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVuc3BsYXNoJTIwd2Vic2l0ZSUyMGZhcm0lMjBnb29kcyUyMGluJTIwbWFya2V0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600'}/>
      <Products />
    </div>
  )
}

export default ProductsPage