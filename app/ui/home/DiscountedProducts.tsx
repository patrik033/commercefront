"use client";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NewsSkeleton from './skeletons/NewsSkeleton';

interface DiscountedProduct {
    id: number;
    name: string;
    price: number;
    image: string;
}




const DiscountedProducts: React.FC = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            // centerMode: true,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            // centerMode: true,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            // centerMode: true,
        },
    };

    // Fake discounted products data
    const discountedProducts: DiscountedProduct[] = [
        { id: 7, name: 'Strawberries', price: 2.49, image: '/assets/img/products/product-img-7.jpg' },
        { id: 8, name: 'Cherries', price: 3.99, image: '/assets/img/products/product-img-8.jpg' },
        { id: 9, name: 'Blueberries', price: 4.49, image: '/assets/img/products/product-img-9.jpg' },
    ];


    if (discountedProducts.length > 0)
        return (
            <div className="container mx-auto px-4 mt-12 mb-12 ">
                <h2 className="text-3xl font-bold text-center mb-6">Discounted Products</h2>
                {responsive && (
                    <Carousel
                        responsive={responsive}
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={5000}
                        keyBoardControl={true}
                        transitionDuration={1000}
                        // containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType="desktop"
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"

                    // centerMode={true} // Add this to center the items
                    >
                        {discountedProducts.map((product) => (
                            <div key={product.id} className=' justify-center flex'>
                                <div className="bg-white rounded-lg shadow-lg  ">
                                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                    <p className="text-gray-700">${product.price.toFixed(2)} per Kg</p>
                                    <img src={product.image} alt={product.name} className="w-full mt-4 rounded-lg" />
                                </div>
                            </div>
                        ))}
                    </Carousel>
                )}
            </div>
        );
    return <NewsSkeleton />;
};

export default DiscountedProducts;