export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_CREATE_REQUEST":
      return {
        loading: true,
      };
    case "ORDER_CREATE_SUCCESS":
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case "ORDER_CREATE_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const OrderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case "GET_ORDER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ORDER_SUCCESS":
      return {
        loading: false,
        order: action.payload,
      };
    case "GET_ORDER_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const OrderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORDER__PAY_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "ORDER_PAY_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ORDER_PAY_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    case "ORDER_PAY_RESET":
      return {};
    default:
      return state;
  }
};

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case "ORDER__LIST_REQUEST":
      return {
        loading: true,
      };
    case "ORDER_LIST_SUCCESS":
      return {
        loading: false,
        orders: action.payload,
      };
    case "ORDER_LIST_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
