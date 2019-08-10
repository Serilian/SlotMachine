import React from "react";
import { shallow } from "enzyme";
import ScoreDisplay from "./ScoreDisplay";

describe("ScoreDisplay component", () => {
  let scoreDisplay;
  const RANDOM_AWARD = 100;
  const WINNING_MESSAGE = `Your award is: ${RANDOM_AWARD}`;

  beforeEach(() => {
    scoreDisplay = shallow(<ScoreDisplay score={RANDOM_AWARD} />);
  });
  it("renders properly", () => {
    expect(scoreDisplay.debug()).toMatchSnapshot();
  });
  it("displays an award given as prop", () => {
    expect(scoreDisplay.find(".score").text()).toEqual(WINNING_MESSAGE);
  });
  it("displays nothing when award equals 0", () => {
    scoreDisplay = shallow(<ScoreDisplay score={0} />);
    expect(scoreDisplay.find(".score").exists()).toBe(false);
  });
});
