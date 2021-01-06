import React from "react"
import {Container} from "nes-react"
import logo2 from "../images/pixel-logo-04.gif"

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
            }}>
              <Container>
                <img src={logo2} alt="logo2"
                  objectFit="cover"
                  objectPosition="50% 50%"
                  width="50%"
                />
              </Container>
            </div>
          </div>
    </>
  )
}

export default Brands
