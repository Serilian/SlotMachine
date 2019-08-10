import React from "react";
import SlotMachine from "./SlotMachine";
import { shallow } from "enzyme";

describe("Given SlotMachine component", () => {
  let slotMachine;

  beforeEach(() => {
    slotMachine = shallow(<SlotMachine />);
  });

  it("renders properly", () => {
    expect(slotMachine.debug()).toMatchSnapshot();
  });

  it("initializes with award equal to 0", () => {
    expect(slotMachine.state().award).toBe(0);
  });

  it("contains a Slot Display component", () => {
    expect(slotMachine.find("SlotsDisplay").exists()).toBe(true);
  });

});
