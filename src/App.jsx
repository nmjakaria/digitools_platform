import React, { Suspense, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/BannerSection/Banner'
import { ThreeCircles } from 'react-loader-spinner'
import ProductCard from './components/CardSection/ProductCard'
import { ToastContainer } from 'react-toastify'
import Rating from './components/Rating/Rating'

const fetchProducts = async () => {
  const res = await fetch('/productCardInfo.json');
  return res.json();
}

function App() {
  const productsPromise = fetchProducts();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedType, setSelectedType] = useState("products");

  return (
    <>
      <Navbar selectedProducts={selectedProducts}
      setSelectedType={setSelectedType} ></Navbar>
      <Banner></Banner>
      <Rating></Rating>
      <Suspense fallback={
        <div className="flex justify-center items-center py-20">
          <ThreeCircles height={80} width={80} color="#4fa94d" />
        </div>
      }>
        <ProductCard
          productsPromise={productsPromise}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        ></ProductCard>
      </Suspense>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
