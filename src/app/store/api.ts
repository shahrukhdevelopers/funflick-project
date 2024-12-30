import {links} from "./links";
import { location } from "./locations";
import ObjectHelper from "./objecthelper";
// import NetInfo from "@react-native-community/netinfo";
// import { resetScreen, Screens } from "../helpers/Screens";
// import { setToken } from "../containers/LoginScreen/loginSlice"
// import SpinnerActions from "../containers/spinner/SpinnerActions";

const getLocation = (location : any) => {
  return links?.baseApi + location;
};


async function status(response : any) {

  if (response.status >= 200 && response.status < 300) {
    // alert('Working fine ')
  }
  if (response.status >= 401 && response.status <= 403) {
    // alert(`Token expired please login again\nError code : ${response?.status}`)
    // setToken(null)
    // resetScreen(Screens?.Login)
  }
  if (response.status == 400 || (response.status >= 404 && response.status < 500)) {
    alert(`Something went wrong, please try again later\nError code : ${response?.status} `)
  }
  if (response.status >= 500) {
    alert(`Server error, we are working on it please wait for sometime\nError code : ${response?.status} `)
  }
}


export const doPut = async (thunk : any, location : any, query : any, body : any, token : any) => {
  let url = getLocation(location) + ObjectHelper.getQueryString(query);
  const config = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  if (token) {
    // config.headers["Authorization"] = `${token}`;
  }

  // const NetInfoData = await NetInfo.fetch()
  // thunk.dispatch(SpinnerActions.showSpinner())

  // if (!NetInfoData?.isInternetReachable || !NetInfoData?.isConnected) {
  //   alert("Please Check your internet connection")
  //   thunk.dispatch(SpinnerActions.hideSpinner())
  // }

  // const response = await fetch(url, config);
  // thunk.dispatch(SpinnerActions.hideSpinner())
  // console.log(url, response,body, "..................")
  // status(response)
  // return await response.json();
};


export const doDel = async (thunk : any, location : any, query : any, body : any, token : any) => {
  let url = getLocation(location) + ObjectHelper.getQueryString(query);
  const config = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  // if (token) {
  //   config.headers["Authorization"] = `Token ${token}`;
  // }
  // thunk.dispatch(SpinnerActions.showSpinner())
   const response = await fetch(url, config);
  // thunk.dispatch(SpinnerActions.hideSpinner())
   console.log(response, url, body,".............")
  // status(response)
  // return await response.json();
};

export const doGet = async (location : string, query? : any, token? : any) => {
  let url = getLocation(location) + ObjectHelper.getQueryString(query);

  const config : any = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) {
    config.headers["Authorization"] = `${token}`;
  }
  // thunk.dispatch(SpinnerActions.showSpinner())
  const response = await fetch(url, config);
  // thunk.dispatch(SpinnerActions.hideSpinner())
  // status(response)
  // console.log(response, url,token, ".............")
  return await response.json();
};

export const doPost = async (location : string, query? : any, body? : any, token? : any) => {
  let url = getLocation(location) + ObjectHelper.getQueryString(query);
 
  const requestOptions : any = {
    method: "POST",
    body: body,
    redirect: "follow"
  };

  const response = await fetch(url, requestOptions)
  return await response.json();
}

export const doPostRaw = async (location : string, query? : any, body? : any, token? : any) => {
  let url = getLocation(location) + ObjectHelper.getQueryString(query);

  const requestOptions : any = {
    method: "POST",
    body: JSON.stringify(body),
    redirect: "follow",
    headers :{
      "Content-Type" : "application/json"
    }
  };

    if (token) {
      requestOptions.headers["Authorization"] = `${token}`;
    }

  const response = await fetch(url, requestOptions)
  return await response.json();
}


export const doPatch = async (location : string, query? : any, body? : any, token? : any) => {
  let url = getLocation(location) + ObjectHelper.getQueryString(query);

  const requestOptions : any = {
    method: "PATCH",
    body: JSON.stringify(body),
    redirect: "follow",
    headers : {
      "Content-Type" : "application/json"
    }
  };

  if(token){
    if (token) {
      requestOptions.headers["Authorization"] = `Bearer ${token}`;
    }
  }

  const response = await fetch(url, requestOptions)
  return await response.json();
}



