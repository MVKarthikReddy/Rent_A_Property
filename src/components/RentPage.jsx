import { useState } from 'react'
import '../styles/property.css'

import propTypes from 'prop-types'

function RentPage({result}) {

  return (
  
    <div className='properties'>
       {result}
    </div>
   
  )
}

RentPage.propTypes = {
   result: propTypes.array,
  }

export default RentPage