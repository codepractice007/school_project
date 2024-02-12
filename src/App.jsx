import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import Header from './components/Header'
import NavBar from './layout/NavBar'
import ImageSlider from './components/ImageSlider'
import Card from './components/card/Card'
import Message from './components/Message'
import Container from './components/aboutUs/container'
import Details from './components/details/Details'
import Events from './components/event/event'
import ContactBar from './components/contact/ContactBar'
import Footer from './layout/footer'
function App() {


  return (
    <>
      <TopBar />
      <Header/>
      <NavBar/>
      <ImageSlider/>
      <Card />
      <Message/>
      <Container/>
      <Details />
      <Events />
      <ContactBar/>
      <Footer/>
    </>
  )
}

export default App
