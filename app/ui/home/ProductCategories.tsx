interface ProductCategory {
    id: string;
    name: string;
    href: string;
}

const ProductCategories: React.FC = () => {
    const categories: ProductCategory[] = [
        { id: "4c00f03e-e62f-430b-92c2-df95913a192b", name: "Drycker", href: "/drycker" },
        { id: "cc74f91b-91ac-4632-8636-15b7722fc3e7", name: "Godis", href: "/candy" },
        { id: "d58f87f4-7378-447a-93d4-b888fbecfb6e", name: "Tobak", href: "/tobacco" },
        { id: "1faa3b8a-6f3d-4ad3-b21a-6e43887e4a57", name: "Kryddor", href: "/kryddor" },
    ];




    return (
        <div className="container mx-auto px-4 mt-12 mb-8">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-center mb-6">Product Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {categories.map(category => (
                        <div key={category.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img src={`/placeholder.png`} alt={category.name} className="w-full h-auto object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                                <a href={`/products/${category.href.toLowerCase()}`} className="text-blue-500 hover:underline">View Products</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCategories;