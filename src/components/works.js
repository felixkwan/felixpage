import React from "react"
import {Container} from "nes-react"
import groundGif from "../images/pixel-ground.gif"
import mgtGif from "../images/pixel-mgt.gif"
import sotimeGif from "../images/pixel-sotime.gif"
import { Reveal } from 'react-gsap';
import SlideLeft from "../components/slideLeft"
import SlideRight from "../components/slideRight"
import FadeInTop from "../components/fadeInTop"

const Works = () => {

  return (
    <>
      <div className="wrapper">
        <section id="works" style={{
          paddingTop: '3rem',
          paddingBottom: '1rem',
        }}>
          <div style={{
            overflow: 'hidden',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            background: '#f7f7f7',
          }} className="work-header">
            <Reveal>
            <SlideLeft>
            <img src={groundGif} alt="gsp"
              style={{
                objectFit: 'cover',
                objectPosition: '50% 50%',
                width: '100%',
              }}
            />
            </SlideLeft>
            </Reveal>
          </div>
          
          <div className="grid-works" style={{
            maxWidth: '1220px',
          }}>
            <div className="muted"></div>
            <Reveal>
            <FadeInTop>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'rows',
              paddingBottom: '10rem',
              zIndex: 3,
              background: 'white',
            }}>
              <Container style={{
                boxShadow: '1.5rem 1.5rem 1.5rem 0 rgba(150, 150, 150, .2)',
                margin: '4px',
              }} className="with-title is-rounded">
                <p className="title">Design and Development</p>
                <h2 style={{
                    paddingBottom: '.5rem',
                }}>Green Source Company Website</h2>
                <p style={{
                  paddingBottom: '1rem',
                }}>
                Latest release of the Green Source Gardening site is now live. This is the first time we have worked with green company. Healthy living environment always benefits us and bring us awesome ideas. We also update their business in two main 
                focuses: Live Green and Shape Safety.</p>
                <a className="" style={{
                  borderBottom: '3px solid #FD5825',
                  color: '#FD5825',
                  padding: '.5rem 0',
                }} href="https://greensourcegroup.co" target="_blank">Visit Website</a>
              </Container>
            </div>
            </FadeInTop>
            </Reveal>
          </div>


          <div style={{
            overflow: 'hidden',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            background: '#f7f7f7',
          }} className="work-header">
            <Reveal>
              <SlideRight>
            <img src={sotimeGif} alt="sotime"
              style={{
                objectFit: 'cover',
                objectPosition: '50% 50%',
                width: '100%',
              }}
            />
            </SlideRight>
            </Reveal>
          </div>
          <div className="grid-works-reverse" style={{
            maxWidth: '1220px',
          }}>
            <Reveal>
            <FadeInTop>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'rows',
              paddingBottom: '10rem',
              zIndex: 3,
              background: 'white',
            }}>
              <Container style={{
                boxShadow: '1.5rem 1.5rem 1.5rem 0 rgba(150, 150, 150, .2)',
                margin: '4px',
              }} className="with-title is-rounded">
                <p className="title">App Development</p>
                <h2 style={{
                    paddingBottom: '.5rem',
                }}>SoTime Mobile App</h2>
                <p style={{
                  paddingBottom: '1rem',
                }}>
                  “We create a calendar mainly for group events. You can invite your friends, family and colleagues to vote the best choice of event date and time.
                  Everyone would have a dream to have their app and change the world, So have I.”</p>
                <h5>— SoTime founders</h5>
                <br/>
                <a className="" style={{
                  borderBottom: '3px solid #FD5825',
                  color: '#FD5825',
                  padding: '.5rem 0',
                }} href="https://www.behance.net/gallery/111178531/SoTime" target="_blank">Visit Website</a>
              </Container>
            </div>
            </FadeInTop>
            </Reveal>
            <div className="muted"></div>
          </div>

          <div style={{
            overflow: 'hidden',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            position: 'relative',
            background: '#f7f7f7',
          }} className="work-header">
            <Reveal>
              <SlideLeft>
              <img src={mgtGif} alt="mgt"
                style={{
                  objectFit: 'cover',
                  objectPosition: '50% 50%',
                  width: '100%',
                }}
              />
              </SlideLeft>
            </Reveal>
          </div>

          <div className="grid-works" style={{
            maxWidth: '1220px',
          }}>
            <div className="muted"></div>
            <Reveal>
            <FadeInTop>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'rows',
                paddingBottom: '8rem',
                zIndex: 3,
                background: 'white',
              }}>
              <Container style={{
                boxShadow: '1.5rem 1.5rem 1.5rem 0 rgba(150, 150, 150, .2)',
                margin: '4px',
              }} className="with-title is-rounded">
                <p className="title">Design and Development</p>
                <h2 style={{
                    paddingBottom: '.5rem',
                }}>Make Great Themes</h2>
                <p style={{
                  paddingBottom: '1rem',
                }}>
                Tumblr users love customising theme with their own ideas so we have created a collection of high quality themes for them. Those have great and clean layout so that users can make it beautiful with their stories and art works.
                </p>
                <a className="" style={{
                  borderBottom: '3px solid #FD5825',
                  color: '#FD5825',
                  padding: '.5rem 0',
                }} href="https://felixkwan.github.io/mgt" target="_blank">Visit Website</a>
              </Container>
            </div>
            </FadeInTop>
            </Reveal>
          </div>

        </section>
      </div>
    </>
  )
}

export default Works
