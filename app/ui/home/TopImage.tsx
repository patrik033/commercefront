console.log("started fetching");

const TopImage = () => {
    return (
        <div className="relative h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(/hero-bg.jpg)` }}>
            <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="text-center text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">Your Title Here</h1>
                    <p className="text-lg uppercase font-semibold text-orange-500 tracking-wider">Your Subtitle Here</p>
                    <div className="mt-6">
                        <div className="hero-btns mt-8 text-center md:flex md:justify-center">
                            {/* Bordered Button */}
                            <a className="text-gray-700 bg-orange-500 hover:bg-black hover:text-red-500 px-4 py-2 rounded-full mb-4 md:mb-0 md:mr-4 transition duration-300 ease-in-out block md:inline-block" href="#">Your Bordered Button Text</a>

                            {/* Boxed Button */}
                            <a className="border border-orange-500 hover:bg-orange-500 hover:text-gray-700 px-4 py-2 rounded-full transition duration-300 ease-in-out block md:inline-block" href="#">Your Boxed Button Text</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopImage;