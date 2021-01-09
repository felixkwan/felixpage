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
            display: 'flex',
            flexDirection: 'colum',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div>
              © {new Date().getFullYear()} levelfive, Built with
              {` `}
              <a href="https://www.gatsbyjs.com" aria-label="Mute volume" style={{
                paddingBottom: '.5rem',
                borderBottom: '2px solid #3a3a3a'
              }}>Gatsby</a>
            </div>
            <div>
              <a href="https://levelfivedesign.github.io/" aria-label="Mute volume"><i className="nes-icon github"></i></a>
            </div>
        </footer>
      </div>
    </div>
)

export default Footer
