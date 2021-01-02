/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider, Box } from 'theme-ui'
import theme from "../gatsby-plugin-theme-ui/index"

const Layout = ({ children }) => {

  return (
    <>
      <Box>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
