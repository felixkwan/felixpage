import React from "react"


const Footer = () => (
    <div style={{
      backgroundColor: '#f7f7f7',
    }}>
      <div className="wrapper">
        <footer className="footer" style={{
            padding: '3.5rem 0 5rem',
            fontSize: '.8rem',
            color: '#3a3a3a',
          }}>
            <div>
              © {new Date().getFullYear()} felixkwan, Built with
              {` `}
              <a href="https://www.gatsbyjs.com" aria-label="Mute volume" style={{
                paddingBottom: '.5rem',
                borderBottom: '2px solid #3a3a3a'
              }}>Gatsby</a>
            </div>
            <div className="sns">
            <a href="mailto:knfix101@gmail.com" aria-label="Mute volume" style={{ marginRight: '1.5rem',}}><i className="nes-icon gmail"></i></a>
              <a href="https://www.linkedin.com/in/felixkwan101/" aria-label="Mute volume" style={{ marginRight: '1.5rem',}}><i className="nes-icon linkedin"></i></a>
              <a href="https://github.com/felixkwan" aria-label="Mute volume"><i className="nes-icon github"></i></a>
            </div>
        </footer>
      </div>
    </div>
)

export default Footer
