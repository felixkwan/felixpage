import React from "react"
import { Link } from "gatsby"

const Business = () => {

  return (
    <>
      <section id="business" style={{
          paddingLeft: '1.25rem',
          paddingRight: '1.25rem',
      }}>
        <div className="has-border-top">
            <h2>Expertise</h2>
        </div>
        <div style={{
            display: 'grid',
            width: '100%',
            gridTemplateColumns: '25% auto',
        }}>
            <div className="has-border-top" style={{
                marginRight: '1.25rem',
            }}>
                <h4>Design</h4>
            </div>
            <div className="has-border-top">
                <h3>Website and Graphic Design</h3>
                <p>

                </p>
            </div>
        </div>
      </section>
    </>
  )
}

export default Business
