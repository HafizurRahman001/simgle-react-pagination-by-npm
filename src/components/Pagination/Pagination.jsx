// import React from 'react';
import { useState } from 'react';
import './Pagination.css'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

const Pagination = ({ pageNumber, paginate }) => {
    const [currentPage, setCurrentPage] = useState(1);
    paginate(currentPage)
    return (
        <ResponsivePagination
            current={currentPage}
            total={pageNumber}
            onPageChange={setCurrentPage}
        />
    );
};

export default Pagination;