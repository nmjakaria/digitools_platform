import React, { Suspense, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/BannerSection/Banner'
import { ThreeCircles } from 'react-loader-spinner'
import ProductCard from './components/CardSection/ProductCard'
import { ToastContainer } from 'react-toastify'

const fetchProducts = async () => {
  const res = await fetch('/productCardInfo.json');
  return res.json();
}

function App() {
  const productsPromise = fetchProducts();
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <>
      <Navbar selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}  ></Navbar>
      <Banner></Banner>
      <Suspense fallback={
        <div className="flex justify-center items-center py-20">
          <ThreeCircles height={80} width={80} color="#4fa94d" />
        </div>
      }>
        <ProductCard productsPromise={productsPromise} selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts} ></ProductCard>
      </Suspense>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
