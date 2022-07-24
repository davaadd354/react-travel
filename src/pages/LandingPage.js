import Header from "../parts/Header"
import { Link } from "react-router-dom"
import React from 'react'
import landingPage from '../json/landingPage.json'
import Hero from "../parts/Hero"
import MostPicked from "../parts/MostPicked"
import Categories from "../parts/categories"
import Footer from "../parts/Footer"
import InputNumber from '../components/Form/inputNumber'

const LandingPage = () => {

  return (
    <div>
        <Header isLogin />
        <Hero data={landingPage.hero} />
        <MostPicked data={landingPage.mostPicked} />
        <Categories data={landingPage.categories} />
        <Footer />
    </div>
  )
}

export default LandingPage
