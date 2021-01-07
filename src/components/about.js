import React from "react"
import { Link } from "gatsby"
import {Container} from "nes-react"

const About = () => {

  return (
    <>
        <div style={{
            maxWidth: '1220px',
            margin: '0 auto',
        }}>
            <section id="about" style={{
            paddingTop:' 1.5rem',
            paddingLeft: '2.5rem',
            paddingRight: '2.5rem',
            paddingBottom: '8rem',
            }}>
                <div className="has-border-top">
                    <h2>Vision</h2>
                </div>
                <div className="grid-4-6" style={{
                    marginBottom: '2.5rem',
                }}>
                    <div className="has-border-top-thin mr-2-widescreen mb-2-touch">
                        <h4>Belief and Crafting</h4>
                    </div>
                    <div className="has-border-top">
                        <p>
                            We believe in the magic of think different. It is always helpful to explore unexpected answers.We are interested in tech, culture and crafting table. 
                        </p>
                    </div>
                </div>

                <div className="grid-4-6" style={{
                    marginBottom: '5.5rem',
                }}>
                    <div className="has-border-top-thin mr-2-widescreen mb-2-touch">
                        <h4>Make Great Together</h4>
                    </div>
                    <div className="has-border-top">
                        <p>
                            Assemble a team of passionate designer and developers with commitment to search for excellence in design. Together with our clients, we shape the digital experience.
                        </p>
                    </div>
                </div>

                <div className="has-border-top">
                    <h2>Team</h2>
                </div>

                <div className="grid-6-4" style={{
                    marginBottom: '5.5rem',
                }}>
                    <div className="has-border-top-thin is-hidden-widescreen mb-2-touch">
                        <h5>UI Designer, <br/>Front-End Developer, <br/>Project Manager</h5>
                        <h3>Level:5</h3>
                    </div>
                    <div className="has-border-top mr-2-widescreen">
                        <h4 style={{
                            paddingBottom: '.5rem',
                        }}>Felix Kwan</h4>
                        <p className="nes-balloon from-left nes-pointer">
                            People are increasingly joining digital lifestyles. They need digital solutions that inspire ideas and create value. Find us. We will provide you. \('x')/
                        </p>
                        <div className="muted"></div>
                        <h5>Creativity</h5>
                        <progress className="nes-progress is-primary" value="80" max="100"></progress>
                        <h5>UI Development</h5>
                        <progress className="nes-progress is-primary" value="85" max="100"></progress>
                        <div className="is-hidden-widescreen" style={{
                            paddingTop: '1.5rem',
                            marginTop: '1.5rem',
                        }}>
                        <Container className="with-title">
                            <p class="title">Character Rank</p>
                            <i class="nes-icon is-medium star"></i>
                            <i class="nes-icon is-medium star"></i>
                            <i class="nes-icon is-medium star"></i>
                            <i class="nes-icon is-medium star is-transparent"></i>
                            <i class="nes-icon is-medium star is-transparent"></i>
                        </Container>
                        </div>
                    </div>
                    <div className="has-border-top-thin is-hidden-touch">
                        <h5>UI Designer, <br/>Front-End Developer, <br/>Project Manager</h5>
                        <h3>Level:5</h3>
                        <div className="has-border-top-thin" style={{
                            paddingTop: '1.5rem',
                            marginTop: '1.5rem',
                        }}>
                        <Container className="with-title">
                            <p class="title">Character Rank</p>
                            <i class="nes-icon is-medium star"></i>
                            <i class="nes-icon is-medium star"></i>
                            <i class="nes-icon is-medium star"></i>
                            <i class="nes-icon is-medium star is-transparent"></i>
                            <i class="nes-icon is-medium star is-transparent"></i>
                        </Container>
                        </div>
                    </div>
                </div>

                <div className="grid-6-4">
                    <div className="has-border-top-thin is-hidden-widescreen mb-2-touch">
                        <h5>Full Stack Engineer</h5>
                        <h3>Level:98</h3>
                    </div>
                    <div className="has-border-top mr-2-widescreen">
                        <h4 style={{
                            paddingBottom: '.5rem',
                        }}>Elvis Chan</h4>
                        <p className="nes-balloon from-left nes-pointer">
                            Our digital solutions look smell good. Whether you’re a large company or an  individual, levelfive digital products are well designed for work and playful.
                        </p>
                        <div className="muted"></div>
                        <h5>Security</h5>
                        <progress className="nes-progress is-primary" value="100" max="100"></progress>
                        <h5>Problem Solving</h5>
                        <progress className="nes-progress is-primary" value="100" max="100"></progress>
                        <div className="is-hidden-widescreen" style={{
                            paddingTop: '1.5rem',
                            marginTop: '1.5rem',
                        }}>
                        <Container className="with-title">
                            <p class="title">Character Rank</p>
                            <i class="nes-icon is-medium star"></i>
                            <i class="nes-icon is-medium star"></i>
                            <i class="nes-icon is-medium star"></i>
                            <i class="nes-icon is-medium star"></i>
                            <i class="nes-icon is-medium star"></i>
                        </Container>
                        </div>
                    </div>
                    <div className="has-border-top-thin is-hidden-touch">
                        <h5>Full Stack Engineer</h5>
                        <h3>Level:98</h3>
                        <div className="has-border-top-thin" style={{
                            paddingTop: '1.5rem',
                            marginTop: '1.5rem',
                        }}>
                        <Container className="with-title">
                            <p class="title">Character Rank</p>
                            <i class="nes-icon is-medium star"></i>
                            <i class="nes-icon is-medium star"></i>
                            <i class="nes-icon is-medium star"></i>
                            <i class="nes-icon is-medium star"></i>
                            <i class="nes-icon is-medium star"></i>
                        </Container>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    </>
  )
}

export default About
