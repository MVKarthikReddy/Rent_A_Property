import '../styles/searchProperty.css'
import {AiFillDollarCircle} from 'react-icons/ai'
import {MdMyLocation} from 'react-icons/md'
import {BsCalendarDate} from 'react-icons/bs'
import propTypes from 'prop-types'


function SearchProperty({handleButton,handleInputChange,handleLocation,handleDate,handlePrice,handleProperty}) {
  return (
    <div className='search-section'>
        <div className='search-header'>
            <div>
                <h2>SearchProperty</h2>
            </div>
            <div className='search-by-name'>
                <input className='search-box' type='text' onChange={handleInputChange} placeholder='Search by title'/>
            </div>
        </div>
        <div className='search-properties'>
        
            <div className='search-item search-by-location'>
                <span><span> </span>Location <MdMyLocation/> </span>
                <input className='search-box' onChange={handleLocation} placeholder='Avengers Adda etc..' type='text' />
            </div>

            <div className='search-item search-by-date'>
                <span>When <BsCalendarDate/> </span>
                <input className='search-box' onChange={handleDate} type='date' />
            </div>

            <div className='search-item search-by-price'>
                <span>Price <AiFillDollarCircle/></span>
                <input className='search-box' onChange={handlePrice} placeholder='250000-500000 ' type='text'  />
            </div>

            <div className='search-item search-by-type'>
                <span>Property Type</span>
                <input className='search-box' onChange={handleProperty} placeholder='house,villa etc..' type='text' />
            </div>

            <div className='search-button' onClick={handleButton} name="Search">
                Search
            </div>

        </div>
    </div>
  )
}

SearchProperty.propTypes = {
    handleButton : propTypes.func,
    handleInputChange : propTypes.func,
    handleLocation : propTypes.func,
    handleDate : propTypes.func,
    handlePrice : propTypes.func,
    handleProperty : propTypes.func
    }

export default SearchProperty