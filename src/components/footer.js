import { Link } from "gatsby"
import React from "react"

/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const Footer = () => (
    <footer sx={{
        py: '3.5rem',
      }}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
)

export default Footer
