// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, createRef } from "react";
import {
  faTired,
  faAngry,
  faFlushed,
  faGrin,
  faGrinTears,
  faLemon,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes, css } from "styled-components";

const wobble = keyframes`
    0% { transform: translateX(0%); } 
    15% { transform: translateX(-25%) rotate(-5deg); } 
    30% { transform: translateX(20%) rotate(3deg); } 
    45% { transform: translateX(-15%) rotate(-3deg); } 
    60% { transform: translateX(10%) rotate(2deg); }
    75% { transform: translateX(-5%) rotate(-1deg); }
    100% { transform: translateX(0%); } 
 `;

const animationMixIn = (props) => css`
  ${props.isShaking ? wobble : "none"}
`;
const StIcon = styled(FontAwesomeIcon)`
  font-size: 10em;
  color: slateblue;
  padding: 15px;
  animation: ${animationMixIn} 1s ease-in-out;
`;

const object = {
  lemon: faLemon,
  grin: faGrin,
  angry: faAngry,
  tired: faTired,
  flushed: faFlushed,
  grintears: faGrinTears,
};

// const jsKeyframes = [
//   { transform: "translateX(0%)" },
//   { transform: "translateX(-25%) rotate(-5deg)" },
//   { transform: "translateX(20%) rotate(3deg)" },
//   { transform: "translateX(-15%) rotate(-3deg)" },
//   { transform: "translateX(10%) rotate(2deg)" },
//   { transform: "translateX(-5%) rotate(-1deg)" },
//   { transform: "translateX(0%)" },
// ];

class Mood extends Component {
  constructor(props) {
    super(props);
    this.iconRef = createRef();
  }
  // componentDidUpdate(prevProps) {
  //   if (this.props.rolling && !prevProps.rolling) {
  //     this.iconRef.current.animate(jsKeyframes, {
  //       duration: 1000,
  //       fill: "forwards",
  //     });
  //   }
  // }
  render(props) {
    const icon = object[this.props.mood.toLocaleLowerCase()];
    return (
      <>
        {icon ? (
          <StIcon
            icon={icon}
            isShaking={this.props.rolling}
            forwardedRef={this.iconRef}
          />
        ) : (
          "Icon not found"
        )}
      </>
    );
  }
}

export default Mood;
