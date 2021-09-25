// https://redux.js.org/tutorials/fundamentals/part-1-overview

// EXTENSION: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related

// https://react-redux.js.org/tutorials/quick-start

import { createStore } from 'redux';

const initialState = {
  counter: 1,
  slideshowIndex: 0,
  resultsCache: {},
  lastSearchText: '',
  favourites: [],
};

// Create a "reducer" function that determines what the new state
// should be when something happens in the app

// noticw default argument for 'state' here, to set up initial state values
function reducer(state = initialState, action) {
  // Reducers usually look at the type of action that happened
  // to decide how to update the state
  console.log('action', action);
  switch (action.type) {
    case "counter/incremented":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "counter/decremented":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "favourites/add":
      return {
        ...state,
        favourites: [ action.payload, ...state.favourites ]
      };
    case "favourites/remove-by-id":
      // const favourites = [...state.favourites];
      // const index = favourites.findIndex( f => f.id === action.payload );
      // favourites.splice(index, 1);
      const favourites = state.favourites.filter( f => f.id !== action.payload );
      return { ...state, favourites };
    default:
      // If the reducer doesn't care about this action type,
      // return the existing state unchanged
      return state;
  }
} // reducer

// need try/catch when using localStorage() in case privacy settings prevent access
const persistentState = localStorage.getItem('store')
  ? JSON.parse(localStorage.getItem('store'))
  : initialState;


// Create a new Redux store with the `createStore` function,
// and use the `reducer` for the update logic

export const store = createStore(
  reducer,
  { ...initialState, ...persistentState}, // merge; this 2nd arg prevents reducer() from getting default first argument i.e. initialState
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log('subscribe');
  const state = store.getState();
  const serializedState = JSON.stringify(state); // TODO: save only SOME state
  localStorage.setItem('store', serializedState);
  // console.log('localStorage PERSIST', serializedState);
});
