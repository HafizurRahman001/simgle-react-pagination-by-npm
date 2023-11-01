// import React from 'react';

const Country = (props) => {
    const countryDetails = props.country;
    return (
        <div>

            <div className="col">
                <div className="card">
                    <img src={countryDetails?.flags?.png} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{countryDetails?.name?.common}</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Country;