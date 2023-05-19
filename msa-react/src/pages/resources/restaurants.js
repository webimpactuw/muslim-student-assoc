function Restaurants() {
    return (
        <div className="restaurants-overall">
            <div className="center-headings">
                <h1 className="halal-restaurants">Halal Restaurants</h1>
                <h3 className="list-restaurants-heading">List of Halal Restaurants Nearby</h3>
            </div>
            <div className="restaurants-body">
                <div className="halal-restaurants-maps">
                    <iframe
                        src="https://www.google.com/maps/d/u/0/embed?mid=1u8ERVmzE7l4eFrDv_rJYdcvPh3Mq_kE&ehbc=2E312F" 
                        width="480" 
                        height="600"
                    />
                </div>
                <div className="restaurant">
                    <h6 className="restaurant-pray-name">1. Aladdin's (Middle Eastern Gyros)</h6>
                    <p className="restaurant-address-1">4139 University Way NE</p>
                    <p className="restaurant-address-2">4541 University Way NE</p>
                    <h6 className="restaurant-pray-name">2. Burger and Kabob Hut (Burgers)</h6>
                    <p className="restaurant-address-2">4142 University Way NE</p>
                    <h6 className="restaurant-pray-name">3. Garam Masala (Pakistan/Indian)</h6>
                    <p className="restaurant-address-2">4537 University Way NE</p>
                    <h6 className="restaurant-pray-name">4. Shawarma King (Middle Eastern/Gyros)</h6>
                    <p className="restaurant-address-2">4337 University Way NE</p>
                    <h6 className="restaurant-pray-name">5. Sultan's (Middle Eastern/Gyros)</h6>
                    <p className="restaurant-address-2">4222 University Way NE</p>
                    <h6 className="restaurant-pray-name">6. Persepolis Grill (Persian)</h6>
                    <p className="restaurant-address-2">5517 University Way NE</p>
                    <h6 className="restaurant-pray-name">7. Taste of India (Indian)</h6>
                    <p className="restaurant-address-2">5517 Roosevelt Way</p>
                </div>
            </div>
        </div>
    );
};

export default Restaurants;