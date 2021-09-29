import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// Components
import Loader from "../components/Loader/Loader";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// import ProductHome from "./ProductInfo/ProductHome";
// import ProductDetail from "./ProductDetail";

import "./RevIT.css";
//import "../pages/Home/HomeImage";

// Pages
const Home = React.lazy(() => import("../pages/Home/Home"));
const Product = React.lazy(() => import("../pages/Product/Product"));
const ProductDetail = React.lazy(() => import("../pages/Product/ProductDetail"));
const Stores = React.lazy(() => import("../pages/Home/Home"));
const Categories = React.lazy(() => import("../pages/Home/Home"));
const Recommendations = React.lazy(() => import("../pages/Home/Home"));
const About = React.lazy(() => import("../pages/About/About"));
const Contact = React.lazy(() => import("../pages/Contact/Contact"));
const NotFound = React.lazy(() => import("../pages/NotFound/NotFound"));

function RevIT() {
	const [resultsCache, setResultsCache] = useState({});
	const [slideshowIndex, setSlideshowIndex] = useState(0);
	const [lastSearchText, setLastSearchText] = useState("");

	return (
		<div className="RevIT">
			<Router>
				<Header setCache={setResultsCache} />
				<React.Suspense fallback={<Loader />}>
					<Switch>
						<Route path="/home" component={Home} />
						<Route exact path="/Product/:query">
							<Product
								setCache={setResultsCache}
								cache={resultsCache}
								setLastSearchText={setLastSearchText}
								setSlideshowIndex={setSlideshowIndex}
							/>
						</Route>
						<Route exact path="/ProductDetail/:sku">
							<ProductDetail
								slideshowIndex={slideshowIndex}
								setSlideshowIndex={setSlideshowIndex}
								lastSearchText={lastSearchText}
								cache={resultsCache?.products}
							/>
						</Route>
						<Route path="/about" component={About} />
						<Route path="/contact" render={(props) => <Contact {...props} />} />
						<Route exact path="/">
							<Redirect to="/home" />
						</Route>
						<Route path="*" component={NotFound} />
					</Switch>
				</React.Suspense>
				<Footer />
			</Router>
		</div>
	);
}

export default RevIT;
