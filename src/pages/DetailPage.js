import React, { Component } from 'react'
import PageDetailTitle from "../parts/PageDetailTitle"
import Header from '../parts/Header'
import ItemDetails from '../json/itemDetails.json'
import FeaturedImage from '../parts/FeaturedImage'
import PageDetailDescription from '../parts/PageDetailDescription'
import BookingForm from '../parts/BookingForm'
import Footer from "../parts/Footer"
import Categories from "../parts/categories"

export default class DetailPage extends Component {
    componentDidMount(){
        //document.title = "Details Page"
        window.scrollTo(0,0)
    }
  render() {
      const breadcrumb = [
          {pageTitle : "Home" , pageHref : "/"},
          {pageTitle : "Detail Page" , pageHref : ""}
      ]
      
    return (
      <>
        <Header />
        <PageDetailTitle 
        breadcrumb={breadcrumb}
        data={ItemDetails}
        ></PageDetailTitle>
        <FeaturedImage data={ItemDetails.imageUrls} />
        <div className='container'>
          <div className='row'>
            <div className='col-7 pr-5'>
            <PageDetailDescription data={ItemDetails} />
            </div>
            <div className='col-5'>
              <BookingForm itemDetails={ItemDetails} />
            </div>
          </div>
        </div>
        <Categories data={ItemDetails.categories} />
        <Footer />
      </>
    )
  }
}
