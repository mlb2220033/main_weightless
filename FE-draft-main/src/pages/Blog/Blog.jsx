import React from "react"
import Announcement from "components/Announcement"
import Navbar from "components/Navbar"
import Card from "components/Blog/Card"
import Footer from "components/Footer"

const BlogHome = () => {
    return (
      <div>
        <Announcement></Announcement>
        <Navbar></Navbar>
        <Card></Card>
        <Footer></Footer>
      </div>
      
    )
  }
  
  export default BlogHome