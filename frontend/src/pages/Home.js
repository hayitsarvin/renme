import CategoriesSection from "../components/sections/CategoriesSection";
import FAQ from "../components/sections/FAQ";
import Hero from "../components/sections/Hero"
import HotProducts from "../components/sections/HotProducts";
import HowItsWorks from "../components/sections/HowItsWorks";
import Testimonial from "../components/sections/Testimonial";
import Map from "../components/sections/Map";
import React from "react";
import MobileCategories from "../components/sections/MobileCategories";
import MobilePopularItems from "../components/sections/MobilePopularItems";
import MobileHotDeals from "../components/sections/MobileHotDeals";
import Footer from "../components/sections/Footer";


const Home = ({dimensions}) => {
    console.log(dimensions);
    return (
        <div >
            <Hero  dimensions={dimensions}/>
            {
                (dimensions.width > 435) ? (
                    <>
                <HowItsWorks />
                <HotProducts />
                <CategoriesSection />
                </>
                ) : <>
                    <MobileCategories />
                    <MobilePopularItems />
                    <MobileHotDeals />
                </>
            }
            
            <Testimonial dimensions={dimensions}/>
            <FAQ />
            <Map />
            <Footer />
        </div>

    )
}

export default Home;