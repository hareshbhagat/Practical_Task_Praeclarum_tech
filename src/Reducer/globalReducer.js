import { ListData } from '../Constant';

let defaultState = {
  ListData: [], 
};

const globalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ListData:
      return {
        ...state,
        ListData: [...state.ListData, ...action.payload] 
      };

      case "UpdateData":
      return {
        ...state,
        ListData: state.ListData.map(event =>
          event.id === action.payload.id ? action.payload : event
        )
      };
    default:
      return state;
  }
};

export default globalReducer;
