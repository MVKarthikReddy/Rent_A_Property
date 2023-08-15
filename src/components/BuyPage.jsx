import propTypes from 'prop-types'
import '../styles/property.css'

function BuyPage({handleBuy,handleButton,handleInputChange,handleLocation,handleDate,handlePrice,handleProperty,result}) {

  return (
    <>
      <div className='properties'>
        {result}
      </div>
    </>
  )
}

BuyPage.propTypes = {
   result: propTypes.array,
  }

export default BuyPage