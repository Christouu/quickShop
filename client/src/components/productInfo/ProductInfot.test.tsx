import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ProductInfo from "./ProductInfo";

test("render ProductInfo Component", () => {
  render(<ProductInfo img="asd" id="asdsad" />, { wrapper: MemoryRouter });

  const container = screen.getByTestId("productInfo");
  expect(container).toBeInTheDocument();
});

test("render ProductInfo Component icons", () => {
  render(<ProductInfo img="asd" id="asdsad" />, { wrapper: MemoryRouter });

  const icons = screen.getAllByTestId("icon");
  expect(icons.length).toBe(3);
});
