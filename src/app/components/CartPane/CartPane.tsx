import { useAtom } from "jotai";
import { cartSlidingPane , ProfileSlidingPane} from "../../store/Homepage/HomepageAtom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import style from "./CartPane.module.css";
import Image from "next/image";
import React, { useState, useEffect, use } from "react";
import { json } from "stream/consumers";
import { doGet, doPostRaw } from "../../store/api"
import { error } from "console";
import Link from "next/link";
import { API_TOKEN } from "../../store/Homepage/HomepageAtom";




const Counter: React.FC = (props) => {
  const [cartPaneState, setcartSlidingPane] = useAtom<any>(cartSlidingPane);
  const [data, ShowData] = useState<any>([]);
  const [data1, setdata1] = useState<any>([]);
 console.log(data1,"cart all values sssssssss")




  //  response()

  // const button1 = () => {
  //   setdata("Place order")
  // };

  // const btn = () => {
  // }

  async function ShowCartValue() {
    const fetchValue = await doGet("cart", {}, API_TOKEN)
    setdata1(fetchValue)


    console.log(fetchValue, "cart infromation")
    // console.log(response,"new cart")
  }
  console.log(data1)

  const getLocalStorage = async (key: any) => {
    return await localStorage.getItem(key);
  }




  useEffect(() => {
    getlist()
  
  }, [cartPaneState]);

 function getlist(){
  ShowCartValue();
  getLocalStorage('userDetails').then((data: any) => {
    setdata1(JSON.parse(data))
  }).catch((error) => {
    console.log(setdata1)
  });
 }

            
  
  
                                              // delete api in cart






// {
//   const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YzgxZGZlYTYyNTFlNGE0MmI3NDEwYyIsImlhdCI6MTcyNTA4OTg5MSwiZXhwIjoxNzI1Njk0NjkxfQ.4Oj94dSdboWVSL0hrHmGlCsRugGjMC5Wc4SX_ggzWIQ"
//  let result=await fetch("https://backendapitoys.com/api/v1/cart?product_id"+_id,{
//     method: "DELETE",
//     headers: {
//       "Content-Type": "application/json",
//       'Authorization': `Token ${token}`
//     },
//     body: JSON.stringify({ _id: 'item-id-to-delete' }), 
  
  

//   },)  
//   if (result.ok) {
//     console.log('Item deleted successfully');
//   } else {
//     console.error('Failed to delete item');
//   }
//   result=await result.json();
//   console.log(result)
  





async function deleteproduct(_id:any){
  const myHeaders = new Headers();
  myHeaders.append("Authorization", API_TOKEN);
  myHeaders.append("Cookie", "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YzgxZGZlYTYyNTFlNGE0MmI3NDEwYyIsImlhdCI6MTcyOTQ4ODEzNiwiZXhwIjoxNzMwMDkyOTM2fQ.KJP1yYtr-8mgScX1_XQDoeJqN4Omlq9Jhyh-nl3Un9k");
  
  const requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow"
  };

  fetch("https://backendapitoys.com/api/v1/cart?product_id=all"+_id, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
    getlist()
  alert("delete sucessfully....")

  }
  return (
    <div>
      <SlidingPane
        className={style.cartsidemodalcustomclass}
        overlayClassName={style.cartsidemodalcustomoverlayclass}
        isOpen={cartPaneState}
        from="left"
        hideHeader={true}
        width="30%"
        onRequestClose={() => {
          // @ts-ignore
          setcartSlidingPane(false);
          // triggered on "<" on left top click or on outside click
        }}
      >
        <>


          <h1 className={style.heading}>My Cart { } {data1?.data?.product_ids?.length}</h1>
          {data1?.data?.product_ids?.map((data: any, i: any) => {

            return (
              <div key={i} className={style.contanier}>
              <div>                <Image
           src={data.images[0]?.url}
            width="47"
            height="62"
            alt="product image"
            
            className={style.image}
          ></Image>
          </div>
          <div className={style.productName}>{data.name}</div>
          <div className={style.productprice}>₹{data.offerprice
          }
            <del className={style.del}>₹{data.maximumretailprice
            }</del>
            <div><Image   src="/page1icon/cross.png"
            width="47"
            height="62"
            alt="product image" onClick={()=>deleteproduct(data?._id)} className={style.Btn}></Image></div>
           
          </div>

        </div>



             
            )
          })}
          <div className={style.part1}>
<Link href="/confirm">

<button   onClick={() => setcartSlidingPane(false)}   className={style.Btn2}>CheckOut</button>
</Link></div>














        </>
        <br />
      </SlidingPane>
    </div >
  );
};

export default Counter;
