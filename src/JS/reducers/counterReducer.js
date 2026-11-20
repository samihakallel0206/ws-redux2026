import { DECREMENT, INCREMENT } from "../actionType/actionType.counter";

// initialState

const initialState = {
  counter: 0,
};

//pure function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + action.payload };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - 1 : state.counter,
      };
    default:
      return state;
  }
};

//export
export default counterReducer;
