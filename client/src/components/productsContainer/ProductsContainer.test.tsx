import { rest } from "msw";
import { setupServer } from "msw/node";
import { MemoryRouter } from "react-router-dom";
import { render, screen, waitFor } from "@testing-library/react";

import ProductsContainer from "./ProductsContainer";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ title: "Test", image: "asd", onSale: false }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("render ProductsContainer Component", () => {
  render(<ProductsContainer />, {
    wrapper: MemoryRouter,
  });

  const container = screen.getByTestId("productsContainer");
  expect(container).toBeInTheDocument();
});

test("get data", async () => {
  render(
    <Provider store={store}>
      <ProductsContainer />
    </Provider>,
    {
      wrapper: MemoryRouter,
    }
  );
  //for this test we need to fake a api call so we use MSW
  //the output we have to use waitFor sa that we re-create a useEffect fetching
  const output = await waitFor(() => screen.getAllByTestId("product"));

  expect(output.length).toBeGreaterThan(0);
});

test("render ProductsContainer Component button", () => {
  render(<ProductsContainer />, {
    wrapper: MemoryRouter,
  });

  const button = screen.getByRole("button");
  expect(button).toHaveTextContent("Виж всички продукти");
});
