import React from "react"

/** @jsx jsx */
import { jsx, Styled, Box, Grid, Container } from "theme-ui"

const Works = () => {

  return (
    <>
      <section>
        <Container>
              <Grid 
                gap={2}
                columns={[2]}
              >
                <Box bg='muted'></Box>
                <Box>
                    <Styled.h2 sx={{
                        color: 'primary',
                    }}>Green Source Company Website</Styled.h2>
                    <Styled.h5 sx={{
                        color: '#ccc'
                    }}>Web Design & Development</Styled.h5>
                    <p>
                    Latest release of the Green Source Gardening site is now live. This is the first time we have worked with green company. Healthy living environment always benefits us and bring us awesome ideas. We also update their business in two main 
                    focuses: Live Green and Shape Safety.</p>
                </Box>
              </Grid>
        </Container>
      </section>
    </>
  )
}

export default Works
