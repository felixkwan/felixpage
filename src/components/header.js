import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
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
            {siteTitle}
          </Link>
        <div className="navbar-link is-hidden-touch" style={{
          marginLeft: 'auto',
        }}>
          <AnchorLink to='/#works' title="works"
            className="navbar-item"
          >
            Works
          </AnchorLink>
          <AnchorLink to='/#about' title="about"
            className="navbar-item"
          >
            About
          </AnchorLink>
          <AnchorLink to='/#contact' title="contact"
            className="navbar-item"
          >
            Contact
          </AnchorLink>
        </div>

        <div className="is-hidden-widescreen" style={{
          marginLeft: 'auto',
          padding: '0 .25rem',
        }}>
          <button class="nes-btn">Menu</button>
        </div>

      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
