import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>
    <nav style={{
      paddingLeft: '2rem',
      paddingRight: '2rem',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        borderBottomWidth: '3px',
        borderBottomStyle: 'solid',
        borderBottomColor: '#2a2a2a',
      }}>
          <Link to='/' style={{
            fontSize: '1.25rem',
            letterSpacing: '-2px',
          }}>
            {siteTitle}
          </Link>
        <div className="navbar-link" style={{
          marginLeft: 'auto',
        }}>
          <Link to='/' style={{
            paddingRight: '.25rem',
            paddingLeft: '.25rem',
            marginRight: ' .25rem',
          }}
          >
            Works
          </Link>
          <Link to='/' style={{
            paddingRight: '.25rem',
            paddingLeft: '.25rem',
            marginRight: ' .25rem',
          }}
          >
            About
          </Link>
          <Link to='/' style={{
            paddingRight: '.25rem',
            paddingLeft: '.25rem',
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
