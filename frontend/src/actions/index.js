import axios from "axios";

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await axios.get("/api/products");

    dispatch({
      type: "FETCH_PRODUCTS",
      payload: response.data,
    });
  };
};

export const fetchProduct = (id) => async (dispatch) => {
  dispatch({
    type: "FETCH_PRODUCT_REQUEST",
  });
  const response = await axios.get(`/api/products/${id}`);

  dispatch({
    type: "FETCH_PRODUCT_SUCCESS",
    payload: response.data,
  });
};

export const addToCart = (id, qty) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`/api/products/${id}`);

    dispatch({
      type: "CART_ADD_ITEM",
      payload: {
        product: response.data._id,
        name: response.data.name,
        image: response.data.image,
        price: response.data.price,
        countInStock: response.data.countInStock,
        qty: qty,
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: "REMOVE_FROM_CART",
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const LogIn = (formValues) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "LOGIN_REQUEST",
      });

      const response = await axios.post("/api/users/login", formValues);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: response.data,
      });
      localStorage.setItem("userInfo", JSON.stringify(response.data));
    } catch (error) {
      dispatch({
        type: "LOGIN_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export const logOut=()=>{
  localStorage.removeItem("userInfo");
  return{
    type:"LOGOUT"
  }
}

export const register=(formValues)=>{
  return async (dispatch)=>{
    try{
    dispatch({
      type:"REGISTER_REQUEST"
    })

    const response=await axios.post('/api/users',formValues);

    dispatch({
      type:"REGISTER_SUCCESS",
      payload:response.data
    })

    dispatch({
      type:"LOGIN_SUCCESS",
      payload:response.data
    })
    localStorage.setItem("userInfo", JSON.stringify(response.data));

  }
  catch(error){
    dispatch({
      type:'REGISTER_FAIL',
      payload:error.response&& error.response.data.message
      ? error.response.data.message :error.message
    })
  }
  }
}

export const getUserDetails=(id)=>{
  return async (dispatch,getState)=>{
    try{
    dispatch({
      type:"USER_DETAILS_REQUEST"
    })

    const {userLogin:{userInfo}}=getState();

    const config={
      headers:{
        "Content-Type": "application/json",
        Authorization:`Bearer ${userInfo.token}`
      }
    }

    const response=await axios.get(`/api/users/${id}`,config);

    dispatch({
      type:"USER_DETAILS_SUCCESS",
      payload:response.data
    })

  }
  catch(error){
    dispatch({
      type:"USER_DETAILS_FAIL",
      payload:error.response&& error.response.data.message
      ? error.response.data.message :error.message
    })
  }
  }
}

export const updateUserDetails=(user)=>{
  return async (dispatch,getState)=>{
    try{
    dispatch({
      type:"USER_UPDATE_REQUEST"
    })

    const {userLogin:{userInfo}}=getState();

    const config={
      headers:{
        "Content-Type": "application/json",
        Authorization:`Bearer ${userInfo.token}`
      }
    }

    const response=await axios.put(`/api/users/profile`,user,config);

    dispatch({
      type:"USER_UPDATE_SUCCESS",
      payload:response.data
    })

  }
  catch(error){
    dispatch({
      type:"USER_UPDATE_FAIL",
      payload:error.response&& error.response.data.message
      ? error.response.data.message :error.message
    })
  }
  }
}