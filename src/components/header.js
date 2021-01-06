import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>
    <nav style={{
      paddingLeft: '2rem',
      paddingRight: '2rem',
      paddingTop: '2rem',
      paddingBottom: '2rem',
      background: 'transparent',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        maxWidth: '1220px',
        margin: '0 auto',
      }}>
          <Link to='/' style={{
            fontSize: '1.25rem',
            letterSpacing: '-2px',
          }}>
            {siteTitle}
          </Link>
        <div className="navbar-link is-hidden-touch" style={{
          marginLeft: 'auto',
        }}>
          <Link to='/' style={{
            paddingRight: '.25rem',
            paddingLeft: '.25rem',
            marginRight: ' 1rem',
          }}
          >
            Works
          </Link>
          <Link to='/' style={{
            paddingRight: '.25rem',
            paddingLeft: '.25rem',
            marginRight: ' .5rem',
          }}
          >
            About
          </Link>
          <Link to='/' style={{
            paddingRight: '.25rem',
            paddingLeft: '.5rem',
          }}
          >
            Contact
          </Link>
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
