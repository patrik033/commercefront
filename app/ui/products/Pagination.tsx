import React from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
    pagination: {
        CurrentPage: number;
        TotalPages: number;
        HasPrevious: boolean;
        HasNext: boolean;
    };
    onPageChange: (pageNumber: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({ pagination, onPageChange }) => {
    return (
        <div style={{ bottom: 0 }} > {/* Center items horizontally and place at the bottom */}
            <ReactPaginate
                nextLabel="Next"
                previousLabel="Previous"
                onPageChange={(data) => onPageChange(data.selected)}
                pageCount={pagination.TotalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                breakLabel="..."
                // breakClassName="break-me"
                containerClassName="flex justify-center mt-4"
                pageClassName="mx-2"
                previousClassName="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                nextClassName="bg-blue-500 text-white px-4 py-2 rounded ml-2"
                activeClassName="bg-blue-100  px-4 py-2 rounded"
                pageLinkClassName=" text-blue-500 px-4  rounded"
                breakLinkClassName="text-blue-500 px-4 "
                disabledClassName="text-gray-400"
            />
        </div>
    );
};

export default Pagination;