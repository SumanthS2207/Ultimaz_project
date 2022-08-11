import axios from 'axios';
import React, { useState } from 'react'
import "../css/proj4.css"

const PostData = () => {
  const [state, setstate] = useState({
    "product_name": "",

    "original_price": "",

    "sale_price": "",

    "product_type": "",

    "description": ""
  });

  const post_url = "https://react-tasks-nodejs-api.herokuapp.com/product/add_new";
  const header = {"api_key":"Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH"}
  const data={
    product_name: state.product_name,
    original_price: state.original_price,
    sale_price: state.sale_price,
    product_type: state.product_type,
    description: state.description
  }

  const getData = (e) => {
    const { name, value } = e.target
    setstate(() => {
      return {
        ...state,
        [name]: value
      }
    })
  }
  // console.log(state)

  const addData = (e) => {
    e.preventDefault();
    console.log(state);
    axios.post(post_url,header, data)
      .then(function (response) {
        setstate(response)
        console.log('Data::::::::', response)
      })
      .catch(function (error) {
        console.log('error::::::::::', error);
      });
    // axios({
    //   method: 'post',
    //   url: 'https://react-tasks-nodejs-api.herokuapp.com/product/add_new',
    //   headers: {
    //     "api_key": " Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH"
    //   }
    // },state)
    //   .then(function (response) {
    //     console.log("Data:::::::",response)
    //   })
    //   .catch(function (error) {
    //     console.log('error::::::::::', error);
    //   });
  }
  return (
    <>
      <div className='fluid-container'>
        <header className='text-center m-3'>Create Product</header>
        <div id='form-container'>
          <form method="post" className='text-center m-3' >
            <div className='p-3' id='division'>
              <input type="text" name="product_name" id="product_name" placeholder='Product Name' onChange={getData} />
            </div>
            <div className='p-3' id='division'>
              <input type="text" name="original_price" id="original_price" placeholder='Original Price' onChange={getData} />
            </div>
            <div className='p-3' id='division'>
              <input type="text" name="sale_price" id="sale_price" placeholder='sale_price' onChange={getData} />
            </div>
            <div className='p-3' id='division'>
              <input type="text" name="product_type" id="product_type" placeholder='product_type' onChange={getData} />
            </div>
            <div className='p-3' id='division'>
              <textarea name="description" id="description" rows="2" placeholder='description' onChange={getData}></textarea>
            </div>
            <button type="submit" className='m-3' id='division' onClick={addData} >Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default PostData