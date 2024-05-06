"use client"
import Carousel from "react-multi-carousel";
import NewsSkeleton from "./skeletons/NewsSkeleton";
import React from "react";
interface NewsItem {
    id: number;
    title: string;
    content: string;
}

const News: React.FC = () => {




    const newsData: NewsItem[] = [
        { id: 1, title: 'Breaking News 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, title: 'Breaking News 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: 3, title: 'Breaking News 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1, // Change from 5 to 3
            centerMode: true, // Add centerMode
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

    if (newsData.length > 0)
        return (
            <div className=" mx-auto px-4 mt-16 mb-8">
                <h2 className="text-3xl font-bold text-center mb-6">Featured News</h2>
                <Carousel
                    responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    keyBoardControl={true}
                    transitionDuration={1000}
                    // containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    deviceType="desktop"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {/* Rendering fake news data */}

                    {newsData.map(news => (
                        <div key={news.id} className="w-full ml-auto mr-auto justify-center flex">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
                                <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                                <p className="text-gray-700">{news.content}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        );


    return <NewsSkeleton />;
};

export default News;