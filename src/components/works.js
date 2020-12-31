import React from "react"
import { Link } from "gatsby"

/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const Works = () => {

  return (
    <>
      <section>
        <div sx={{
            display: 'grid',
            gridGap: 4,
            gridTemplateColumns: [
            'auto',
            '1fr 256px'
            ]
        }}>
            <div>
                <div>
                    <Styled.h2 sx={{
                        color: 'primary',
                    }}>Green Source Company Website</Styled.h2>
                    <Styled.h5 sx={{
                        color: '#ccc'
                    }}>Web Design & Development</Styled.h5>
                    <p>
                    Latest release of the Green Source Gardening site is now live. This is the first time we have worked with green company. Healthy living environment always benefits us and bring us awesome ideas. We also update their business in two main 
focuses: Live Green and Shape Safety.</p>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Works
