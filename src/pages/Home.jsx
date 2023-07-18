import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';
import Welcome from '../images/HeroimgWelcome.png';
import ImageSlider from '../components/ImageSlider';
import TestimonialCarousel from '../components/TestimonialCarousel';

const Home = () => {
    const bestSellers = [
        'https://dks.scene7.com/is/image/dkscdn/18MO2UMNRCH6PKTDRPCK_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1',
        'https://dks.scene7.com/is/image/dkscdn/22MO2UDRGNSLYRSTXTNN_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1',
        'https://dks.scene7.com/is/image/dkscdn/20MO2UMNRCHTRPCKLPCK_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1',
        'https://dks.scene7.com/is/image/dkscdn/23INEULGNDMCRFBRTTNN_Happy_Hour_is/?wid=252&hei=252&qlt=85,0&fmt=jpg&op_sharpen=1'
    ];
  return (
    <div>
        <Navbar/>
        <div className="hero-image">
            <img src={Welcome} alt="welcome logo"/>
        </div>
        <section className="homepage">
            <div className="section">
                <h2 className="section-heading">Welcome to Dre's Pickleball Paradise</h2>
                <p className="section-description">Unleash Your Pickleball Passion in Paradise!</p>
            </div>
            <div className="section">
                <h2 className="section-heading">About Us</h2>
                <p className="section-description">
                At <span className="highlight">Dre's Pickleball Paradise</span>, we believe that pickleball is more than just a game—it's a way of life. That's why we've carefully curated a diverse selection of pickleball gear, equipment, apparel, and accessories to cater to players of all skill levels and preferences. From high-performance paddles and reliable balls to stylish apparel and must-have accessories, we've handpicked the finest products from trusted brands to enhance your pickleball journey.
                </p>
            </div>
            <div className="section">
                <h2 className="section-heading">Community</h2>
                <p className="section-description">
                We're thrilled to be a part of the vibrant and ever-growing pickleball community, and we're here to support you every step of the way. Whether you're seeking expert advice, tips to improve your game, or simply want to connect with fellow pickleball enthusiasts, Dre's Pickleball Paradise is your go-to hub.
                </p>
            </div>
            <div className="section">
                <h2 className="section-heading">Best Sellers</h2>
                <p className="section-description">Discover our most popular pickleball products loved by players around the globe. These best sellers are a testament to their exceptional quality, performance, and style. Take your game to the next level with these top-rated picks!</p>
            </div>
            <ImageSlider images={bestSellers}/>
            <div className="section">
                <h2 className="section-heading">Testimonials</h2>
                <p className="section-description">Discover what our customers have to say about their experience with Dre's Pickleball Paradise. We take pride in providing exceptional products and service, and these testimonials reflect the satisfaction and success our customers have achieved. Read their stories and join the growing community of happy pickleball players!</p>
            </div>
            <TestimonialCarousel/>
        </section>
        <Footer/>
    </div>
  )
}

export default Home;