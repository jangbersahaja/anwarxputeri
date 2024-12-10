"use client";

import { Snowfall } from "react-snowfall";

export default function Snow() {
  return (
    <Snowfall
      color="#F9DD7E"
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: "1",
      }}
    />
  );
}
