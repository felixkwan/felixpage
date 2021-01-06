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
          paddingBottom: '5.5em',
        }}>
          <div className="muted"></div>
          <div style={{
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
          }}>
            <Container className="with-title is-rounded">
              <p className="title">Design and Development</p>
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
          paddingBottom: '5.5em',
        }}>
          <div className="muted"></div>
          <div style={{
            paddingLeft: '1.25rem',
            paddingRight: '1.25rem',
          }}>
            <Container className="with-title is-rounded">
              <p className="title">App Development</p>
              <h2 style={{
                  color: 'primary',
              }}>SoTime</h2>
              <p>
              “We create a calendar mainly for group events. You can invite your friends, family and colleagues to vote the best choice of event date and time.
              Everyone would have a dream to have their app and change the world, So have I.”</p>
              <br/>
              <h5>— SoTime founders</h5>
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
            <Container className="with-title is-rounded">
              <p className="title">Design and Development</p>
              <h2 style={{
                  color: 'primary',
              }}>Make Great Themes</h2>
              <p>
              Tumblr users love customising theme with their own ideas so we have created a collection of high quality themes for them. Those have great and clean layout so that users can make it beautiful with their stories and art works.</p>
            </Container>
          </div>

        </div>
      </section>
    </>
  )
}

export default Works
