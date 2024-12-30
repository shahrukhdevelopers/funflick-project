import React, { useState, useEffect } from 'react';
import styles from "./product.module.css";
import { filtershowvalues,Genderfilter,Maximumretailpricefilter } from '../store/Homepage/HomepageAtom';
import { useAmp } from 'next/amp';
import { useAtom } from 'jotai';
const CategoriesFilter = () => {
    // States for filters
    const [gender, setGender] = useState("all");
    const [price, setPrice] = useState(100000);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(5500);
   
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useAtom<string>(filtershowvalues);
    const [showGender, setShowGender] = useAtom<string>(Genderfilter);
    const [showPrice, setShowPrice] = useAtom<string>(Maximumretailpricefilter);

    // Handle gender selection
    const handleGenderChange = (e:any) => setGender(e.target.value);

    // Handle the price slider change
    const handlePriceChange = (e:any) => setPrice(e.target.value);

    // Handle min and max price change from dropdowns
    const handleMinPriceChange = (e:any) => setMinPrice(e.target.value);
    const handleMaxPriceChange = (e:any) => setMaxPrice(e.target.value);

   
  

    // Fetch products based on selected filters
    const fetchProducts = async () => {
        setLoading(true);
        
        const url = `https://backendapitoys.com/api/v1/products?offerPrice=${minPrice}-${maxPrice}&gender=${gender}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data.products || []); // Assuming API response structure
        } catch (error) {
            console.error('Error fetching products:', error);
        }
        setLoading(false);
    };

    // Handle "Apply Filters" button click
    const filters = (e) => {
        setShow(`Filters applied: Price between ₹${minPrice} and ₹${maxPrice}, Gender: ${gender}`);
        setShowGender(gender); 
        setShowPrice(`₹${minPrice} - ₹${maxPrice}`); 

        fetchProducts(); 
       
    };
    type Product = {
        _id: string;
        name: string;
        offerprice: number; // Ensure this matches your API field name
      };
    return (
        <div>
            <div className={styles.watchesname}>
                <p>Gender:</p>
                <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    onChange={handleGenderChange}
                />
                <label htmlFor="male">Male</label> <br />
                <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    onChange={handleGenderChange}
                />
                <label htmlFor="female">Female</label> <br />
                <input
                    type="radio"
                    id="all"
                    name="gender"
                    value="all"
                    onChange={handleGenderChange}
                    defaultChecked
                />
                <label htmlFor="all">All</label>

                {/* Price Filter */}
                <div className={styles.pricefilter}>
                    <p><b>Price</b></p>
                    <input
                        type="range"
                        min="0"
                        max="100000"
                        value={price}
                        onChange={handlePriceChange}
                    />
                    <p>Selected Price: ₹{price}</p>

                    <div className={styles.selectprice}>
                        <div>
                            <select
                                name="minPrice"
                                id="minPrice"
                                className={styles.selectbox1}
                                value={minPrice}
                                onChange={handleMinPriceChange}
                            >
                                <option value="0">₹0</option>
                                <option value="1100">₹1100</option>
                                <option value="1400">₹1400</option>
                                <option value="2200">₹2200</option>
                            </select>
                        </div>
                        <p> to </p>
                        <div>
                            <select
                                name="maxPrice"
                                id="maxPrice"
                                className={styles.selectbox1}
                                value={maxPrice}
                                onChange={handleMaxPriceChange}
                            >
                                <option value="5500">₹5500</option>
                                <option value="4500">₹4500</option>
                                <option value="3000">₹3000</option>
                                <option value="2500">₹2500</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Ratings Filter */}
                <div className={styles.rating}>
                    <p><b>Customer Ratings</b></p>
                    <input
                        type="checkbox"
                        id="4star"
                        value="4"
                     
                    />
                    <label htmlFor="4star">4★ & above</label> <br />
                    <input
                        type="checkbox"
                        id="3star"
                        value="3"
                       
                    />
                    <label htmlFor="3star">3★ & above</label> <br />
                    <input
                        type="checkbox"
                        id="2star"
                        value="2"
                       
                    />
                    <label htmlFor="2star">2★ & above</label> <br />
                    <input
                        type="checkbox"
                        id="1star"
                        value="1"
                     
                    />
                    <label htmlFor="1star">1★ & above</label>
                </div>

                {/* Apply Filters Button */}
                <button className={styles.filers} onClick={filters}>Apply Filters</button>

                {/* Loading Indicator */}
                {loading && <p>Loading products...</p>}

                {/* Display Products */}
                <div>
                    {products.length > 0 ? (
                        <ul>
                            {products?.map((product) => (
                                <li key={product._id}>
                                    {product.name} - ₹{product.offerprice}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        !loading && <p>No products found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CategoriesFilter;