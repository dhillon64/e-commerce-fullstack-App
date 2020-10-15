export default (state = { products: [] }, action) => {
  switch (action.type) {
    case "FETCH_TOP_PRODUCTS_REQUEST":
      return {
        loading: true,
        products: [],
      };

    case "FETCH_TOP_PRODUCTS_SUCCESS":
      return {
        loading: false,
        products: action.payload,
      };

    default:
      return state;
  }
};
