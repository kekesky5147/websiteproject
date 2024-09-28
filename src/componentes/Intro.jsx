import React from "react"
import about from "../assets/image/about.jpg"

const Intro = () => {
  return (
    <section id="intro">
      <div class="intro__inner">
        <h1 class="intro__title">MINSEOK's PORTFOLIO</h1>
        <div class="intro__lines" aria-hidden="true">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <div class="intro__text">
          <div class="text">
            <div>PORTFOLIO</div>
            <div> </div>
            <div>by MINSEOK</div>
          </div>
          <div class="img">
            <img src={about} alt="어바웃" />
          </div>
        </div>
        <div class="intro__lines bottom" aria-hidden="true">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
    </section>
  )
}

export default Intro
