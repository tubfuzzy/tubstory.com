import * as React from "react"
import SEO from "../components/SEO"
import Sociallinks from "../components/sociallinks"

const IndexPage = () => {
  const textColor = "#f2eded"
  return (
    <React.Fragment>
      <SEO/>
      <div className="layout">
        <Sociallinks/>
        <div className="wrapp">
          <div style={{ border: "red" }}>
          <h1>{ 'Hallo World!' }</h1>
          <h2 style={{ color: textColor, margin: 2 }}>{ 'My Name is' }</h2>
          <h2 style={{ color: textColor, margin: 2 }}>{ 'Theeraprasert Meemui' }</h2>

          </div>
          {/* <h1>{ 'Hallo World' }</h1>
          <h1>{ 'System.out.printf("Theeraprasert Meemui")' }</h1>
          <hr/> */}
        </div>
        <footer className="fixbot">
          <p style={{ color:"#fff", letterSpacing: ".2rem", fontSize: ".6rem", opacity: ".75", marginBottom: 0 }}>
            BUILT WITH <a style={{ textDecoration: "none", color: "#a2cae2" }} href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">GATSBY.JS</a> BY THEERAPRASERT.M 2021
          </p>
        </footer>
      </div>
    </React.Fragment>
  )
}

export default IndexPage