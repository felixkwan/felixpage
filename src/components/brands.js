import React from "react"
import { Reveal, Tween } from 'react-gsap';
import SlideRight from "../components/slideRight"
import logo2 from "../images/pixel-logo-04.gif"
import logo3 from "../images/pixel-logo-05.gif"

import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Brands = () => {

  return (
    <>
      <div className="wrapper">
            <div style={{
                paddingBottom: '5.5rem',
            }}>
                <div style={{
                    padding: '1rem 0',
                }}>
                <Reveal>
                  <Tween from={{ text: '////////'}}
                   to={{ text: 'Brands' }}
                   ease={x =>
                    x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
                  }
                   duration={.75}
                   delay={.25}>
                    <span style={{fontWeight: 700}}>
                    </span>
                  </Tween>
                </Reveal>
                </div>

                <div className="grid-1-1">
                    <div className="brand-item">

                        <div className="brand-image" style={{
                            position: 'relative',
                        }}>
                            <Reveal>
                                <SlideRight>
                                <img src={logo2} alt="logo2"
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: '50% 50%',
                                    width: '100%',
                                }}/>
                                </SlideRight>
                            </Reveal>
                        </div>
                        
                        <div className="brand-title" style={{
                            padding: '1.5rem 0',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'baseline',
                            justifyContent: 'space-between',
                        }}>
                            <Reveal>
                                <Tween from={{ text: '////// /////'}}
                                to={{ text: 'Little Furries' }}
                                ease={x =>
                                    x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
                                }
                                duration={.75}
                                delay={.25}>
                                    <span style={{
                                        fontWeight: 700,
                                    }}>
                                    </span>
                                </Tween>
                            </Reveal>
                            <h5><span style={{ color: '#FD5825', marginRight: '.25rem',}}>#</span>Gadget</h5>
                        </div>

                        <Reveal>
                            <Tween from={{ text: '////// ////////////// //////////// ////////////// /////////////// //////// /////////// ///////'}}
                            to={{ text: 'We have created the brand logo for Little Furries who sells cool gadgets. All they need is a fashionable typography and it is better to add details linking tech.' }}
                            ease={x =>
                                x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
                            }
                            duration={.75}
                            delay={.25}>
                                <span style={{
                                    fontSize: '.9rem',
                                }}>
                                </span>
                            </Tween>
                        </Reveal>
                    </div>
                    
                    <div className="brand-item">

                        <div className="brand-image" style={{
                            position: 'relative',
                        }}>
                            <Reveal>
                                <SlideRight>
                                <img src={logo3} alt="logo3"
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: '50% 50%',
                                    width: '100%',
                                }}/>
                                </SlideRight>
                            </Reveal>
                        </div>

                        <div className="brand-title" style={{
                            padding: '1.5rem 0',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'baseline',
                            justifyContent: 'space-between',
                        }}>
                            <Reveal>
                                <Tween from={{ text: '////// /////'}}
                                to={{ text: 'Deerhorn' }}
                                ease={x =>
                                    x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
                                }
                                duration={.75}
                                delay={.25}>
                                    <span style={{
                                        fontWeight: 700,
                                    }}>
                                    </span>
                                </Tween>
                            </Reveal>
                            <h5><span style={{ color: '#FD5825', marginRight: '.25rem'}}>#</span>Airbnb</h5>
                        </div>

                        <Reveal>
                            <Tween from={{ text: '////// ////////////// //////////// ////////////// /////////////// //////// /////////// /////// ////// //////'}}
                            to={{ text: 'DH is an airbnb host. We have a great time to stay there and host is nice. The relationship between host and visitors is an invisible linkage and keep them close.' }}
                            ease={x =>
                                x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
                            }
                            duration={.75}
                            delay={.25}>
                                <span style={{
                                    fontSize: '.9rem',
                                }}>
                                </span>
                            </Tween>
                        </Reveal>
                    </div>

                </div>

            </div>
          </div>
    </>
  )
}

export default Brands
