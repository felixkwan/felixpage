import React from "react"
import { Link } from "gatsby"

const Business = () => {

  return (
    <>
      <div className="wrapper" style={{
        paddingTop: '5.5rem',
      }}>
        <div style={{
        }}>
          <section id="business" style={{
              paddingBottom: '6rem',
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
                <div className="has-border-top-thin">
                    <h3>Website and Graphic Design</h3>
                    <p>
                    We provide creative work that accurately approaches your target in business. To create and maintain a standard of excellence, we collaborate with product management and engineering to define and implement innovative solutions for the product direction, visuals and experience. 
                    </p>
                </div>
            </div>
            <div className="grid-4-6" style={{
              paddingBottom: '2.5rem',
            }}>
                <div className="has-border-top-thin mr-2-widescreen mb-2-touch">
                    <h4>Technology</h4>
                </div>
                <div className="has-border-top-thin">
                    <h3>Website Development</h3>
                    <p>
                    We support industry standard and integrate your digital solutions. As for traditional companies, our team would simplify the development to offer better and affordable package.
                    </p>
                </div>
            </div>
            <div className="grid-4-6" style={{
              paddingBottom: '2.5rem',
            }}>
                <div className="has-border-top-thin mr-2-widescreen mb-2-touch">
                    <h4>E-commerce</h4>
                </div>
                <div className="has-border-top-thin">
                    <h3>Custom Store Theme</h3>
                    <p>
                     We help new and established store from around the world to succeed and grow on the platform through dedicate design and development.
                    </p>
                </div>
            </div>

            <div className="grid-4-6" style={{
              paddingBottom: '2.5rem',
            }}>
                <div className="has-border-top-thin mr-2-widescreen mb-2-touch">
                    <h4>Strategy</h4>
                </div>
                <div className="has-border-top-thin">
                    <h3>Branding</h3>
                    <p>
                      We help brands expand their market and explore values by focusing on key customer. We would clarify the message you sent to the public. Less is more.
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
