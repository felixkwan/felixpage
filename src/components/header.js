import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Reveal, Tween } from 'react-gsap'
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin'
import PropTypes from "prop-types"

gsap.registerPlugin(TextPlugin);

const Header = ({ siteTitle }) => {

  return(
  <>
    <header>
      <nav style={{
        paddingLeft: '2rem',
        paddingRight: '2rem',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        background: 'transparent',
        maxWidth: '1220px',
        margin: '0 auto',
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
              <Reveal repeat>
                <Tween from={{ text: '//////'}}
                 to={{ text: 'levelfive' }}
                 ease={x =>
                  x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
                }
                 duration={1.75}
                 delay={.5}>
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
              <Reveal repeat>
                <Tween from={{ text: '//////'}}
                 to={{ text: 'Work' }}
                 ease={x =>
                  x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
                }
                 duration={1.75}
                 delay={.5}>
                  <span></span>
                </Tween>
              </Reveal>
            </AnchorLink>
            <AnchorLink to='/#about' title="about"
              className="navbar-item"
            >
              <Reveal repeat>
                <Tween from={{ text: '//////'}}
                 to={{ text: 'About' }}
                 ease={x =>
                  x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
                }
                 duration={1.75}
                 delay={.5}>
                  <span></span>
                </Tween>
              </Reveal>
            </AnchorLink>
            <AnchorLink to='/#contact' title="contact"
              className="navbar-item"
            >
              <Reveal repeat>
                <Tween from={{ text: '//////'}}
                 to={{ text: 'Contact' }}
                 ease={x =>
                  x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
                }
                 duration={1.75}
                 delay={.5}>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
