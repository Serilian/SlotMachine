import React from "react";
import { shallow } from "enzyme";
import SlotsDisplay from "./SlotsDisplay";

describe("Slots display", () => {
  let slotsDisplay;
  let someSymbols = ["🍌", "🍊", "🐵"];

  beforeEach(() => {
    slotsDisplay = shallow(
      <SlotsDisplay slots={someSymbols} rolling={false} />
    );
  });

  it("renders correctly", () => {
    expect(slotsDisplay.debug()).toMatchSnapshot();
  });

  it("renders 3 slots for 3 symbols given as props", () => {
    expect(slotsDisplay.find(".slot-container").children().length).toEqual(
      someSymbols.length
    );
  });
});
