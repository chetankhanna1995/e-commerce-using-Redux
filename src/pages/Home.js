import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div className=' text-center '>
      <h1 className='text-6xl antialiased font-semibold '>Welcome to Redux Store</h1>
      <h3 className='text-4xl antialiased font-semibold py-4'>Products</h3>
      <Products />
    </div>
  )
}

export default Home