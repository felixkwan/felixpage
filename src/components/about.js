import React from "react"
import { Link } from "gatsby"

const About = () => {

  return (
    <>
        <section id="about" style={{
          paddingLeft: '2.5rem',
          paddingRight: '2.5rem',
          paddingBottom: '8rem',
        }}>
            <div className="has-border-top">
                <h2>Vision</h2>
            </div>
            <div style={{
                display: 'grid',
                width: '100%',
                gridTemplateColumns: '35% auto',
                marginBottom: '2.5rem',
            }}>
                <div className="has-border-top" style={{
                    marginRight: '1.5rem',
                }}>
                    <h4>Belief and Crafting</h4>
                </div>
                <div className="has-border-top">
                    <p>
                        We believe in the magic of think different. It is always helpful to explore unexpected answers.We are interested in tech, culture and crafting table. 
                    </p>
                </div>
            </div>

            <div style={{
                display: 'grid',
                width: '100%',
                gridTemplateColumns: '35% auto',
            }}>
                <div className="has-border-top" style={{
                    marginRight: '1.5rem',
                }}>
                    <h4>Make Great Together</h4>
                </div>
                <div className="has-border-top">
                    <p>
                        Assemble a team of passionate designer and developers with commitment to search for excellence in design. Together with our clients, we shape the digital experience.
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default About
