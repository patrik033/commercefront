import Link from 'next/link';

const SanatizeForUrl = (name) => {
    return name.replace(/\s+/g, '-');
}


const ProductDetails = ({ products }) => {
    return (
        <div className="mt-6">
            <div className="lg:px-24 md:px-12 px-3">
                <div className="container mx-auto px-4">
                    {products.map((product, index) => (
                        <Link key={index} href={`/products/${SanatizeForUrl(product.name)}`}>
                            <div className="lg:col-gap-12 xl:col-gap-16 mt-3 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16 cursor-pointer">
                                <div className="lg:col-span-3 lg:row-end-1">
                                    <div className="lg:order-2">
                                        <div className="object-cover">
                                            <img
                                                src="/placeholder.png"
                                                alt="Placeholder"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-4 lg:row-span-2 lg:row-end-2">
                                    <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{product.name}</h1>
                                    <div className=" mt-3">
                                        <p className=" text-sm font-medium text-gray-500">In Stock : {product.stock}</p>
                                    </div>
                                    <h2 className="mt-3 text-base text-gray-900">Details</h2>
                                    <div className="mt-3  flex select-none flex-wrap items-center gap-1">
                                        <section>
                                            <p dangerouslySetInnerHTML={{ __html: product.shortDescription }}></p>
                                        </section>
                                    </div>
                                    <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                                        <div className="flex items-end">
                                            <h1 className="text-3xl font-bold">${parseFloat(product.price).toFixed(2)}</h1>
                                        </div>
                                        <button
                                            type="button"
                                            className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="shrink-0 mr-3 h-5 w-5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>
                                            Add to cart
                                        </button>
                                    </div>
                                    <ul className="mt-8 space-y-2">
                                        <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                            <svg
                                                className="mr-2 block h-5 w-5 align-middle text-gray-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Free shipping worldwide
                                        </li>
                                        <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                            <svg
                                                className="mr-2 block h-5 w-5 align-middle text-gray-500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                            </svg>
                                            Cancel Anytime
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;