import React, { useEffect, useState } from "react";
import { Box, Grid, Grommet, Page, Text } from "grommet";
import styled, { keyframes } from "styled-components";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [date]);

  const tick = () => {
    setDate(new Date());
  };
  return (
    <span
      style={{
        fontFamily: "Fragment Mono",
        gridColumn: 1,
        gridRow: 1,
        alignSelf: "end",
        fontSize: "4vw",
        color: "white",
        zIndex: 2,
        width: "30vw",
      }}
    >
      {date.toLocaleTimeString()}
    </span>
  );
};

const infiniteScroll = keyframes`

  from {
    transform: translateX(100%);
  }
  to {

    transform: translateX(-1000%);
  }
`;

const Scroller = styled.div`
  white-space: nowrap;
  animation: ${infiniteScroll} 100s linear infinite;
  font-family: monospace;
  position: absolute;
  rotate: -90deg;
  width: 100%;
  left: 45%;
  bottom: 46%;
  color: rgb(242, 209, 71);
  font-size: 1.5rem;
`;

function App() {
  const [txt, setTxt] = useState("");

  useEffect(() => {
    fetch("./dontfret.txt")
      .then((r) => r.text())
      .then((text) => {
        let s = text.replaceAll("\n", " ");

        setTxt(s);
      });
  }, []);

  return (
    <Grommet plain full>
      <Page
        kind="narrow"
        style={{
          paddingRight: "clamp(0rem, 4.5vw - 1.1rem, 3rem)",
          paddingLeft: "clamp(0rem, 4.5vw - 1.1rem, 3rem)",
          backgroundColor: "rgb(42, 126, 196)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* <div
          style={{ overflow: "hidden", width: "100px", position: "absolute" }}
        > */}
        <Scroller>{txt}</Scroller>
        {/* </div> */}
        <Grid height="100%" style={{ overflow: "hidden" }}>
          <Box
            style={{
              background: "#EE4F34",
              // background: `linear-gradient(0deg, rgba(242,209,71,0.3), rgba(247,63,0,0.3)), url(${filter})`,
              // filter: "contrast(910%) brightness(100%)",
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              height: "50vh",
            }}
          >
            <ol
              onClick={() => alert("hello")}
              style={{
                fontFamily: "Montserrat",
                fontSize: "clamp(1rem, 7vw, 3rem)",
                paddingRight: "3vh",
                margin: 0,
                color: "rgb(242, 209, 71)",
                gridRow: "1/2",
                gridColumn: "3",
                alignSelf: "flex-start",
                justifySelf: "end",
              }}
            >
              <li style={{ listStyle: "none" }}>menu</li>
            </ol>
            <span
              style={{
                fontFamily: "Montserrat",
                color: "#2A7EC4",
                gridRow: "1/2",
                gridColumn: "1/3",
                zIndex: 2,
                // fontSize: "clamp(18rem, 27vw + 11.7rem, 36rem)",
                // lineHeight: 0.4,
                justifySelf: "center",
              }}
            >
              <div style={{ width: "clamp(20rem, 12.2vw + 17.6rem, 32rem)" }}>
                <svg viewBox="0 0 12 10" xmlns="http://www.w3.org/2000/svg">
                  <text y="7.1" x="2.5" fontSize="80%" fill="#2A7EC4">
                    v
                  </text>
                </svg>
              </div>
            </span>
            <Box
              height="40%"
              width="80%"
              style={{
                backgroundColor: "#F2D147",
                gridRow: "1/2",
                gridColumn: "1/span3",
                alignSelf: "center",
              }}
            ></Box>
            <Clock />
          </Box>
          <Box
            style={{
              backgroundColor: "#F2D147",
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              height: "50vh",
            }}
          >
            <span
              style={{
                fontFamily: "Montserrat",
                gridRow: "1/2",
                gridColumn: "2/-1",
                color: "#2A7EC4",
                // fontSize: "clamp(18rem, 27vw + 11.7rem, 36rem)",
                justifySelf: "center",
                // lineHeight: 0.1,
                zIndex: 2,
              }}
            >
              <div style={{ width: "clamp(20rem, 12.2vw + 17.6rem, 32rem)" }}>
                <svg
                  viewBox="0 0 12 10"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ overflow: "visible" }}
                >
                  <text y="5.1" x="2" fontSize="80%" fill="#2A7EC4">
                    y
                  </text>
                  <text y="7.5" x="7" fontSize="60%" fill="#2A7EC4">
                    .
                  </text>
                </svg>
              </div>
            </span>
            <Box
              height="40%"
              width="80%"
              style={{
                backgroundColor: "#EE4F34",
                gridRow: "1/2",
                gridColumn: "1/-1",
                alignSelf: "center",
                justifySelf: "end",
              }}
            ></Box>
            <span
              style={{
                fontFamily: "Montserrat",
                fontStyle: "italic",
                color: "rgb(238, 79, 52)",
                gridColumn: "1",
                gridRow: "1/2",
                alignSelf: "end",
                justifySelf: "baseline",
                fontSize: "clamp(2rem, 12vw, 4rem)",
                writingMode: "vertical-lr",
                paddingBottom: "3vh",
                paddingLeft: "1vh",
              }}
            >
              call me
            </span>
          </Box>
        </Grid>
      </Page>
    </Grommet>
  );
}

export default App;

{
  /* <div>
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
          </div> */
}
