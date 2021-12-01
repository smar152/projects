import React, { Component } from "react";
import styled from "styled-components";
import Mood from "./Mood";

const Board = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 150px;
`;

const Dice = styled("div")`
  display: flex;
`;

const RollButton = styled("button")`
  width: 15em;
  padding: 1.5em;
  border: 0px;
  border-radius: 10px;
  color: white;
  background-color: black;
  margin-top: 3em;
  :hover {
    background-color: darkslateblue;
    cursor: pointer;
  }
  :disabled {
    cursor: default;
    background-color: black;
  }
`;

class RollDice extends Component {
  static defaultProps = {
    moods: ["grin", "angry", "tired", "flushed", "grintears", "lemon"],
  };
  constructor(props) {
    super(props);
    this.state = { mood1: "angry", mood2: "tired", rolling: false };
    this.roll = this.roll.bind(this);
  }
  roll() {
    const newMood1 =
      this.props.moods[Math.floor(Math.random() * this.props.moods.length)];
    const newMood2 =
      this.props.moods[Math.floor(Math.random() * this.props.moods.length)];
    this.setState({ mood1: newMood1, mood2: newMood2, rolling: true });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }
  render() {
    return (
      <Board>
        <Dice>
          <Mood mood={this.state.mood1} rolling={this.state.rolling} />
          <Mood mood={this.state.mood2} rolling={this.state.rolling} />
        </Dice>
        <RollButton onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling..." : "Roll Mood Dice"}
        </RollButton>
      </Board>
    );
  }
}

export default RollDice;
