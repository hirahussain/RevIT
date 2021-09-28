import { getFooterImage } from "../../lib/bestbuy";

function FooterImage() {
	return <div className="footerImage ">{getFooterImage()}</div>;
}

export default FooterImage;
