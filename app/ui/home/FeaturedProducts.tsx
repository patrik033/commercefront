"use client";

import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Skeleton from '@mui/material/Skeleton';
import NewsSkeleton from "./skeletons/NewsSkeleton";

interface Product {
    id: string;
    name: string;
    price: number;
    image: string | null;
    brand: string;
    stock: number;
    isForLegalAge: boolean;
    shortDescription: string;
    productFacts: string;
    description: string;
}

const SkeletonProductCard: React.FC = () => {
    return (
        <div>

            <Skeleton variant="text" width="80%" height={24} />
            <Skeleton variant="text" width="50%" height={16} />
            <Skeleton variant="rectangular" width="100%" height={200} />

        </div>
    );
}

const FeaturedProducts: React.FC = () => {
    const [loading, setLoading] = React.useState(true);
    const [featuredProducts, setFeaturedProducts] = React.useState<Product[]>([]);

    const fetchFeaturedProducts = async () => {
        try {
            const response = await fetch(`https://localhost:5001/api/1.0/product/Featured`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const featuredProducts: Product[] = await response.json();
            setFeaturedProducts(featuredProducts);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    }

    React.useEffect(() => {
        fetchFeaturedProducts();
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3, // Change from 5 to 3
            // centerMode: true, // Add centerMode
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            // centerMode: true,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            // centerMode: true,
        },
    };



    if (!loading) {



        return (
            <div className="container mx-auto px-4 mt-12 mb-8">
                <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
                <Carousel
                    responsive={responsive}
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    keyBoardControl={true}
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType="desktop"
                    itemClass="carousel-item-padding-40-px"
                >
                    {loading ? (
                        Array.from({ length: 3 }).map((_, index) => (
                            <SkeletonProductCard key={index} />
                        ))
                    ) : (
                        featuredProducts.map((product) => (
                            <div key={product.id} className="justify-center flex">
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 ">
                                    <h3 className="text-xl font-semibold mb-2">{product.shortDescription}</h3>
                                    <p className="text-gray-700">${product.price.toFixed(2)} </p>
                                    <img src={product.image} alt={product.name} className="w-full mt-4 rounded-lg" />
                                </div>
                            </div>
                        ))
                    )}
                </Carousel>
            </div>
        );
    }
    return <NewsSkeleton />;
}

export default FeaturedProducts;