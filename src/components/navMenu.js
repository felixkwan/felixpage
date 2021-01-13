import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Reveal, Tween } from 'react-gsap'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { Container } from "nes-react"

gsap.registerPlugin(TextPlugin);

const NavMenu = () => {

  return (
    <>
        <Container className="is-rounded is-dark" style={{
            minHeight: 'fit-content',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <AnchorLink to='/#works' title="works"
              className="navbar-item"
            >
              <Reveal>
                <Tween from={{ text: '//////'}}
                to={{ text: 'Work' }}
                ease={x =>
                  x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
                }
                duration={1.75}
                delay={.25}>
                  <span style={{color: 'white'}}></span>
                </Tween>
              </Reveal>
            </AnchorLink>
            <AnchorLink to='/#about' title="about"
              className="navbar-item"
            >
              <Reveal>
                <Tween from={{ text: '//////'}}
                to={{ text: 'About' }}
                ease={x =>
                  x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
                }
                duration={1.75}
                delay={.25}>
                  <span style={{color: 'white'}}></span>
                </Tween>
              </Reveal>
            </AnchorLink>
            <a target="_blank" rel="noopener noreferrer"
                href="https://kwanfushing.tumblr.com"
              className="navbar-item"
            >
              <Reveal>
                <Tween from={{ text: '//////'}}
                to={{ text: 'Blog' }}
                ease={x =>
                  x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
                }
                duration={1.75}
                delay={.25}>
                  <span style={{color: 'white'}}></span>
                </Tween>
              </Reveal>
            </a>
          </Container>
    </>
  ) 
}

export default NavMenu
