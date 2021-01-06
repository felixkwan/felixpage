/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Press+Start+2P"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Helmet>
        <div style={{
          background: 'transparent',
          minWidth: '375px',
        }}>
          {children}
        </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
