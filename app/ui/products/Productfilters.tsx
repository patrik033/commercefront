import React, { useState } from 'react';
import DualRangeSlider from '../slider/DualRangeSlider';

interface Product {
    id: string;
    name: string;
    price: number;
    image: string | null;
    brand: string;
    stock: number;
    isForLegalAge: boolean;
    description: string;
}

interface ProductFilterProps {
    originalData: Product[];
    onFilterChange: (filteredData: Product[]) => void;
}

const ProductFilters: React.FC<ProductFilterProps> = ({ originalData, onFilterChange }) => {
    const [searchText, setSearchText] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [priceRangeFilter, setPriceRangeFilter] = useState('');
    const [filtersVisible, setFiltersVisible] = useState(false); // Initially hidden

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    const handleBrandFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBrandFilter(e.target.value);
    };

    const handlePriceRangeFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPriceRangeFilter(e.target.value);
    };

    const handleFilterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Apply filters to original data
        let filteredData = originalData.filter(product => {
            // Filter based on search text
            const searchMatch = !searchText || product.name.toLowerCase().includes(searchText.toLowerCase());

            // Filter based on brand
            const brandMatch = !brandFilter || product.brand === brandFilter;

            // Filter based on price range
            const priceMatch = !priceRangeFilter || (
                priceRangeFilter &&
                product.price >= parseInt(priceRangeFilter.split('-')[0]) &&
                product.price <= parseInt(priceRangeFilter.split('-')[1])
            );

            // Return true if all conditions are met
            return searchMatch && brandMatch && priceMatch;
        });

        // Pass filtered data to parent component
        onFilterChange(filteredData);
    };

    const handleResetFilters = () => {
        onFilterChange(originalData);
        setSearchText('');
        setBrandFilter('');
        setPriceRangeFilter('');
    };

    const toggleFiltersVisibility = () => {
        setFiltersVisible(!filtersVisible);
    };

    return (
        <>
            <button type="button" onClick={toggleFiltersVisibility} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 mb-2">
                {filtersVisible ? 'Göm filter' : 'Visa filter'}
            </button>
            {filtersVisible && (
                <form onSubmit={handleFilterSubmit} className="mb-4">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchText}
                            onChange={handleSearchChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                    </div>
                    <div className="md:flex md:justify-between mb-4">
                        <select
                            value={brandFilter}
                            onChange={handleBrandFilterChange}
                            className="w-full md:w-auto md:mr-5 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 mb-2 "
                        >
                            <option value="">Select Brand</option>
                            {/* Add options for brands */}
                        </select>
                    </div>
                    <div className='mb-4'>
                        <DualRangeSlider
                            min={0}
                            max={100}
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-start">
                        <div className="mb-2 sm:mb-0">
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2">Apply Filters</button>
                        </div>
                        <div>
                            <button type="button" onClick={handleResetFilters} className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">Reset Filters</button>
                        </div>
                    </div>
                </form>
            )}
        </>
    );
};

export default ProductFilters;