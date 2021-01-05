import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header as='nav'>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '1.25rem',
    }}>
        <Link to='/'>
          {siteTitle}
        </Link>
      <div style={{
        marginLeft: 'auto',
      }}>
        <Link to='/'
        >
          Works
        </Link>
        <Link to='/'
        >
          Business
        </Link>
        <Link to='/'
        >
          About
        </Link>
        <Link to='/'
        >
          Contact
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
