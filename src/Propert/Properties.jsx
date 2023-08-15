import { useState } from 'react'
import '../styles/property.css'
import {IoIosBed} from 'react-icons/io'
import {GiBathtub} from 'react-icons/gi'
import {AiOutlineAreaChart} from 'react-icons/ai'
import {BiCurrentLocation} from 'react-icons/bi'
import propTypes from 'prop-types'

// ------------ Layout of each Property
function Properties({ id,price, title, location, images, size, features }) {

    return (
      <>
                
                <div key={id} className='property-details'>
                        <div className='product-content'>
                            <div className='property-pic'>
                              <img src={images[0]} width="25%" />  
                            </div>
                            <div className='property-info'>
                              <div className='property-value'>
                                <label><span className='property-price'>${price}</span> <span>/month</span></label>
                              </div>
                              <div>
                                <label><span className='property-title'>{title}</span></label>
                              </div>
                              <div className='property-location'>
                                <label><span><BiCurrentLocation/> {location}</span></label>
                              </div>
                            </div>
                            <hr></hr>
                            <div className='property-features'>
                                <span><IoIosBed/>{features[0]}</span> 
                                <span><GiBathtub/>{features[1]}</span>  
                                <span><AiOutlineAreaChart/>{size.value} sqft</span>
                            </div>
                        </div>
                </div>   
      </>
    )
  }

Properties.propTypes = {
     id : propTypes.number,
     price : propTypes.number,
     title : propTypes.string,
     location : propTypes.string,
     images : propTypes.array,
     size : propTypes.object,
     features : propTypes.array
    }
  
  export default Properties