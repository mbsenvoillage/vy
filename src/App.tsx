import React from "react";
import { Box, Grommet, Page, Text } from "grommet";
import styled, { keyframes } from "styled-components";

const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`;
const Circle = styled.div`
  height: 100px;
  width: 100px;
  border-style: solid;
  border-width: 5px;
  border-radius: 50%;
  border-color: black;
  animation-name: ${breatheAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 450px;
`;

function App() {
  return (
    <Grommet plain full>
      <Page kind="full" height="100%" width="100%">
        {/* <Container>
          <Circle />
        </Container> */}
        <Box
          height="50%"
          background="neutral-1"
          style={{
            backgroundColor: "#EE4F34",
            gridTemplateRows: "1fr",
            display: "grid",
          }}
        >
          {/* <div>
            <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <filter id="noiseFilter">
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="5"
                  numOctaves="3"
                  stitchTiles="stitch"
                />
              </filter>

              <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
          </div> */}
          <ol
            onClick={() => alert("hello")}
            style={{
              fontFamily: "Montserrat",
              fontSize: "clamp(1rem, 7vw, 2rem)",
              padding: 0,
              margin: 0,
              color: "rgb(242, 209, 71)",
              gridRow: "1/2",
              gridColumn: "1/2",
              alignSelf: "flex-start",
              justifySelf: "end",
            }}
          >
            <li style={{ listStyle: "none" }}>menu</li>
          </ol>
          {/* <span
            style={{
              fontFamily: "Montserrat",
              lineHeight: "46%",
              color: "#2A7EC4",
              fontSize: "clamp(22rem, 42vw + 11.5rem, 64rem)",
              gridRow: "1/2",
              gridColumn: "1/2",
              overflow: "visible",
              zIndex: 2,
            }}
          >
            v
          </span> */}
          <span
            style={{
              fontFamily: "Montserrat",

              color: "#2A7EC4",

              gridRow: "1/2",
              gridColumn: "1/2",
              overflow: "visible",
              zIndex: 2,
            }}
          >
            <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
              <text y="9" x="0" font-size="10px">
                v
              </text>
            </svg>
          </span>
          <Box
            height="40%"
            width="80%"
            style={{
              backgroundColor: "#F2D147",
              gridRow: "1/2",
              gridColumn: "1/2",
              alignSelf: "center",
            }}
          ></Box>
        </Box>
        <Box
          height="50%"
          style={{
            backgroundColor: "#F2D147",
            display: "grid",
            gridTemplateRows: "1fr",
            gridTemplateColumns: "repeat(4,1fr)",
          }}
        >
          <span
            style={{
              fontFamily: "Montserrat",
              lineHeight: "40%",
              color: "#2A7EC4",
              fontSize: "clamp(22rem, 42vw + 11.5rem, 64rem)",
              gridRow: "1/2",
              gridColumn: "3/5",
              zIndex: 2,
            }}
          >
            y.
          </span>
          <Box
            height="40%"
            width="80%"
            style={{
              backgroundColor: "#EE4F34",
              gridRow: "1/2",
              gridColumn: "1/5",
              alignSelf: "center",
            }}
          ></Box>
          <span
            style={{
              fontFamily: "Montserrat",
              fontStyle: "italic",
              color: "black",
              gridColumn: "4/5",
              gridRow: "1/2",
              alignSelf: "end",
              fontSize: "clamp(2rem, 12vw, 4rem)",
            }}
          >
            call me
          </span>
        </Box>
      </Page>
    </Grommet>
  );
}

export default App;
