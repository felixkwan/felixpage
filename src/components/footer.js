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
          }}>
            <div className="" style={{
              paddingTop: '1.5rem',
            }}>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.com">Gatsby</a>
            </div>
        </footer>
      </div>
    </div>
)

export default Footer
