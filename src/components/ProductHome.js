import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// Another way to import - this means "take all the named exports from this
// file and make them into properties of a single object, which will live in
// the variable called "bestbuy" (could be named anything)
// Then to use them, you would write:
//
//    bestbuy.getImageURL( aPhotoObject );
//
// This makes it a bit clearer in your code where 'getImageURL' comes from,
// which is especially helpful for custom library files - it's not as
// important for imported functions like 'useState()' because they are more
// familiar core functions of the React framework.
import * as bestbuy from "../lib/bestbuy";

// import Thumbnail from "./Thumbnail";

function SearchResults(props) {
	const [results, setResults] = useState(props.cache); // for storing API response data - defaults to cache data

	const { push } = useHistory();
	const { query } = useParams(); //instead of needing router props! i.e. can render this comp as child of <Route>

	const dispatch = useDispatch();

	function handleClick(ev, products, index) {
		console.log("ev", ev, products, index);
		if (ev.shiftKey) {
			dispatch({ type: "favourites/add", payload: products });
			// ev.stopPropagation();
			return;
		}
		props.setSlideshowIndex(index); // for slideshow navigation, so we know relative position of this image in  results
		push(`/productDetail/${products.sku}`);
	}

	useEffect(() => {
		if (props.cache.products) {
			// Early return if cache is available, i.e. prevent the
			// fetching of new results; the cache will be used by default
			// unless we run the fetch(), because we have given props.cache
			// to useState() above to use as the default value for 'results'
			return;
		}

		setResults({}); // clear the results so we don't see old results while new ones are loading (we'll see loading message)

		// fetch( SEARCH_URL + query )
		//   .then( response => response.json() )
		// 👆The .json() call now happens internally in our library, which returns the next promise to us
		// (i.e. the promise with the results of the .json(), i.e. the actual data)
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
		<div>
			<h2>Results for "{query}"</h2>
			<ul className="resultsList" data-testid="searchThumbnails">
				{"products" in results ? (
					results.products.map((prod, index) => (
						<li key={index}>
							<img src={prod.largeImage} alt={prod.name} onClick={(ev) => handleClick(ev, prod, index)} />
							{prod.name} <br />
							Review: {prod.customerReviewCount} || Average: {prod.customerReviewAverage} || Top Rated:{" "}
							{prod.customerTopRated}
						</li>
					))
				) : (
					<p>Loading results...</p>
				)}
				{/*
              👆By setting up our click handler here in the map() instead of in
               the child component, we save ourselves from having to pass down
               the photo ID and index individually as props to the child.
               But NOTE: even though it's called 'onClick', this is still just
               a prop - because it's being used within a React component tag,
               not a core HTML element tag. This means we still have to set it
               up as a real click handler on the real HTML element in the child,
                i.e. in Thumbnail.js:
                  <img onClick={props.onClick} src={...} />
            */}
			</ul>
		</div>
	);
} // SearchResults()

export default SearchResults;
