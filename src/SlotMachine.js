import React, { Component } from "react";
import "./SlotMachine.scss";
import SlotsDisplay from "./SlotsDisplay/SlotsDisplay";
import ScoreDisplay from "./ScoreDisplay/ScoreDisplay";
import {
  DEFAULT_GAME_END_TIME_MILIS,
  AWARD_FOR_ALL_MATCHING,
  AWARD_FOR_TWO_CONSECUTIVE,
  AWARD_FOR_TWO_MATCHING,
  DEFAULT_GAME_START_TIME_MILIS,
  DEFAULT_SLOT_ROTATION_MILIS
} from "./gameConfig";

class SlotMachine extends Component {
  static defaultProps = {
    symbols: ["🍓", "🍌", "🍊", "🐵"]
  };

  constructor(props) {
    super(props);
    this.state = {
      slot1: this.props.symbols[
        Math.floor(Math.random() * this.props.symbols.length)
      ],
      slot2: this.props.symbols[
        Math.floor(Math.random() * this.props.symbols.length)
      ],
      slot3: this.props.symbols[
        Math.floor(Math.random() * this.props.symbols.length)
      ],
      rolling: false,
      award: 0
    };
    this.startTimeout = null;
    this.finishTimeout = null;
  }

  componentDidMount() {
    this.startTimeout = setTimeout(() => {
      this.startGame();
    }, DEFAULT_GAME_START_TIME_MILIS);
  }

  rollSymbols = () => {
    setInterval(() => {
      if (this.state.rolling) {
        const newSlot1 = this.props.symbols[
          Math.floor(Math.random() * this.props.symbols.length)
        ];
        const newSlot2 = this.props.symbols[
          Math.floor(Math.random() * this.props.symbols.length)
        ];
        const newSlot3 = this.props.symbols[
          Math.floor(Math.random() * this.props.symbols.length)
        ];
        this.setState({
          slot1: newSlot1,
          slot2: newSlot2,
          slot3: newSlot3,
          rolling: true,
          award: 0
        });
      }
    }, DEFAULT_SLOT_ROTATION_MILIS);
  };

  finishGameAutomaticallyAfterTimeout = () => {
    this.finishTimeout = setTimeout(
      this.handleStop,
      DEFAULT_GAME_END_TIME_MILIS
    );
  };

  startGame = () => {
    clearTimeout(this.startTimeout);
    this.setState({ rolling: true });
    this.finishGameAutomaticallyAfterTimeout();
    this.rollSymbols();
  };

  handleStop = () => {
    clearTimeout(this.finishTimeout);
    this.setState({ rolling: false });
    this.calculateAwardIfAny();
  };

  calculateAwardIfAny = () => {
    const { slot1, slot2, slot3 } = this.state;
    if (slot1 === slot2 && slot2 === slot3) {
      this.setState({ award: AWARD_FOR_ALL_MATCHING });
    } else if (slot1 === slot2 || slot2 === slot3) {
      this.setState({ award: AWARD_FOR_TWO_CONSECUTIVE });
    } else if (slot1 === slot3) {
      this.setState({ award: AWARD_FOR_TWO_MATCHING });
    }
  };

  render() {
    const { slot1, slot2, slot3, rolling, award } = this.state;
    const slots = [slot1, slot2, slot3];

    return (
      <div className="slot">
        <SlotsDisplay slots={slots} rolling={rolling} />
        <button
          className="btn-start"
          onClick={this.startGame}
          disabled={rolling}
        >
          {rolling ? "Rolling..." : "START GAME!"}
        </button>
        <button
          className="btn-stop"
          onClick={this.handleStop}
          disabled={!rolling}
        >
          STOP
        </button>
        <ScoreDisplay score={award} />
      </div>
    );
  }
}

export default SlotMachine;
