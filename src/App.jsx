import React, { Suspense } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/BannerSection/Banner'
import { ThreeCircles } from 'react-loader-spinner'
import ProductCard from './components/CardSection/ProductCard'

const fetchProducts = async () => {
  const res = await fetch('/productCardInfo.json');
  return res.json();
}

function App() {
  const productsPromise = fetchProducts();

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense fallback={
        <div className="flex justify-center items-center py-20">
          <ThreeCircles height={80} width={80} color="#4fa94d" />
        </div>
      }>
        <ProductCard productsPromise={productsPromise} ></ProductCard>
      </Suspense>
    </>
  )
}

export default App
