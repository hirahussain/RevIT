import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as bestbuy from "../../lib/bestbuy";
import "./Stores.css";

// import Thumbnail from "./Thumbnail";

function Stores(props) {
	const [results, setResults] = useState(props.cache); // for storing API response data - defaults to cache data

	const { push } = useHistory();
	const { query } = useParams(); //instead of needing router props! i.e. can render this comp as child of <Route>

	const dispatch = useDispatch();

	function handleClick(ev, stores, index) {
		console.log("ev", ev, stores, index);
		if (ev.shiftKey) {
			dispatch({ type: "favourites/add", payload: stores });
			// ev.stopPropagation();
			return;
		}
		props.setSlideshowIndex(index); // for slideshow navigation, so we know relative position of this image in  results
		push(`/storeDetail/${stores.storeId}`);
	}

	useEffect(() => {
		if (props.cache.stores) {
			return;
		}

		setResults({}); // clear the results so we don't see old results while new ones are loading (we'll see loading message)

		// Resume from here
		bestbuy
			.getProductResults(query)
			.then((data) => {
				console.log("JSON", data);
				setResults(data); // update the local results state for this component
				props.setCache(data); // update the cache in the parent <App>
				props.setLastSearchText(query); // ask parent to remember query for 'back' functionality in slideshow
			})
			.catch((err) => console.warn("error making API request:", err));
	}, [query]); // "Listen for changes to this prop and run the useEffect callback function if it changes"

	return (
		<div className="product">
			<h2>Results for "{query}"</h2>
			<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} data-testid="searchThumbnails">
				{"products" in results ? (
					results.products.map((prod, index) => (
						<div
							style={{
								backgroundColor: "white",
								margin: 20,
								width: 220,
								justifyContent: "center",
								border: "1px solid grey",
								cursor: "pointer",
							}}
							key={index}>
							<div>
								<img src={prod.largeImage} alt={prod.name} onClick={(ev) => handleClick(ev, prod, index)} />
							</div>
							<div>{prod.name} </div>
							<br />
							<div>
								Review: {prod.customerReviewCount} || Average: {prod.customerReviewAverage} || Top Rated:{" "}
								{prod.customerTopRated}
							</div>
						</div> // TODO: move this to separate component
					))
				) : (
					<p>Loading results...</p>
				)}
			</div>
		</div>
	);
} // Product()

export default Product;
