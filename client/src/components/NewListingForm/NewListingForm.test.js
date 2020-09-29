import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ListingForm from "./ListingForm";
import "../userFunctions";

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
