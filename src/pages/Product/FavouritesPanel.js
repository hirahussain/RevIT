import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { getImageURL } from "../../lib/bestbuy";

function FavouritesPanel(props) {
	const history = useHistory();

	const favourites = useSelector((state) => state.favourites);
	const dispatch = useDispatch();

	useEffect(() => {
		console.log("FAVOURITES useEffect running...");
	}, [favourites]);

	function handleFavouriteClick(ev, sku) {
		if (ev.shiftKey) {
			dispatch({ type: "favourites/remove-by-id", payload: sku });
			return;
		}

		history.push(`/productDetail/${sku}`);
	}

	return (
		<div className="favourites">
			{favourites.map((f) => (
				<img src={getImageURL(f)} onClick={(ev) => handleFavouriteClick(ev, f.sku)} key={f.sku} />
			))}
		</div>
	);
} // FavouritesPanel()

export default FavouritesPanel;
