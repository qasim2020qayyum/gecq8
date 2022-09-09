import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import slider1 from 'https://picsum.photos/1800/850';
// https://picsum.photos/1800/700?softlandscape,hardlandscape
const Header = () => {
  return (
    <>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://i.picsum.photos/id/79/1800/700.jpg?hmac=47-6VklgOdpERwm2J3hKtn0eVi7VKWLdFu8iYUMf0tc'
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Green Enviroment Co.</h1>
          <h3>Steel Buildings</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://i.picsum.photos/id/696/1800/700.jpg?hmac=EFaI3Z0tZP5zxYTmkBu8CtMVJHLuP58hl3zuIMEeXHE'
          alt="Second slide"
        />

        <Carousel.Caption>
        <h1>Green Enviroment Co.</h1>
          <h3>Land Scapes</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://i.picsum.photos/id/977/1800/700.jpg?hmac=HjouEjVnNaxJ_unJwfO9jgmp0-n2Cv27a_PEQ9JRX_4'
          alt="Third slide"
        />

        <Carousel.Caption>
        <h1>Green Enviroment Co.</h1>
        <h1>
        </h1>
          <h3>Agricutural Products</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    
    </>
  )
}

export default Header