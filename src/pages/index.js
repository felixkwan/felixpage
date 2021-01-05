import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import Works from "../components/works"
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
            <h1 className="heading">
              We are a Hong Kong based design & development Team. We make web design, branding & Value.
            </h1>
          </div>
        </div>
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
