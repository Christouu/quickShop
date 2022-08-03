import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Footer from "./Footer";

test("render Footer Component", () => {
  render(<Footer />, { wrapper: MemoryRouter });
  //use MemoryRouter when using Link
  const container = screen.getByTestId("FooterContainer");
  expect(container).toBeInTheDocument();
});

test("render 4 Info Items", () => {
  render(<Footer />, { wrapper: MemoryRouter });
  const infoItems = screen.getAllByTestId("infoItem");
  expect(infoItems).toHaveLength(4);
});

test("Test headings", () => {
  render(<Footer />, { wrapper: MemoryRouter });
  const headingItems = screen.getAllByTestId("footerHeadings");
  expect(headingItems[0].textContent).toEqual("За Нас");
  expect(headingItems[1].textContent).toEqual("Свържете се с нас");
  expect(headingItems[2].textContent).toEqual("Последвайте ни");
  expect(headingItems[3].textContent).toEqual("Линкове");
});

test("Test description items", () => {
  render(<Footer />, { wrapper: MemoryRouter });
  const headingItems = screen.getAllByTestId("descriptionItem");
  expect(headingItems[0].textContent).toEqual("аддрес");
  expect(headingItems[1].textContent).toEqual("емайл");
  expect(headingItems[2].textContent).toEqual("телефон");
});

test("Test Ul and Li items", () => {
  render(<Footer />, { wrapper: MemoryRouter });
  const Ul = screen.getByTestId("footerUl");
  expect(Ul).toBeInTheDocument();

  const Li = screen.getAllByTestId("footerLi");
  expect(Li.length).toEqual(6);
  expect(Li[0].textContent).toEqual("Начало");
  expect(Li[1].textContent).toEqual("Продукти");
  expect(Li[2].textContent).toEqual("Продукти на промоция");
  expect(Li[3].textContent).toEqual("Магазини");
  expect(Li[4].textContent).toEqual("Работа при нас");
  expect(Li[5].textContent).toEqual("Контакти");
});
