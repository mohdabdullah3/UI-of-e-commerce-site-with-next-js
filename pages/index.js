import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Products from '../components/Products'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <Products />
      <Footer />
    </>
  )
}
