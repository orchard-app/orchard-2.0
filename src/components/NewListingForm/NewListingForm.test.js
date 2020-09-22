import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ListingForm from "./ListingForm";
import ListingFormPage from "../Pages/ListingFormPage";

const setup = () => {
  const utils = render(<ListingForm />);
  const input = utils.getByLabelText("Listing-Title");
  return {
    input,
    ...utils,
  };
};
test("It should allow letters to be inputted", () => {
  const { input } = setup();
  expect(input.value).toBe(""); // empty before
  fireEvent.change(input, { target: { value: "Testing the Title" } });
});
