import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Reveal, Tween } from 'react-gsap';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

import Layout from "../components/layout"
import Header from "../components/header"
import Works from "../components/works"
import Brands from "../components/brands"
import About from "../components/about"
import Footer from "../components/footer"
import Business from "../components/business"
import Contact from "../components/contact"
import SlideLeft from "../components/slideLeft"

import "./main.scss"

gsap.registerPlugin(TextPlugin);

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
          background: '#f9f9f9',
          position: 'relative',
        }}>
          <SlideLeft />
          <Header/>
          <div style={{
          }}>
            <div style={{
              paddingRight: '2.5rem',
              paddingLeft: '2.5rem',
              maxWidth: '1220px',
              margin: '0 auto',
            }}>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexShrink: 1,
              }}>

                <Reveal>
                  <Tween from={{ text: 'vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.'}}
                   to={{ text: 'We are a Hong Kong based design & development Team. We make web design, branding & Value.' }}
                   ease={x =>
                    x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
                  }
                   duration={1.75}
                   delay={1.5}>
                    <span className="index-heading" style={{
                      maxWidth: '768px',
                    }}>
                    </span>
                  </Tween>
                </Reveal>
                
              </div>
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
