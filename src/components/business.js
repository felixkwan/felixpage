import React from "react"
import { Link } from "gatsby"

const Business = () => {

  return (
    <>
      <div style={{
        paddingLeft: '2.5rem',
        paddingRight: '2.5rem',
        paddingTop: '5.5rem',
        maxWidth: '1220px',
        margin: '0 auto',
      }}>
        <div style={{
        }}>
          <section id="business" style={{
              paddingBottom: '8rem',
          }}>
            <div className="has-border-top">
                <h2>Expertise</h2>
            </div>
            <div className="grid-4-6" style={{
              paddingBottom: '2.5rem',
            }}>
                <div className="has-border-top-thin mr-2-widescreen mb-2-touch">
                    <h4>Design</h4>
                </div>
                <div className="has-border-top">
                    <h3>Website and Graphic Design</h3>
                    <p>
                      Making
                    </p>
                </div>
            </div>
            <div className="grid-4-6" style={{
              paddingBottom: '2.5rem',
            }}>
                <div className="has-border-top-thin mr-2-widescreen mb-2-touch">
                    <h4>Technology</h4>
                </div>
                <div className="has-border-top">
                    <h3>Website Development</h3>
                    <p>
                      Making
                    </p>
                </div>
            </div>
            <div className="grid-4-6" style={{
              paddingBottom: '2.5rem',
            }}>
                <div className="has-border-top-thin mr-2-widescreen mb-2-touch">
                    <h4>E-commerce</h4>
                </div>
                <div className="has-border-top">
                    <h3>Custom Store Theme</h3>
                    <p>
                      Making
                    </p>
                </div>
            </div>

            <div className="grid-4-6" style={{
              paddingBottom: '2.5rem',
            }}>
                <div className="has-border-top-thin mr-2-widescreen mb-2-touch">
                    <h4>Strategy</h4>
                </div>
                <div className="has-border-top">
                    <h3>Branding</h3>
                    <p>
                      Making
                    </p>
                </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Business
