import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import Works from "../components/works"
import About from "../components/about"
import Footer from "../components/footer"
import Business from "../components/business"
import Contact from "../components/contact"

import { Box, Flex, Styled, Container} from "theme-ui"

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
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          // set this to `minHeight: '100vh'` for full viewport height
          minHeight: '100vh',
        }}>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <Container
            p={4}
            bg='muted'
            >
              <Box sx={{
                mx: 'auto',
                maxWidth: '720px',
                pt: '2.5rem',
              }}>
                <Styled.h1 sx={{
                  px: 2,
                  py: 2,
                  mx: 'auto',
                }}>
                  We are a Hong Kong based design & development Team. We make web design, branding & Value.
                </Styled.h1>
              </Box>
          </Container>
        </Box>
      <Business/>
      <Works/>
      <About/>
      <Contact/>
      <Footer/>
    </Layout>
    </>
  )
}

export default IndexPage
