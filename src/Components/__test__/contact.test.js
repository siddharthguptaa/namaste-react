import { render, screen } from "@testing-library/react"
import Contact from "../ContactUs/Contact"
import "@testing-library/jest-dom";
test("should load contact us component",() => {
    render(<Contact></Contact>)

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
})