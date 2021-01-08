import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Reveal, Tween } from 'react-gsap'
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin);

const Header = () => {

  return(
  <>
    <header>
      <nav className="wrapper" style={{
        paddingTop: '2rem',
        paddingBottom: '2rem',
        background: 'transparent',
        
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
        }}>
            <Link to='/' style={{
              fontSize: '1.25rem',
              letterSpacing: '-2px',
              padding: '.5rem',
            }}>
              <Reveal>
                <Tween from={{ text: '//////'}}
                 to={{ text: 'levelfive' }}
                 ease={x =>
                  x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
                }
                 duration={1.75}
                 delay={1.5}>
                  <span></span>
                </Tween>
              </Reveal>
            </Link>
          <div className="navbar-link is-hidden-touch" style={{
            marginLeft: 'auto',
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
                 delay={1.5}>
                  <span></span>
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
                 delay={1.5}>
                  <span></span>
                </Tween>
              </Reveal>
            </AnchorLink>
            <AnchorLink to='/#contact' title="contact"
              className="navbar-item"
            >
              <Reveal>
                <Tween from={{ text: '//////'}}
                 to={{ text: 'Contact' }}
                 ease={x =>
                  x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
                }
                 duration={1.75}
                 delay={1.5}>
                  <span></span>
                </Tween>
              </Reveal>
            </AnchorLink>
          </div>

          <div className="is-hidden-widescreen" style={{
            marginLeft: 'auto',
            padding: '0 .25rem',
          }}>
            <button className="nes-btn">Menu</button>
          </div>

        </div>
      </nav>
    </header>
  </>
)}

export default Header
