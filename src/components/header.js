import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const Header = ({ siteTitle }) => (
  <header as='nav'>
    <div sx={{
      mx: 'auto',
      px: '2.5rem',
      py: 3,
      display: 'flex',
      alignItems: 'center'
    }}>
        <Link to='/' sx={{
          variant: 'styles.navlink',
          fontSize: 3,
          py: 3,
        }}>
          {siteTitle}
        </Link>
      <div sx={{ ml: 'auto' }}>
        <Link to='/'
          sx={{
            variant: 'styles.navlink',
            ml: 3,
            py: 3,
          }}
        >
          Works
        </Link>
        <Link to='/'
          sx={{
            variant: 'styles.navlink',
            ml: 3,
            py: 3,
          }}
        >
          Business
        </Link>
        <Link to='/'
          sx={{
            variant: 'styles.navlink',
            ml: 3,
            py: 3,
          }}
        >
          About
        </Link>
        <Link to='/'
          sx={{
            variant: 'styles.navlink',
            ml: 3,
            py: 3,
          }}
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
