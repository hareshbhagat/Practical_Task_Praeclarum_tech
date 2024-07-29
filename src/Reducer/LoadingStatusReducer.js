// import { IS_LOADING } from "../../Constant";

let defaultState = {
  loading: false
  
};

const LoadingStatusReducer = (state = defaultState, action) => {
  
  switch (action.type) {
    // case IS_LOADING:
    //   return Object.assign({}, state, {
    //     loading: action.payload.loading
    //   });
    default:
      return state;
  }
};
export default LoadingStatusReducer;
