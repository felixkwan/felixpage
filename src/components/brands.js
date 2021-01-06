import React from "react"
import logo2 from "../images/pixel-logo-04.gif"
import logo3 from "../images/pixel-logo-05.gif"

const Brands = () => {

  return (
    <>
      <div style={{
            maxWidth: '1220px',
            margin: '2.5rem auto',
          }}>
            <div style={{
                paddingLeft: '2.5rem',
                paddingRight: '2.5rem',
                paddingBottom: '5.5rem',
            }}>
                <div style={{
                    padding: '1rem 0',
                }}>
                    <h4>Branding</h4>
                </div>

                <div className="grid-1-1">
                    <div className="brand-item">
                        <img src={logo2} alt="logo2"
                        objectFit="cover"
                        objectPosition="50% 50%"
                        width="100%"
                        />
                        <div className="brand-title" style={{
                            padding: '1.5rem 0',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <h5>Little Furries</h5>
                            <h5><span style={{ color: '#FD5825', marginRight: '.25rem',}}>#</span>Gadget</h5>
                        </div>
                        <p style={{
                            fontSize: '0.9rem',
                        }}>We have created the brand logo for Little Furries who sells cool gadgets. All they need is a fashionable typography and it is better to add details linking tech.</p>
                    </div>
                    
                    <div className="brand-item">
                        <img src={logo3} alt="logo2"
                        objectFit="cover"
                        objectPosition="50% 50%"
                        width="100%"
                        />
                        <div className="brand-title" style={{
                            padding: '1.5rem 0',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                            <h5>Deerhorn</h5>
                            <h5><span style={{ color: '#FD5825', marginRight: '.25rem'}}>#</span>Airbnb</h5>
                        </div>
                        <p style={{
                            fontSize: '0.9rem',
                        }}>DH is an airbnb host. We have a great time to stay there and host is nice. The relationship between host and visitors is an invisible linkage and keep them close.</p>
                    </div>

                </div>

            </div>
          </div>
    </>
  )
}

export default Brands
