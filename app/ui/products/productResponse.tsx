"use client";

import React from "react";
import Pagination from "@/app/ui/products/Pagination";
import ProductDetails from "@/app/ui/products/ProductDetails";
import ProductFilters from "./Productfilters";
import NewsSkeleton from "../home/skeletons/NewsSkeleton";

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

interface Pagination {
    CurrentPage: number;
    TotalPages: number;
    PageSize: number;
    TotalCount: number;
    HasPrevious: boolean;
    HasNext: boolean;
}

interface baseString {
    baseString: string[];
}


export default function ProductResponse({ baseString }) {

    const [products, setProducts] = React.useState<Product[]>([]);
    const [originalData, setOriginalData] = React.useState<Product[]>([]); // Store original data
    const [pagination, setPagination] = React.useState<Pagination | null>(null);

    const fetchProducts = async (pageNumber: number, categoryName: string[]) => {

        const categoryQueryString = categoryName.map(name => `categoryName=${encodeURIComponent(name)}`).join('&');

        try {

            const response = await fetch(`https://localhost:5001/api/1.0/product/DrinksPaged?PageNumber=${pageNumber}&PageSize=5&${categoryQueryString}`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const products: Product[] = await response.json();
            setProducts(products);
            setOriginalData(products);

            // Extract pagination information from headers
            const paginationHeader = response.headers.get('x-pagination');
            if (paginationHeader) {
                const paginationData: Pagination = JSON.parse(paginationHeader);
                setPagination(paginationData);
            }
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    const handlePageChange = (selected: number) => {
        fetchProducts(selected + 1, baseString); // Adding 1 because the page numbers are 1-based
    };

    const handleFilterChange = (filteredData: Product[]) => {
        // Update products with filtered data
        setProducts(filteredData);
    };


    React.useEffect(() => {
        fetchProducts(1, baseString);
    }, []);





    return (
        <div className="container mx-auto px-4 pt-2">
            {/* Render the ProductFilter component */}
            <ProductFilters originalData={originalData} onFilterChange={handleFilterChange} />

            <div className="">
                <div></div>
                {products.length > 0 ? <ProductDetails products={products} /> : <NewsSkeleton />}
            </div>
            <div className="mt-10 mb-2">
                {pagination && (
                    <Pagination pagination={pagination} onPageChange={handlePageChange} />
                )}
            </div>
        </div>
    );
}