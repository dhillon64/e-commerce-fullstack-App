export default (state = { product: { reviews: [] } }, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT_REQUEST":
      return { loading: true, ...state };
    case "FETCH_PRODUCT_SUCCESS":
      return { loading: false, product: action.payload };
    default:
      return state;
  }
};
