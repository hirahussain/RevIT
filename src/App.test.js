import { render, screen } from "@testing-library/react";
import App from "./components/RevIT";

test("renders learn react link", () => {
	render(<App />);
	const linkElement = screen.getByText(/learn react/i);
	expect(linkElement).toBeInTheDocument();
});
