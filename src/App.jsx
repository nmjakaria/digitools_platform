import React, { Suspense, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/BannerSection/Banner'
import { ThreeCircles } from 'react-loader-spinner'
import ProductCard from './components/CardSection/ProductCard'
import { ToastContainer } from 'react-toastify'
import Rating from './components/Rating/Rating'
import GetStartedSteps from './components/GetStartedSteps/GetStartedSteps'
import Pricing from './components/PricingSection/Pricing'
import CTASection from './components/PricingSection/CTAsection'
import Footer from './components/Footer/Footer'

const fetchProducts = async () => {
  const res = await fetch('/productCardInfo.json');
  return res.json();
}

const fetchPricingInfo = async () => {
  const res = await fetch('/PricingCardInfo.json');
  return res.json();
}

function App() {
  const productsPromise = fetchProducts();
  const pricingPromise = fetchPricingInfo();
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

      <Suspense
        fallback={
          <div className="flex justify-center items-center py-20">
            <ThreeCircles height={80} width={80} color="#4fa94d" />
          </div>
        }>
        <GetStartedSteps></GetStartedSteps>
      </Suspense>

      <Suspense>
        <Pricing pricingPromise={pricingPromise}></Pricing>
      </Suspense>

      <CTASection></CTASection>
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
