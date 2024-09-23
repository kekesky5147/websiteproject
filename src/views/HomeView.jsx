import React from "react"
import Header from "../componentes/Header"
import Skip from "../componentes/Skip"
import Intro from "../componentes/Intro"
import Skill from "../componentes/Skill"
import Site from "../componentes/Site"
import Port from "../componentes/Port"
import Footer from "../componentes/Footer"
import Contact from "../componentes/Contact"
import Main from "../componentes/Main"

const HomeView = () => {
  return (
    <div>
      <Skip />
      <Header />
      <Main>
        <Intro />
        <Skill />
        <Site />
        <Port />
        <Contact />
      </Main>
      <Footer />
    </div>
  )
}

export default HomeView
