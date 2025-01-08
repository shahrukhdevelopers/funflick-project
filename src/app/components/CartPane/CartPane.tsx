import { useAtom } from "jotai";
import { cartSlidingPane, ProfileSlidingPane, API_TOKEN } from "../../store/Homepage/HomepageAtom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import style from "./CartPane.module.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { doGet } from "../../store/api";

interface CartData {
  data: {
    product_ids: Array<{
      _id: string;
      name: string;
      images: { url: string }[];
      offerprice: number;
      maximumretailprice: number;
    }>;
  };
}

const Counter: React.FC = () => {
  const [cartPaneState, setcartSlidingPane] = useAtom(cartSlidingPane);
  const [cartData, setCartData] = useState<CartData | null>(null);

  const fetchCartData = async () => {
    try {
      const response = await doGet("cart", {}, API_TOKEN);
      setCartData(response);
    } catch (err) {
      console.error("Error fetching cart data:", err);
    }
  };

  const deleteProduct = async (_id: string) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", API_TOKEN);

      const response = await fetch(
        `https://backendapitoys.com/api/v1/cart?product_id=${_id}`,
        { method: "DELETE", headers: myHeaders }
      );

      if (response.ok) {
        console.log("Item deleted successfully");
        fetchCartData(); // Refresh the cart data after deletion
      } else {
        console.error("Failed to delete item");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    if (cartPaneState) fetchCartData();
  }, [cartPaneState]);

  return (
    <div>
      <SlidingPane
        className={style.cartsidemodalcustomclass}
        overlayClassName={style.cartsidemodalcustomoverlayclass}
        isOpen={cartPaneState}
        from="left"
        hideHeader={true}
        width="30%"
        onRequestClose={() => setcartSlidingPane(false)}
      >
        <>
          <h1 className={style.heading}>
            My Cart {cartData?.data?.product_ids?.length || 0}
          </h1>
          {cartData?.data?.product_ids?.length > 0 ? (
            cartData.data.product_ids.map((product, index) => (
              <div key={index} className={style.container}>
                <Image
                  src={product.images[0]?.url || "/placeholder.png"}
                  width={47}
                  height={62}
                  alt="product image"
                  className={style.image}
                />
                <div className={style.productName}>{product.name}</div>
                <div className={style.productprice}>
                  ₹{product.offerprice}
                  <del className={style.del}>₹{product.maximumretailprice}</del>
                  <button
                    onClick={() => deleteProduct(product._id)}
                    className={style.Btn}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className={style.emptyCartMessage}>
              Your cart is empty. <Link href="/products">Browse Products</Link>
            </div>
          )}

          {cartData?.data?.product_ids?.length > 0 && (
            <div className={style.part1}>
              <Link href="/confirm">
                <button
                  onClick={() => setcartSlidingPane(false)}
                  className={style.Btn2}
                >
                  CheckOut
                </button>
              </Link>
            </div>
          )}
        </>
      </SlidingPane>
    </div>
  );
};

export default Counter;
