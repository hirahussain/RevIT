import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = (props) => {
	const [searchText, setSearchText] = useState("All");

	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		props.setCache({}); // empty cache! otherwise new results won't appear when we check in SearchResults useEffect before fetch()
		history.push(`/product/${searchText}`);
	};

	return (
		<div className="main">
			<form onSubmit={handleSubmit} data-testid="searchForm">
				<div>
					<input
						type="text"
						onChange={(e) => setSearchText(e.target.value)}
						defaultValue="All" // TODO: Remove this when deploy...
						data-testid="searchField"
						name="query"
					/>
					<button>Search</button>
				</div>
			</form>
		</div>
	);
}; // Search() component

export default Search;
