import './App.css';
import NavbarP from './components/nav/NavbarP';
import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Team from './components/team/Team';
import Footer from './components/footer/Footer';
import WorkHome from './components/work/WorkHome';
import ContactUs from './components/contactus/ContactUs';

function App() {
  return (
    <>
      <NavbarP/>
      <Header/>
      <About/>
      <Team/>
      <WorkHome/>
      <ContactUs/>


      <Footer/>
      
    </>
  );
}




export default App;