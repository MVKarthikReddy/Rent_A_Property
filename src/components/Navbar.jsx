import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";
import { useNavigate } from 'react-router-dom'
import SearchProperty from "./SearchProperty";
import propTypes from 'prop-types'


export default function Navbar({handleHome,handleRent,handleBuy,handleSell,handleButton,handleInputChange,handleLocation,handleDate,handlePrice,handleProperty}) {
	const navRef = useRef();

    const navigate = useNavigate()

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<div>
		<header>
			<h3 style={{cursor:"pointer"}}>Rent-A-Property</h3>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
			<nav ref={navRef}>
                <span onClick={() => {
					
					handleHome()
					navigate("/")
					
					
					}}>Home</span>
				

                <span onClick={() => {

					handleRent()
					navigate("/rent")
					
					}}>Rent</span>

                <span onClick={() => {
					
					handleBuy()
					navigate("/buy")
					
					}}>Buy</span>

                <span onClick={() => {
					
					handleSell()
					navigate("/sell")
					
					}}>Sell</span>


				<span onClick={() => {navigate("/sell")}}>Manage Property</span>
				<span onClick={() => {navigate("/sell")}}>Resources</span>
          
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>

			<div className="lgn-sec">
                    <button className="lg-btn">
                        Sign up
                    </button>
                    <button className="lg-btn">
                        Sign in
                    </button>
            </div>  
		</header>
		<SearchProperty handleButton={handleButton} 
              handleInputChange={handleInputChange} 
              handleDate={handleDate} 
              handleLocation={handleLocation}
              handlePrice={handlePrice}
              handleProperty={handleProperty}
			
			/>
		</div>
	);
}

Navbar.propTypes = {
	handleHome :propTypes.func,
	handleRent :propTypes.func,
	handleSell :propTypes.func,
	handleBuy :propTypes.func,
	handleButton : propTypes.func,
	handleInputChange : propTypes.func,
	handleLocation : propTypes.func,
	handleDate : propTypes.func,
	handlePrice : propTypes.func,
	handleProperty : propTypes.func,
	
	}
