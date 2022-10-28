import Link from 'next/link'
import Image from 'next/image'
import { Carousel } from 'react-bootstrap';

const Header = () => {
   return (
      <>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
               <a className="navbar-brand" href="#"><Image src='/logo.png' width={104} height={28} /></a>

               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav_btn" aria-controls="nav_btn" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>

               <div className="collapse navbar-collapse" id="nav_btn">
                  <div className="navbar-nav me-auto mb-2 mb-lg-0">
                     <Link href="#"><a className="nav-link active" aria-current="page">Home</a></Link>
                     <Link href="#"><a className="nav-link">Sale</a></Link>
                     <Link href="#"><a className="nav-link">Best Sellers</a></Link>
                     <Link href="#"><a className="nav-link">New In</a></Link>
                     <Link href="#"><a className="nav-link">Fabrics</a></Link>
                     <Link href="#"><a className="nav-link">Ready to wear</a></Link>
                     <Link href="#"><a className="nav-link">Western</a></Link>
                     <Link href="#"><a className="nav-link">Fragrances</a></Link>
                     <Link href="#"><a className="nav-link">Man</a></Link>
                  </div>
               </div>
            </div>
         </nav>


         <Carousel pause={false} controls={true} indicators={false}>

            <Carousel.Item interval={5000}>
               <Image className="d-block" src='/slide1.jpg' width={1920} height={1080} alt="First slide" />
            </Carousel.Item>

            <Carousel.Item interval={5000}>
               <Image className="d-block" src='/slide2.webp' width={1920} height={1080} alt="Second slide" />
            </Carousel.Item>

            <Carousel.Item interval={5000}>
               <Image className="d-block" src='/slide3.webp' width={1920} height={1080} alt="Second slide" />
            </Carousel.Item>

         </Carousel>
      </>
   )
}

export default Header