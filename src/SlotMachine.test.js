import React from "react";
import SlotMachine from "./SlotMachine";
import { shallow } from "enzyme";

describe("Given SlotMachine component", () => {
  let slotMachine;
  const expectedDefaultProps = { symbols: ["🍓", "🍌", "🍊", "🐵"] };

  beforeEach(() => {
    slotMachine = shallow(<SlotMachine />);
  });

  it("renders properly", () => {
    expect(slotMachine.debug()).toMatchSnapshot();
  });

  it("Has game symbols as default props", () => {
    expect(SlotMachine.defaultProps.symbols).toEqual(
      expectedDefaultProps.symbols
    );
  });

  it("initializes with award equal to 0", () => {
    expect(slotMachine.state().award).toBe(0);
  });

  it("contains a Slot Display component", () => {
    expect(slotMachine.find("SlotsDisplay").exists()).toBe(true);
  });

  describe("Score calculation", () => {
    it("Award is 0 if no matches", () => {
      slotMachine.setState({ slot1: "🍓", slot2: "🍌", slot3: "🍊" });
      slotMachine.instance().calculateAwardIfAny();
      expect(slotMachine.instance().state.award).toEqual(0);
    });
    it("Award is 100 if three matches", () => {
      slotMachine.setState({ slot1: "🍓", slot2: "🍓", slot3: "🍓" });
      slotMachine.instance().calculateAwardIfAny();
      expect(slotMachine.state().award).toEqual(100);
    });
    it("Award is 20 if two consecutive matches", () => {
      slotMachine.setState({ slot1: "🍓", slot2: "🍓", slot3: "🍊" });
      slotMachine.instance().calculateAwardIfAny();
      expect(slotMachine.state().award).toEqual(20);
    });
    it("Award is 10 if two matches", () => {
      slotMachine.setState({ slot1: "🍊", slot2: "🍓", slot3: "🍊" });
      slotMachine.instance().calculateAwardIfAny();
      expect(slotMachine.state().award).toEqual(10);
    });
  });

  describe("Button functions", () => {
    it("Starts game after start button is clicked", () => {
      slotMachine.find(".btn-start").simulate("click");
      expect(slotMachine.state().rolling).toBe(true);
    });
    it("Stops game after stop button is clicked", () => {
      slotMachine.find(".btn-stop").simulate("click");
      expect(slotMachine.state().rolling).toBe(false);
    });
  });

  describe("Timeouts", () => {
    it("Starts rolling after 5s and finishes after 10s", () => {
      jest.useFakeTimers();
      const app = shallow(<SlotMachine />);
      expect(app.state().rolling).toBe(false);
      app.instance().startGame();
      jest.advanceTimersByTime(5001);
      expect(app.state().rolling).toBe(true);
      jest.advanceTimersByTime(5001);
      expect(app.state().rolling).toBe(false);
    });
    it("Sets timeout in componentDidMount", () => {
      jest.useFakeTimers();
      const app = shallow(<SlotMachine />).instance();
      jest.spyOn(app, "startGame");
      app.componentDidMount();
      jest.advanceTimersByTime(5001);
      expect(app.startGame).toBeCalled();
    });
  });
});
