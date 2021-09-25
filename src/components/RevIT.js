import { useState } from "react";
import "./RevIT.css";

// import { useSelector, useDispatch } from "react-redux";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Search from "./Search";
import ProductHome from "./ProductHome";
import ProductDetail from "./ProductDetail";

function RevIT() {
	// NOTE: if we managed this (effectively) global state
	// using Redux, we wouldn't have to pass all these
	// state values and updater functions as props to the
	// ProductHome and ProductDetail components below 🤔 .... TODO: Change it to Redux later
	const [resultsCache, setResultsCache] = useState({});
	const [slideshowIndex, setSlideshowIndex] = useState(0);
	const [lastSearchText, setLastSearchText] = useState("");

	return (
		<div className="RevIT">
			<Router>
				<Route path="/">
					<Search setCache={setResultsCache} />
				</Route>
				<Route exact path="/product/:query">
					<ProductHome
						setCache={setResultsCache}
						cache={resultsCache}
						setLastSearchText={setLastSearchText}
						setSlideshowIndex={setSlideshowIndex}
					/>
				</Route>
				<Route exact path="/productDetail/:sku">
					<ProductDetail
						slideshowIndex={slideshowIndex}
						setSlideshowIndex={setSlideshowIndex}
						lastSearchText={lastSearchText}
						cache={resultsCache?.products}
					/>
				</Route>
			</Router>
		</div>
	);
}

export default RevIT;
