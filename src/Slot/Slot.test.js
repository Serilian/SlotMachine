import React from "react";
import { shallow } from "enzyme";
import Slot from "./Slot";

describe("Slot component", () => {
  let slot;
  let RANDOM_SYMBOL = "🍓";

  beforeEach(() => {
    slot = shallow(<Slot symbol={RANDOM_SYMBOL} />);
  });
  it("renders properly", () => {
    expect(slot.debug()).toMatchSnapshot();
  });
  it("displays a symbols given as prop", () => {
    expect(slot.find(".symbol").text()).toEqual(RANDOM_SYMBOL);
  });
});
