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

test("render links ul", () => {
  render(
    <Provider store={store}>
      <Navigation />
    </Provider>,
    { wrapper: MemoryRouter }
  );

  const ul = screen.getByTestId("dataLinks");
  expect(ul).toBeInTheDocument();
});

test("render Li and check if there are 5 li items and check their text contents", () => {
  render(
    <Provider store={store}>
      <Navigation />
    </Provider>,
    { wrapper: MemoryRouter }
  );

  const li = screen.getAllByTestId("dataLink");
  expect(li.length).toBe(5);
  expect(li[0].textContent).toBe("Начало");
  expect(li[1].textContent).toBe("Продукти");
  expect(li[2].textContent).toBe("Продукти на промоция");
  expect(li[3].textContent).toBe("Работа");
  expect(li[4].textContent).toBe("За Нас");
});

test("render Badge2", () => {
  render(
    <Provider store={store}>
      <Navigation />
    </Provider>,
    { wrapper: MemoryRouter }
  );

  const badge2 = screen.getByTestId("badge2");
  expect(badge2).toBeInTheDocument();
});

test("render shoppingcart icon ", () => {
  render(
    <Provider store={store}>
      <Navigation />
    </Provider>,
    { wrapper: MemoryRouter }
  );

  const cart = screen.getByTestId("shoppingCart");
  expect(cart).toBeInTheDocument();
});

test("render badge2 ul ", () => {
  render(
    <Provider store={store}>
      <Navigation />
    </Provider>,
    { wrapper: MemoryRouter }
  );

  const ul = screen.getByTestId("badge2Ul");
  expect(ul).toBeInTheDocument();
});
