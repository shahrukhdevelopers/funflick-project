'use client'

import { doGet } from '@/app/store/api'
import React, { useEffect, useState } from 'react'
import PageDetails from '../page';  // Make sure to import your PageDetails component

const Page = ({ params }) => {
  // console.log(params, "params");

  const [product, setProduct] = useState(null);  // Store the fetched product data
  const [loading, setLoading] = useState(true);  // Manage loading state
console.log(product,"productdetails")
  // Fetch product details from the API
  const fetchDetail = async () => {
    setLoading(true);  // Start loading
    
      const response = await doGet(`/product/${params.id}`);
      setProduct(response);  // Store the fetched product in state
   
  };

  useEffect(() => {
    fetchDetail();  // Fetch product details on mount
  }, [params.id]);  // Re-fetch if product ID changes



  return (
    <div>
    
      {/* Pass the fetched product data to PageDetails component */}
      <PageDetails product={product} />
    </div>
  );
};

export default Page;
