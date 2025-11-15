import React, { useEffect, useState } from 'react';
import './ProductDescription.css';
import Header from "../../component/Header/Header";
import ProductDetail from '../../component/ProductDetail/ProductDetail';
import { useParams } from 'react-router-dom';

function ProductDescription() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch("/data/data.json")
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((item) => item.id === parseInt(id));
                setProduct(found);
            })
            .catch((err) => console.error("Error loading data:", err));
    }, [id]);

    if (!product) {product
        return <p style={{ textAlign: "center", padding: "40px" }}>Loading ...</p>;
    }

    return (
        <>
            <Header />

            <div className='path-title'>
                <p className="path">
                    <span className='path-link'>Home</span>
                    <span>&nbsp;&gt;&nbsp;</span>
                    <span className='path-link'>Shop</span>
                    <span>&nbsp;&gt;&nbsp;</span>
                    <span className='vertical-bar'>|</span>
                    <span className="path-current">{product.title}</span>
                </p>
            </div>

            <ProductDetail product={product} />
        </>
    );
}

export default ProductDescription;
