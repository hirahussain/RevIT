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
	<div className="main">
		<div className="navbar">
			<a href="#home">Home</a>
			<a href="#products">Products</a>
			<a href="#stores">Stores</a>
			<a href="#categories">Categories</a>
			<a href="#recommendations">Recommendations</a>
			<a href="#contactus">Contact Us</a>
			<br /> <br />
			<h1 className="RevIT-header">We keep only Genuine and Usefull Reviews from Real Users like U.</h1>
			<React.StrictMode>
				<Provider store={store}>
					<RevIT />
				</Provider>
			</React.StrictMode>
		</div>
	</div>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
