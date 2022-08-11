import React, { useState, useEffect } from 'react'
import "../css/porj4_2.css"
import axios from 'axios';

const GetTable = () => {

    const [product, setProduct] = useState([]);
    const [page, setpage] = useState(0);

    const postData = {
        "product_name": "k plus",

        "original_price": "123",

        "sale_price": "100",

        "product_type": "1",

        "description": "test product"
    }

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://react-tasks-nodejs-api.herokuapp.com/product/list',
            headers: {
                "api_key": " Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH"
            }
        }, postData)
            .then(function (response) {
                setProduct(response.data.message)
                console.log(response)
            })
            .catch(function (error) {
                console.log('error::::::::::', error);
            });
    }, [page]);


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary">
                <div className="head-container">
                    <div className=" col-sm-12 " id='header'>
                        <a type="button" className="btn btn-secondary col-md-2" id='log'>All Product</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <form id='searchOne'>
                            <input type="search" name="search" id="search" placeholder='search' />
                            <button className="btn btn-outline-success col-md-3" type="submit" id='searchtwo'>Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {
            <div className='container'>
                <table className="table table-bordered  table-hover">
                    <thead className='table table-dark'>
                        <tr>
                            <th scope="col">Product Id</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Original Price</th>
                            <th scope="col">Sale Price</th>
                            <th scope="col">Product Type</th>
                            <th scope="col">Description</th>
                            <th scope="col">Date and Time</th>
                        </tr>
                    </thead>
                    <tbody className='table'>
                        {product.map((user) => (  
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.product_name}</td>
                                <td>{user.original_price}</td>
                                <td>{user.sale_price}</td>
                                <td>{user.product_type}</td>
                                <td>{user.description}</td>
                                <td>{user.date_n_time}</td>
                            </tr>))}
                    </tbody>
                </table>
            </div>}
        </>
    )
}

export default GetTable