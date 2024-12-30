"use client"
import React, { useState } from 'react';
import styles from './update_product.module.css';
import { doPost } from '../store/api';
import { API_TOKEN } from '../store/Homepage/HomepageAtom';

const Update = () => {
  const [formData, setFormData] = useState({
    name: '',
    maximumRetailPrice: '',
    offerPrice: '',
    actualPrice: '',
    description: '',
    gender: '',
    ratings: '',
    seller: '',
    stock: '',
    category: '',
  });

  const [file, setFile] = useState<File | null>(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]); // Store the selected file in state
    }
  };

  // Submit function to send the form data
  async function submit() {
    
    const formdata = new FormData();
    formdata.append("name", formData.name);
    formdata.append("maximumretailprice", formData.maximumRetailPrice);
    formdata.append("offerprice", formData.offerPrice);
    formdata.append("actualPrice", formData.actualPrice);
    formdata.append("description", formData.description);
   formdata.append("gender", formData.gender); 
  formdata.append("ratings", formData.ratings);
    formdata.append("seller", formData.seller);
    formdata.append("stock", formData.stock);

  
    if (file) {
      formdata.append("product_images", file); // Append the selected file
    }
  
    const response = await doPost("admin/product/new", {}, formdata, API_TOKEN);
    console.log(response);
  }

  return (
    <div>
      <div className={styles.maindiv}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="maximumRetailPrice">Maximum Retail Price</label>
          <input type="text" id="maximumRetailPrice" value={formData.maximumRetailPrice} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="offerPrice">Offer Price</label>
          <input type="text" id="offerPrice" value={formData.offerPrice} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="actualPrice">Actual Price</label>
          <input type="text" id="actualPrice" value={formData.actualPrice} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" value={formData.description} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <input type="text" id="gender" value={formData.gender} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="ratings">Ratings</label>
          <input type="text" id="ratings" value={formData.ratings} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="productImage">Product Image</label>
          <input type="file" id="productImage" onChange={handleFileChange} />
        </div>
        <div>
          <label htmlFor="seller">Seller</label>
          <input type="text" id="seller" value={formData.seller} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="stock">Stock</label>
          <input type="text" id="stock" value={formData.stock} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <input type="text" id="category" value={formData.category} onChange={handleChange} />
        </div>
        <button onClick={submit}>Update</button>
      </div>
    </div>
  );
};

export default Update;
