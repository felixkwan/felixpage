import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import Works from "../components/works"
import Brands from "../components/brands"
import About from "../components/about"
import Footer from "../components/footer"
import Business from "../components/business"
import Contact from "../components/contact"

import "./main.scss"

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
        <div style={{
          display: 'grid',
          // set this to `minHeight: '100vh'` for full viewport height
          minHeight: '100vh',
          gridTemplateRows: 'fit-content auto',
        }}>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <div style={{
            paddingRight: '2.5rem',
            paddingLeft: '2.5rem',
          }}>
            <div style={{
              maxWidth: '1220px',
              margin: '0 auto',
              display: 'flex',
              flexWrap: 'wrap',
              flexShrink: 1,
            }}>
              <h1 className="heading" style={{
                maxWidth: '768px',
              }}>
                We are a Hong Kong based design & development Team. We make web design, branding & Value.
              </h1>
            </div>
          </div>
        </div>
      <Business/>
      <Works/>
      <Brands/>
      <About/>
      <Contact/>
      <Footer/>
    </Layout>
    </>
  )
}

export default IndexPage
