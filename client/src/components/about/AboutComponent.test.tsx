import { render, screen } from "@testing-library/react";
import AboutComponent from "./AboutComponent";

test("render About Component", () => {
  render(<AboutComponent />);
  const container = screen.getByTestId("AboutContainer");
  expect(container).toBeInTheDocument();
});

test("render text in About Component", () => {
  render(<AboutComponent />);
  const container = screen.getByTestId("AboutContainerText");
  expect(container).toBeInTheDocument();
});

test("render shops in About Component", () => {
  render(<AboutComponent />);
  const container = screen.getByTestId("AboutContainerShops");
  expect(container).toBeInTheDocument();
});

test("render shop in Shops in About Component", () => {
  render(<AboutComponent />);
  const container = screen.getByTestId("AboutContainerShop");
  expect(container).toBeInTheDocument();
});

test("Image has attribute", () => {
  render(<AboutComponent />);
  const container = screen.getByTestId("AboutContainerImage");
  expect(container).toHaveAttribute("src");
});

test("ShopInfo to have textContent", () => {
  render(<AboutComponent />);
  const container = screen.getByTestId("AboutContainerShopInfo");
  expect(container).toHaveTextContent("Address");
});
