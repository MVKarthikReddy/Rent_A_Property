import { useState,useEffect } from 'react'
import './App.css'
import propTypes from 'prop-types'
import Navbar from './components/Navbar'
import { BrowserRouter ,Routes ,Route } from 'react-router-dom'
import RentPage from './components/RentPage';
import axios from 'axios';
import Properties from './Propert/Properties';
import SellPage from './components/SellPage'
import BuyPage from './components/BuyPage'




const Home = ( {handleHome,handleRent,handleBuy,handleSell,handleButton,handleInputChange,handleLocation,handleDate,handlePrice,handleProperty,result} ) => {

  

  return (
    <>
     
      <Navbar 
              handleHome={handleHome}
              handleRent={handleRent}
              handleBuy={handleBuy}
              handleSell={handleSell}
              handleButton={handleButton} 
              handleInputChange={handleInputChange} 
              handleDate={handleDate} 
              handleLocation={handleLocation}
              handlePrice={handlePrice}
              handleProperty={handleProperty}
          />
        <RentPage result = {result}/>
      
    </>
  );
};

const Rent = ({handleHome,handleRent,handleBuy,handleSell,handleButton,handleInputChange,handleLocation,handleDate,handlePrice,handleProperty,result}) => {
  
  return (
    <>
      <Navbar 
              handleHome={handleHome}
              handleRent={handleRent}
              handleBuy={handleBuy}
              handleSell={handleSell}
              handleButton={handleButton} 
              handleInputChange={handleInputChange} 
              handleDate={handleDate} 
              handleLocation={handleLocation}
              handlePrice={handlePrice}
              handleProperty={handleProperty}
          />
      <RentPage result={result} />
    </>
  );
};

const Buy = ({handleHome,handleRent,handleBuy,handleSell,handleButton,handleInputChange,handleLocation,handleDate,handlePrice,handleProperty,result}) => {
  return (
    <>
      <Navbar 
              handleHome={handleHome}
              handleRent={handleRent}
              handleBuy={handleBuy}
              handleSell={handleSell}
              handleButton={handleButton} 
              handleInputChange={handleInputChange} 
              handleDate={handleDate} 
              handleLocation={handleLocation}
              handlePrice={handlePrice}
              handleProperty={handleProperty}
          />
      <BuyPage result={result}/>
    </>
  );
};

const Sell = ({handleHome,handleRent,handleBuy,handleSell,handleButton,handleInputChange,handleLocation,handleDate,handlePrice,handleProperty,result}) => {
  return (
    <>
      <Navbar 
              handleHome={handleHome}
              handleRent={handleRent}
              handleBuy={handleBuy}
              handleSell={handleSell}
              handleButton={handleButton} 
              handleInputChange={handleInputChange} 
              handleDate={handleDate} 
              handleLocation={handleLocation}
              handlePrice={handlePrice}
              handleProperty={handleProperty}
          />
      <SellPage result={result}/>
    </>
  );
};

