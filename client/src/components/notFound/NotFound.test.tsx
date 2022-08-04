import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import NotFound from "./NotFound";

test("render Navigation Component", () => {
  render(
    <Provider store={store}>
      <NotFound />
    </Provider>,
    { wrapper: MemoryRouter }
  );
  //use MemoryRouter when using Link
  //use provider when we use Redux
  const container = screen.getByTestId("notFound");
  expect(container).toBeInTheDocument();
});

test("render Navigation Component heading", () => {
  render(
    <Provider store={store}>
      <NotFound />
    </Provider>,
    { wrapper: MemoryRouter }
  );
  //use MemoryRouter when using Link
  //use provider when we use Redux
  const heading = screen.getByTestId("heading");
  expect(heading.textContent).toBe("Няма такава страница");
});

test("render Navigation Component image", () => {
  render(
    <Provider store={store}>
      <NotFound />
    </Provider>,
    { wrapper: MemoryRouter }
  );
  //use MemoryRouter when using Link
  //use provider when we use Redux
  const image = screen.getByTestId("notFoundImage");
  expect(image.getAttribute("src")).toBe("assets/404.png");
});
