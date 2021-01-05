import React from "react"
import {Container} from "nes-react"

const Works = () => {

  return (
    <>
      <section id="works" style={{
        paddingBottom: '8rem',
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <div className="muted"></div>
          <div style={{
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
          }}>
            <Container className="with-title">
              <p className="title">Design & Development</p>
              <h2 style={{
                  color: 'primary',
              }}>Green Source Company Website</h2>
              <p>
              Latest release of the Green Source Gardening site is now live. This is the first time we have worked with green company. Healthy living environment always benefits us and bring us awesome ideas. We also update their business in two main 
              focuses: Live Green and Shape Safety.</p>
            </Container>
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
          <div className="muted"></div>
          <div style={{
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
          }}>
            <Container className="with-title">
              <p className="title">Design & Development</p>
              <h2 style={{
                  color: 'primary',
              }}>Green Source Company Website</h2>
              <p>
              Latest release of the Green Source Gardening site is now live. This is the first time we have worked with green company. Healthy living environment always benefits us and bring us awesome ideas. We also update their business in two main 
              focuses: Live Green and Shape Safety.</p>
            </Container>
          </div>
        </div>

      </section>
    </>
  )
}

export default Works
