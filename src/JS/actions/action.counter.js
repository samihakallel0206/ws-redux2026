//action Increment

import { DECREMENT, INCREMENT } from "../actionType/actionType.counter";

export const increment = (pas) => {
  return {
    type: INCREMENT,
    payload: pas
  };
};

//action Decrement
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};


















// export const addMovie=(newMovie)=>{
//   return {
//     type:"ADDMOVIE",
//     payload: newMovie,
//   }
// }

// export const deposite=(sommeDepose)=>{
//     return {
//         type:"DEPOSITE",
//         payload:sommeDepose
//     }
// }