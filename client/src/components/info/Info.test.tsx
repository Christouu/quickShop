import { render, screen } from "@testing-library/react";
import Line from "../line/Line";
import Info from "./Info";

test("render Info Component", () => {
  render(<Info />);
  const container = screen.getByTestId("infoContainer");
  expect(container).toBeInTheDocument();
});

test("Test heading for Info Component", () => {
  render(<Info />);
  const heading = screen.getByTestId("infoHeading");
  expect(heading.textContent).toBe("Защо да пазарувате при нас ?");
});

test("To have Ul", () => {
  render(<Info />);
  const ul = screen.getByTestId("infoUl");
  expect(ul).toBeInTheDocument();
});

test("To have 3 Li items", () => {
  render(<Info />);
  const li = screen.getAllByTestId("infoLi");
  expect(li.length).toBe(3);
});

test("Li to have DoneIcon and Text", () => {
  render(<Info />);
  const icons = screen.getAllByTestId("infoIcon");
  const texts = screen.getAllByTestId("infoText");
  expect(icons.length).toBe(3);
  expect(texts.length).toBe(3);
});
