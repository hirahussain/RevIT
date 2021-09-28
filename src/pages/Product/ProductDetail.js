import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

// import named exports from our BestBuy library file
import { getProductDetailResults } from "../../lib/bestbuy";
import "./Product.css";

function ProductDetail(props) {
	const [info, setInfo] = useState({}); // for storing image info API response data

	const history = useHistory();
	const params = useParams();

	useEffect(() => {
		console.log("FETCHING", params.sku);

		// .then( response => response.json() )
		getProductDetailResults(params.sku)
			.then((data) => setInfo(data))
			.catch((err) => console.warn("error making API request:", err));
	}, [params.sku]);
	//  👆 Because the slideshow lets us move from a details page with one ID to a details page
	//  with another ID, we have to make sure we re-fetch whenever the ID param changes

	// handler for moving to next image - used by 'prev' link and keypress handler
	function goNext() {
		setInfo({}); // clear image and show loading message
		const newIndex = (props.slideshowIndex + 1) % props.cache.length; // trick to wrap index at array upper limit
		props.setSlideshowIndex(newIndex); // tell <App> new index value so slideshow remembers its place in results
		history.push(`/productDetail/${props.cache[newIndex].sku}`);
	}

	// handler for moving to previous image - used by 'prev' link and keypress handler
	function goPrev() {
		setInfo({}); // clear image and show loading message
		const newIndex = props.slideshowIndex - 1 < 0 ? props.cache.length - 1 : props.slideshowIndex - 1; // wrap from 0 to end
		props.setSlideshowIndex(newIndex); // tell <App> new index value so slideshow remembers its place in results
		history.push(`/productDetail/${props.cache[newIndex].sku}`);
	}

	function goSearchResults() {
		// use the lastSearchText prop to return to the appropriate search results if
		// the prop is present (i.e. we came from results route), otherwise to
		// root route (i.e. we came from direct details page URL)
		history.push(props.lastSearchText ? `/product/${props.lastSearchText}` : "/");
	}

	function handleKeypress(ev) {
		if (!props.cache) {
			// We can't do slideshow navigation if there's no cache, so return early, i.e. ignore keypress
			return;
		}

		switch (ev.code) {
			case "ArrowLeft":
				ev.preventDefault(); // only preventDefault on matched keys, otherwise all other keys stop working!
				return goPrev();
			case "ArrowRight":
				ev.preventDefault();
				return goNext();
			case "Escape":
				ev.preventDefault();
				return goSearchResults();
		} // switch( ev.code )
	} // handleKeypress()

	useEffect(() => {
		window.addEventListener("keydown", handleKeypress);
		return () => window.removeEventListener("keydown", handleKeypress);
	}, [props.slideshowIndex]); // this dependency is necessary to avoid stale values of slideshowIndex in the handler

	return (
		<div className="imageDetails">
			{
				// only show nav controls if the cache exists, i.e we're here via search results,
				// not via a direct link to a details page
				props.cache && (
					<div className="controls">
						<span className="prev" onClick={goPrev}>
							&lt; prev
						</span>
						<span className="next" onClick={goNext}>
							next &gt;
						</span>
					</div>
				)
			}
			{
				// check if the 'product' key is set (truthy), i.e. we have the query response;
				// a safer version might be " 'product' in info  "   - "in" is the JS operator for
				// checking whether a key is defined in an object
				info.products ? (
					<>
						<img src={info.products[0].image} onClick={goSearchResults} alt={info.products[0].name} />
						<div className="infoPanel">
							{/* {console.log("info products", info.products[0])} */}
							<strong>
								<a href={info.products[0].url}>{info.products[0].name}</a>
							</strong>
							<p>{info.products[0].plot}</p>
						</div>
					</>
				) : (
					<p>Loading...</p>
				)
			}
		</div>
	);
} // ProductDetail()

export default ProductDetail;
