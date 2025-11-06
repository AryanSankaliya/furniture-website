import React, { useEffect, useState } from 'react'
import BrowseRange from '../../component/BrowseRange/BrowseRange'
import Header from '../../component/Header/Header'
import HeroSection from '../../component/HeroSection/HeroSection'
import ProductGrid from '../../component/ProductGrid/ProductGrid'
import Footer from '../../component/Footer/Footer'
import InspirationCarousel from '../../component/InspirationCarousel/InspirationCarousel'
import MasonryGallery from '../../component/MasonryGallery/MasonryGallery'


function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/data/data.json")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    return (
        <div>
            <Header />
            <HeroSection />
            <BrowseRange />
            <ProductGrid products={products} />
            <InspirationCarousel products={products}/>
            <MasonryGallery products={products}/>
            <Footer />
        </div>
    )
}

export default Home