"use client";
import React, { useEffect, useState } from "react";
import styles from "./product.module.css";
import Image from "next/image";

import { useAtom } from 'jotai';
import { doGet, doPostRaw } from "../store/api"
import { ProfileSlidingPane, headersearchvalue, filtershowvalues, Genderfilter, Maximumretailpricefilter, API_TOKEN } from '../store/Homepage/HomepageAtom';
import ReactPaginate from 'react-paginate';
import Snackbar from '@mui/material/Snackbar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


import CartegoriesFIter from "./cartegories";






const ProDuctpage = () => {


  const [productData, setProductData] = useState<any>({});
  const [userData, setuserData] = useState<any>()
  const [profilePaneState, setProfileSlidingPane] = useAtom<any>(ProfileSlidingPane);
  const [currentPage, SetCurrentPage] = useState(1)
  const [pageCount, setPageCount] = useState(9); // Number of total pages
  const [search, setsearch] = useAtom<string>(headersearchvalue)
  const itemsPerPage = 9; // Define how many products per page
  const [show, SetShow] = useAtom<string>(filtershowvalues)
  const [showGender, setShowGender] = useAtom<string>(Genderfilter);
  const [showPrice, setShowPrice] = useAtom<string>(Maximumretailpricefilter);
 
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  // const [snackbarPosition] = useState({ vertical: 'Top', horizontal: 'center' });
  console.log("here is product page data......", productData)
  const datashowvalue = {


  }
  async function makerequest(page: number) {
    const response = await doGet(`products`, { name: search, limit: itemsPerPage, page: page, offerprice: show, maximumretailprice: showPrice, gender: showGender, })
    setProductData(response)
    console.log(response, "sssssssssssssssss")

    if (response?.total) {
      setPageCount(Math.ceil(response.total / itemsPerPage));
    }
  }

  const getLocalStorage = async (key: any) => {
    return await localStorage.getItem(key);
  }


  useEffect(() => {
    makerequest(currentPage);
    getLocalStorage('userDetails').then((data: any) => {
      setuserData(JSON.parse(data))

    }).catch((error) => {

    });
  }, [currentPage, search, show, showPrice, showGender]
  );

  const onAddToCart = async (product: any) => {
    const body = {

      "product_ids": [`${product._id}`]


    }

    // alert("your item is selected")
    console.log(body)
    // console.log(product._id)

    if (userData) {
      // @ts-ignore
      setProfileSlidingPane(true)
    } else {
      const res = await doPostRaw("cart", {}, body, API_TOKEN)

    }
    setSnackbarOpen(true);

  }
  const handlePageClick = (event: any) => {
    SetCurrentPage(event.selected + 1);
    makerequest(event.selected + 1);
  };
  const handleSnackbarClose = (_: any, reason: string) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  return (
    <div>
      <div className={styles.maindiv}>
        <div className={styles.leftside}>
          <h1 className={styles.headingapi}>CATEGORIES</h1>
          <CartegoriesFIter />
          <div className={styles.watchesname}>

          </div>
          {/* Search input box */}
        </div>

        {productData?.products?.map((product: any, i: number) => {
          const discount = ((product.maximumretailprice - product.offerprice) / product.maximumretailprice) * 100;
          console.log(product.images)
          return (
            <div key={i} className={styles.contanier}>
              <div className={styles.rightside}>
                <div className={styles.maincart}>
                  <div className={styles.card1}>

                    <div className={styles.imageproduct}>
                      <Image

                        alt="product Image"
                        className={styles.imggecart}
                        src={product.images[0]?.url}
                        // src={'/page1icon/smartwatch3.png'}
                        height="100"
                        width="120"
                        priority
                      ></Image></div>
                    <p className={styles.text}>{product.name}</p>
                    <p className={styles.text1}>{product.description}</p>
                    <p className={styles.Special}>Special Price</p>
                    <div className={styles.rupessdiv}>
                      <h1 className={styles.rupess}>₹{product.offerprice}</h1>
                      <span>
                        <del className={styles.del}>₹{product.maximumretailprice} </del>
                      </span>
                      <p className={styles.discount}>{discount.toFixed(2)}% off</p>
                    </div>
                    <div className={styles.buttoncart}>
                    <button onClick={() => onAddToCart(product)} className={styles.btn1}>
                  ADD TO CART
                </button>
                      <button className={styles.btn2}>BUY NOW</button>
                    </div>

                




                    {/* <p className={styles.p11}>{data}</p>
              <p className={styles.p11}>{data1}</p>
             */}
                  </div>

                </div>

              </div>
            </div>
          )
        })}
        <div className={styles.pagination}>

          {/* Pagination component */}
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
          /></div>
   {/* Snackbar */}
   <Snackbar
   autoHideDuration={2000}
        anchorOrigin={{vertical:'top',horizontal:'center'}}
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message={
          <span className={styles.customSnackbar}>
            <CheckCircleIcon style={{ marginRight: '8px' }} /> Product added to cart!
          </span>
        }
      />

      </div>
    </div>
  );
};

export default ProDuctpage;
