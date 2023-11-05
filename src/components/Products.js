import React, { useState, useEffect } from "react";
import { add } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchprodutcs = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      //   console.log(data);
    };
    fetchprodutcs();
  });
  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="flex flex-wrap gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-gray-50 flex flex-col justify-center content-center items-center w-96 justify-self-center rounded overflow-hidden shadow-lg p-4 rounded-2 shadow-xl shadow-indigo-500/50 hover:shadow-black"
        >
          <img src={product.image} alt="product" className="cart_img p-2" />
          <h4 className="text-xl font-semibold">{product.title}</h4>
          <h5 className="text-2xl antialiased font-semibold">
            Price:-{product.price}
          </h5>
          <button
            onClick={() => handleAdd(product)}
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
