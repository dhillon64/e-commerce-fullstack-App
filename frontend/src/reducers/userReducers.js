export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return { loading: false, userInfo: action.payload };
    case "LOGIN_FAIL":
      return { loading: false, error: action.payload };
      
      case "USER__UPDATE_REQUEST":
        return {
          ...state,loading:true
        };
        
        case "USER_UPDATE_SUCCESS":
          return {...state,
            loading:false,
            userInfo:action.payload,
            success:true
          }
          
          case "USER_UPDATE_FAIL":
            return {
              ...state,
              loading:false,
              error:action.payload
            }
    case "LOGOUT":
      return {};

    default:
      return state;
  }
};

export const registerUser=(state={},action)=>{
  switch (action.type){
    case "REGISTER_REQUEST":
      return {
        loading:true
      };
      case "REGISTER_SUCCESS":
        return {
          loading:false,
          userInfo:action.payload
        }
        case "REGISTER_FAIL":
          return {
            loading:false,
            error:action.payload
          }
          default:
            return state
  }

}

export const UserDetailsReducer=(state={user:{}},action)=>{
  switch (action.type){
    case "USER_DETAILS_REQUEST":
      return {
        ...state,loading:true
      };
      case "USER_DETAILS_SUCCESS":
        return {
          loading:false,
          user:action.payload
        }
        case "USER_DETAILS_FAIL":
          return {
            loading:false,
            error:action.payload
          }
          default:
            return state
  }

}

export const updateUserDetailsReducer=(state={},action)=>{
  switch (action.type){
    case "USER__UPDATE_REQUEST":
      return {
        ...state,loading:true
      };
      case "USER_UPDATE_SUCCESS":
        return {
          loading:false,
          userInfo:action.payload,
          success:true
        }
        case "USER_UPDATE_FAIL":
          return {
            loading:false,
            error:action.payload
          }
          default:
            return state
  }

}


