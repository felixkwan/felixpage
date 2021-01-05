import React from "react"
import { Link } from "gatsby"

/** @jsx jsx */
import { jsx } from "theme-ui"

const Footer = () => (
    <footer style={{
        paddingBottom: '2.5rem',
        paddingTop: '2.5rem'
      }}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
)

export default Footer
