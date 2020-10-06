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
