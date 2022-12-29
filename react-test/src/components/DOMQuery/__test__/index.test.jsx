import React from "react";
import { render, screen } from "@testing-library/react";
import { DomQuery } from "../index";

describe("tests for 《4 | DOM查询(上)：页面元素的渲染和行为查询》 & 《5 | DOM查询(下)：页面元素的参照物查询和优先级》", () => {
  test("get & query & find", () => {
    render(<DomQuery />);
    const element = screen.getAllByText(/test/i);
    screen.debug(element);
  });

  it('getByRole', () => {
    render(<DomQuery/>)
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument()
    screen.debug(btn)
  })
});
