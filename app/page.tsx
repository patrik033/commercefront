import dynamic from "next/dynamic";
import { Suspense } from "react";

const TopImage = dynamic(() => import("./ui/home/TopImage"));
const FeaturedProducts = dynamic(() => import("./ui/home/FeaturedProducts"));
const DiscountedProducts = dynamic(() => import("./ui/home/DiscountedProducts"));
const Brands = dynamic(() => import("./ui/home/Brands"));
const ProductCategories = dynamic(() => import("./ui/home/ProductCategories"));
const News = dynamic(() => import("./ui/home/News"));
const Footer = dynamic(() => import("./ui/footer/footer"));
const NewsSkeleton = dynamic(() => import("./ui/home/skeletons/NewsSkeleton"));

export default function Page() {




  const newsData = [
    { id: 1, title: 'Breaking News 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Breaking News 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, title: 'Breaking News 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  ];





  return (
    <div>
      {/* Top Image Section */}
      <div>
        {/* <Suspense fallback={<NewsSkeleton />}>
          <TopImage />
        </Suspense> */}
        <TopImage />
      </div>

      <div className="mb-5">
        {/* <Suspense fallback={<NewsSkeleton />}>
          <News />
        </Suspense> */}
        <News />
      </div>



      <div className="mt-10">
        {/* <Suspense fallback={<NewsSkeleton />}>
          <FeaturedProducts />
        </Suspense> */}
        <FeaturedProducts />
      </div>


      <div>
        {/* <Suspense fallback={<NewsSkeleton />}>
          <DiscountedProducts />
        </Suspense> */}
        <DiscountedProducts />
      </div>
      <div>
        {/* <Suspense fallback={<NewsSkeleton />}>
          <ProductCategories />
        </Suspense> */}
        <ProductCategories />
      </div>

      <div>
        {/* <Suspense fallback={<NewsSkeleton />}>
          <Brands />
        </Suspense> */}
        <Brands />
      </div>

      <div>
        {/* <Suspense fallback={<NewsSkeleton />}>
          <Footer />
        </Suspense> */}
        <Footer />
      </div>
    </div>
  );


}
