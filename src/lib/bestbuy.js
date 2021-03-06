import dotenv from "dotenv";
import aboutImage from "../assets/homeImage.gif";
import footerImage from "../assets/footerImage.png";
import homeImage from "../assets/features.png";

// dotenv package has been installed and .env.local file has been created to hide API Key
dotenv.config();

// const API_KEY = process.env.REACT_APP_BESTBUY_API_KEY; -- TODO: Check why it is not working

const API_KEY = "qhqws47nyvgze2mq3qx4jadt";
const API_BASE_URL = "https://api.bestbuy.com/v1/";
const URL_PARAMS = `format=json&pageSize=50&apiKey=${API_KEY}`;

const PRODUCT_URL = `${API_BASE_URL}products?&${URL_PARAMS}`;
const SEARCH_STORE_URL = `${API_BASE_URL}stores?&${URL_PARAMS}`;

function getProductResults(query) {
	// console.log("SEARCH_PRODUCT_URL: ", SEARCH_PRODUCT_URL);
	return query.toLowerCase() === "all"
		? fetch(PRODUCT_URL).then((response) => response.json())
		: fetch(`${API_BASE_URL}products(search=${query})?&${URL_PARAMS}`).then((response) => response.json());
}

function getProductDetailResults(sku) {
	return fetch(`${API_BASE_URL}products(sku=${sku})?&${URL_PARAMS}`).then((response) => response.json());
}

function getStoreResults(query) {
	return fetch(SEARCH_STORE_URL).then((response) => response.json());
}

function getProductReview(query) {
	// 	// default to large thumbnail size
	// 	return `https://farm${photo.farm}.${IMAGE_BASE_URL}/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
	return "getReview";
}

function getHomeImage() {
	return <img src={homeImage} alt="loading..." />;
}

function getFooterImage() {
	return <img src={footerImage} alt="loading..." />;
}

function getAbouttImage() {
	return <img src={aboutImage} alt="loading..." />;
}
// export object with all fns as default, just another way of accessing
// NO - avoid default exports? Makes static analysis/tree-shaking harder??
// export default {getSearchResults, getPhotoByID, getImageURL};

// explicit named exports, isn't interesting ???
export {
	getProductResults,
	getStoreResults,
	getProductReview,
	getProductDetailResults,
	getHomeImage,
	getFooterImage,
	getAbouttImage,
};