function App() {
  const [houseDetails,setHouseDetails] = useState([])
  const [query, setQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [result,setResult] = useState([]) 


  // ------------- Loading Details of Properties ----------------
  async function getProperty(){

    const options = {
      method: 'GET',
      url: 'https://real-estate-data-20r8.onrender.com/properties',
    };

    try {
      var response =await axios.request(options);
      setHouseDetails(response.data)
      // console.log(response.data)
      setResult((response.data).map(
        ({ id,price, title, location, images, size, features }) => (
          <Properties
            key={id}
            price={price}
            title={title}
            location={location}
            images={images}
            size={size}
            features={features}
          />
        )
      ));
      
    } catch (error) {
      console.error(error);
    }
    
  }

  useEffect(() => {

    getProperty()

  },[])





  const filteredProperties = houseDetails.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

  
    
        // ----------- Search Filter -----------
    const handleInputChange = (event) => {
        // console.log(event.target.value)
        setQuery(event.target.value);          
      };

      // ----------- Location Filter -----------
      const handleLocation = (event) => {
        setSelectedLocation(event.target.value);
        console.log(selectedLocation)
      };
      
      // ----------- Date Filter -----------
      const handleDate = (event) => {
          // console.log(event.target.value)
          setSelectedDate(event.target.value);
      };

      // ------------ Price Filter -----------
      const handlePrice = (event) => {
        // console.log(event.target.value)
        setSelectedPrice(event.target.value);
      };

      // ------------ Property Type Filter -----------
      const handleProperty = (event) => {
        // console.log(event.target.value)
        setSelectedPropertyType(event.target.value);
      };

      
    
 

    function filteredPropertyData(houseDetails, selectedLocation, selectedDate,selectedPrice,selectedPropertyType , query) {
      let filteredProducts = filteredProperties;
  
      
      // Filtering Input Items
      if (query.toString().length > 1) {
        console.log("hello")
        filteredProducts = filteredProperties.filter(pro => (pro.title.toString()).toLowerCase().includes(query.toString().toLowerCase()));
      }
  
      // Applying Location filter
      if (selectedLocation.length > 1) {
        filteredProducts = filteredProducts.filter(
          pro => (pro.location).toLowerCase().includes(selectedLocation.toLowerCase())
        );
      }

      // Applying Date filter
      if (selectedDate!="") {
        console.log("hollo data")
        filteredProducts = filteredProducts.filter(
          pro => ((pro.date)==selectedDate)
        );
      }

      // Applying Price filter
      if (selectedPrice!=="") {
        const price = selectedPrice.split('-')
        filteredProducts = filteredProducts.filter(
          pro => (pro.price<=price[1] && pro.price>=price[0])
        );
      }

      
      // Applying PropertyType filter
      if (selectedPropertyType.toString().length > 1) {
        filteredProducts = filteredProducts.filter(
         pro => ((pro.propertyType)==selectedPropertyType.toString())
        );
      }
      

      return filteredProducts.map(
        ({ id,price, title, location, images, size, features }) => (
          <Properties
            key={id}
            price={price}
            title={title}
            location={location}
            images={images}
            size={size}
            features={features}
          />
        )
      );
    }
  
    const  handleButton = () => {
        setResult(filteredPropertyData(result, selectedLocation, selectedDate,selectedPrice,selectedPropertyType , query));
    }

    function HomeFilter(){
      let filteredProducts = filteredProperties;
      console.log("handling home")
      return(filteredProducts.map(
        ({ id,price, title, location, images, size, features }) => (
          <Properties
            key={id}
            price={price}
            title={title}
            location={location}
            images={images}
            size={size}
            features={features}
          />
        )
      ));
    }

    const handleHome = () => {
      setResult(HomeFilter())
    }

    const handleRent = () => {
      const rent = filteredProperties.filter(pro => (pro.type)=="rent")
      setResult(rent.map(
        ({ id,price, title, location, images, size, features }) => (
          <Properties
            key={id}
            price={price}
            title={title}
            location={location}
            images={images}
            size={size}
            features={features}
          />
        )
      ));
    }

    const handleBuy = () => {
      const buy = houseDetails.filter(pro => ((pro.type)=="buy"))
      setResult(buy.map(
        ({ id,price, title, location, images, size, features }) => (
          <Properties
            key={id}
            price={price}
            title={title}
            location={location}
            images={images}
            size={size}
            features={features}
          />
        )
      ));
    }


   


  
  return (
    <>
      <div>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home 
                                           handleHome={handleHome}
                                           handleRent={handleRent}
                                           handleBuy={handleBuy}
                                           handleSell={handleHome}
                                           handleButton={handleButton} 
                                           handleInputChange={handleInputChange} 
                                           handleDate={handleDate} 
                                           handleLocation={handleLocation}
                                           handlePrice={handlePrice}
                                           handleProperty={handleProperty}
                                           result={result}
                                           />} />
            <Route path='/rent' element={<Rent  handleHome={handleHome}
                                                handleRent={handleRent}
                                                handleBuy={handleBuy}
                                                handleSell={handleHome}
                                                handleButton={handleButton} 
                                                handleInputChange={handleInputChange} 
                                                handleDate={handleDate} 
                                                handleLocation={handleLocation}
                                                handlePrice={handlePrice}
                                                handleProperty={handleProperty}
                                                result={result}/>} />
            <Route path='/buy' element={<Buy 
                                                handleHome={handleHome}
                                                handleRent={handleRent}
                                                handleBuy={handleBuy}
                                                handleSell={handleHome}
                                                handleButton={handleButton} 
                                                handleInputChange={handleInputChange} 
                                                handleDate={handleDate} 
                                                handleLocation={handleLocation}
                                                handlePrice={handlePrice}
                                                handleProperty={handleProperty}
                                                result={result}/>} />

            <Route path='/sell' element={<Sell  handleHome={handleHome}
                                                handleRent={handleRent}
                                                handleBuy={handleBuy}
                                                handleSell={handleHome}
                                                handleButton={handleButton} 
                                                handleInputChange={handleInputChange} 
                                                handleDate={handleDate} 
                                                handleLocation={handleLocation}
                                                handlePrice={handlePrice}
                                                handleProperty={handleProperty}
                                                result={result}/>} />
          </Routes>
        </BrowserRouter>

      </div>
        
    </>
  )
}

Home.propTypes = {
  handleHome : propTypes.func,
  handleRent : propTypes.func,
  handleBuy : propTypes.func,
  handleSell : propTypes.func,
  handleButton : propTypes.func,
  handleInputChange : propTypes.func,
  handleLocation : propTypes.func,
  handleDate : propTypes.func,
  handlePrice : propTypes.func,
  handleProperty : propTypes.func,
  result : propTypes.array
  }

Rent.propTypes = {
  handleHome : propTypes.func,
  handleRent : propTypes.func,
  handleBuy : propTypes.func,
  handleSell : propTypes.func,
  handleButton : propTypes.func,
  handleInputChange : propTypes.func,
  handleLocation : propTypes.func,
  handleDate : propTypes.func,
  handlePrice : propTypes.func,
  handleProperty : propTypes.func,
  result : propTypes.array
}

Buy.propTypes = {
  handleHome : propTypes.func,
  handleRent : propTypes.func,
  handleBuy : propTypes.func,
  handleSell : propTypes.func,
  handleButton : propTypes.func,
  handleInputChange : propTypes.func,
  handleLocation : propTypes.func,
  handleDate : propTypes.func,
  handlePrice : propTypes.func,
  handleProperty : propTypes.func,
  result : propTypes.array
}

Sell.propTypes = {
  handleHome : propTypes.func,
  handleRent : propTypes.func,
  handleBuy : propTypes.func,
  handleSell : propTypes.func,
  handleButton : propTypes.func,
  handleInputChange : propTypes.func,
  handleLocation : propTypes.func,
  handleDate : propTypes.func,
  handlePrice : propTypes.func,
  handleProperty : propTypes.func,
  result : propTypes.array
}

export default App
