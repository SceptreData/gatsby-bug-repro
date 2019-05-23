import React from "react"

import Image from "../components/image"
import pngImg from "../img/logo-sm.png"

export default () => (
  <>
    <h1>Sceptre's PNG to WebP Conundrum</h1>
    <div
      style={{
        width: `200px`,
        margin: `0 auto`,
      }}
    >
      <Image name="logo-sm.png" />
      <h3>What it should look like:</h3>
      <img src={pngImg} />
    </div>
  </>
)
