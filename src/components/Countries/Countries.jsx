// import React from 'react';

import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import Pagination from "../Pagination/Pagination";

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(18)

    const lastIndexOfPost = currentPage * postPerPage;
    const firstIndexOfPost = lastIndexOfPost - postPerPage;
    const displayCountriesPerPage = countries.slice(firstIndexOfPost, lastIndexOfPost)

    const totalCountries = countries.length;
    const pageNumber = Math.ceil(totalCountries / postPerPage)

    const scrollPage = () => {
        window.scrollTo(0, 0)
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
        scrollPage();
    }

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => setCountries(data))
    }, []);


    return (
        <div className="my-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    displayCountriesPerPage.map(country => <Country
                        key={country.id}
                        country={country}
                    />)
                }
            </div>
            <div className="pagination_section">
                <Pagination
                    pageNumber={pageNumber}
                    paginate={paginate}
                />
            </div>
        </div>
    );
};

export default Countries;