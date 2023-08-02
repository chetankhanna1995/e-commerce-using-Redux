import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'

const Cart = () => {
  const products =useSelector((state)=>state.cart)
  const dispatch=useDispatch()

  const handleclick=(productid)=>{
  dispatch(remove(productid) )       
  }
  return (
    <div className='container'>
      <h1 className='text-center text-6xl font-bold'>Cart</h1>
      <div className='py-4' >
        {products.map(product=>(
          <div className='bg-white grid grid-cols-4 gap-x-36 justify-between items-center px-8 py-4 my-4'>
            <img src={product.image}  alt="product" />
            <h4 className="text-xl font-semibold">{product.title}</h4>
            <h5 className="text-2xl antialiased font-semibold">Price:-{product.price}</h5>
            <button onClick={()=>handleclick(product.id)} className="bg-transparent h-12 w-24 hover:bg-black text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Remove</button>
          </div>
        ))
        }
      </div>

    </div>
  )
}

export default Cart

