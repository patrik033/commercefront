interface Brand {
    id: string;
    name: string;
}

const Brands: React.FC = () => {
    const brands: Brand[] = [
        { id: "7e2a3d02-6b94-446d-a01b-1ad72af17ed8", name: "Kryddmästarna" },
        { id: "51ae9e91-85ff-4da5-80e8-2a59d72d05bb", name: "Schwartz" },
        { id: "08f1d367-b4c3-4d33-8748-65454a26b9a0", name: "McCormick" },
        { id: "778ebd27-748c-4914-81c4-d3fc43db2b02", name: "Simply Organic" },
        { id: "edfc77a4-13aa-4fc1-bc76-4844a946e3b2", name: "Badia" },
        { id: "9ab8e72b-9bc3-4ee7-8162-f7386ae7f7e2", name: "Frontier Co-op" },
        { id: "ab8fb1a6-929b-4c30-b373-497e7f2f3b2e", name: "Spice Islands" },
        { id: "301b1543-2081-4b57-af7f-0ad8851b1c32", name: "Penzey's" }
    ];


    return (
        <div className="brand-container">
            {/* For larger screens (>= md) */}
            <div className="hidden lg:flex lg:flex-wrap">
                {/* Loop through brands and display 4 brands per row */}
                {brands.map((brand) => (
                    <div className="w-1/4 md:w-1/2 lg:w-1/4 p-4" key={brand.id}>
                        {/* Brand card */}
                        <div className="bg-gray-200 p-6 rounded-lg">
                            {/* Display brand name */}
                            {brand.name}
                        </div>
                    </div>
                ))}
            </div>

            {/* For smaller screens (< lg) */}
            <div className="lg:hidden flex flex-wrap">
                {/* Loop through brands and display 2 brands per row */}
                {brands.map((brand) => (
                    <div className="w-1/2 p-4" key={brand.id}>
                        {/* Brand card */}
                        <div className="bg-gray-200 p-6 rounded-lg">
                            {/* Display brand name */}
                            {brand.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Brands;