import React from "react"
import { Link } from "gatsby"
import { Reveal, Tween } from 'react-gsap'
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin'
import NavMenu from "../components/navMenu"

gsap.registerPlugin(TextPlugin);

class Header extends React.Component {

  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {

  const menuActive = this.state.showMenu ? 'is-active' : '';
  const buttonActive = this.state.showMenu ? 'is-active' : '';
  
    return(
      <>
        <header>
          <nav className="wrapper" style={{
            paddingTop: '2rem',
            paddingBottom: '2rem',
            background: 'transparent',
            position: 'relative'
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
                    <Tween from={{ text: '//'}}
                    to={{ text: 'FK' }}
                    ease={x =>
                      x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
                    }
                    duration={1.75}
                    delay={1.5}>
                      <span></span>
                    </Tween>
                  </Reveal>
                </Link>
              <div className="navbar-link" style={{
                marginLeft: 'auto',
              }}>

                <div style={{
                  padding: '0 .25rem',
                }}>
                  <button className={`nes-btn ${buttonActive}`} onClick={this.toggleMenu}>Menu</button>
                </div>

              </div>
            </div>

            <div className={`navbar ${menuActive}`}>
              <NavMenu/>
            </div>

          </nav>
        </header>
      </>
    )}
}

export default Header
