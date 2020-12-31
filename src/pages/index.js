import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import Works from "../components/works"

import { Box, Flex } from "theme-ui"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Layout>
        <Box>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <Flex sx={{alignItems: 'center'}}>
          <h1>Hi people</h1>
          </Flex>
        </Box>
      
      <Works/>
    </Layout>
    </>
  )
}

export default IndexPage
