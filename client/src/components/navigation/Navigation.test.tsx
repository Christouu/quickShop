import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import Navigation from "./Navigation";

test("render Navigation Component", () => {
  render(
    <Provider store={store}>
      <Navigation />
    </Provider>,
    { wrapper: MemoryRouter }
  );
  //use MemoryRouter when using Link
  //use provider when we use Redux
  const container = screen.getByTestId("navigationContainer");
  expect(container).toBeInTheDocument();
});

test("render logo", () => {
  render(
    <Provider store={store}>
      <Navigation />
    </Provider>,
    { wrapper: MemoryRouter }
  );

  const logo = screen.getByAltText("Quick logo");
  const value = logo.getAttribute("src");
  expect(value).toBe("/assets/quickLogo.png");
});

test("render ul", () => {
  render(
    <Provider store={store}>
      <Navigation />
    </Provider>,
    { wrapper: MemoryRouter }
  );

  const ul = screen.getByTestId("dataLinks");
  expect(ul).toBeInTheDocument();
});

test("render Li and check if there are 5 li items", () => {
  render(
    <Provider store={store}>
      <Navigation />
    </Provider>,
    { wrapper: MemoryRouter }
  );

  const li = screen.getAllByTestId("dataLink");
  expect(li.length).toBe(5);
});
