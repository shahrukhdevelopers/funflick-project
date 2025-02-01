import { doPostRaw } from "../store/api"
import { API_TOKEN } from "../store/Homepage/HomepageAtom"

 const onAddToCart = async (product: any) => {

    const body = {

      "product_ids": [`${product._id}`]


    }

    // alert("your item is selected")
    console.log(body)
    // console.log(product._id,"iphone......")

    if  (!userData) {
      // @ts-ignore
      // console.log("userdata",userData),
      setProfileSlidingPane(false)
    } else {
      const res = await doPostRaw("cart", {}, body, API_TOKEN)
console.log("hello",res)
    }
    // setSnackbarOpen(true);

  }
  export default onAddToCart