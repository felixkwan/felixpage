import React from "react"
import { Link } from "gatsby"


const Footer = () => (
    <div style={{
      backgroundColor: '#f7f7f7',
    }}>
      <div style={{
        maxWidth: '1220px',
        margin: '0 auto',
      }}>
        <footer className="footer" style={{
            padding: '3.5rem 2.5rem 5rem',
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
              <a href="https://www.gatsbyjs.com" style={{
                paddingBottom: '.5rem',
                borderBottom: '2px solid #3a3a3a'
              }}>Gatsby</a>
            </div>
            <div>
              <a href="https://levelfivedesign.github.io/"><i class="nes-icon github"></i></a>
            </div>
        </footer>
      </div>
    </div>
)

export default Footer
