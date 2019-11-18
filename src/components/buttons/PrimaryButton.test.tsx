import * as React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { PrimaryButton } from "./PrimaryButton";

let container: HTMLDivElement | null = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});

it("render simple text", () => {
  // act
  act(() => {
    render(
      <PrimaryButton onClick={() => {}}>Test Button</PrimaryButton>,
      container
    );
  });

  // assert
  const btn = container ? container.querySelector(".btn") : null;
  const actual = btn ? btn.textContent : "";
  expect(actual).toEqual("Test Button");
});

it("render complex children", () => {
  // act
  act(() => {
    render(
      <PrimaryButton onClick={() => {}}>
        <label>Test Button</label>
      </PrimaryButton>,
      container
    );
  });

  // assert
  const btn = container ? container.querySelector(".btn") : null;
  const actual = btn ? btn.innerHTML : "";
  expect(actual).toEqual("<label>Test Button</label>");
});

it("handle click", () => {
  // arrange
  const mockClickHandler = jest.fn();
  act(() => {
    render(
      <PrimaryButton onClick={mockClickHandler}>Test Button</PrimaryButton>,
      container
    );
  });

  // act
  const button: HTMLButtonElement | null = document.querySelector("button");
  act(() => {
    if (button) {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    }
  });

  // assert
  expect(mockClickHandler).toHaveBeenCalledTimes(1);
});
