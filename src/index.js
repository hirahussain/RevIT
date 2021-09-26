import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RevIT from "./components/RevIT";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { store } from "./store";

// https://react-redux.js.org/tutorials/quick-start
// EXTENSION: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related
// store.subscribe(() => {
//   const state = store.getState();
//   const serializedState = JSON.stringify(state);
//   console.log('localStorage PERSIST', serializedState);
//   localStorage.setItem('store', serializedState);
// });s

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<RevIT />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
