import React from "react"
import { Link } from "gatsby"

/** @jsx jsx */
import { jsx, Styled, Grid, Box, Divider, Container } from "theme-ui"

const Business = () => {

  return (
    <>
      <section sx={{
          pb: '2.5rem',
      }}>
        <div>
            <Box sx={{ 
                mx: 'auto',
                px: '2.5rem',
            }}>
                <Container>  
                    <Divider variants='styles.hr'></Divider>
                    <Grid
                        gap={2}
                        columns={[ null,2 ]}
                    >
                        <Box bg='muted'>
                            <Styled.h2 sx={{
                                color: 'black',
                            }}>Business</Styled.h2>
                        </Box>
                        <Box bg='muted' sx={{mt: '0.75rem',}}>
                            <Styled.h4 sx={{
                                color: 'black',
                            }}>Website and Graphic Design</Styled.h4>
                            <p>
                            We believe in the magic of think different. It is always helpful to explore unexpected answers.</p>
                        </Box>
                        <Box bg='muted'></Box>
                        
                        <Box bg='muted'>
                        <Divider variants='styles.hr'></Divider>
                            <Styled.h4 sx={{
                                color: 'black',
                            }}>Wesbite Development</Styled.h4>
                            <p>
                            We believe in the magic of think different. It is always helpful to explore unexpected answers.</p>
                        </Box>
                        <Box bg='muted'></Box>
                        <Box bg='muted'>
                        <Divider variants='styles.hr'></Divider>
                            <Styled.h4 sx={{
                                color: 'black',
                            }}>Branding Strategy</Styled.h4>
                            <p>
                            We believe in the magic of think different. It is always helpful to explore unexpected answers.</p>
                        </Box>
                        <Box bg='muted'></Box>
                        <Box bg='muted'>
                        <Divider variants='styles.hr'></Divider>
                            <Styled.h4 sx={{
                                color: 'black',
                            }}>Custom Store Theme</Styled.h4>
                            <p>
                            We believe in the magic of think different. It is always helpful to explore unexpected answers.</p>
                        </Box>
                    </Grid>
                </Container>      
            </Box>
        </div>
      </section>
    </>
  )
}

export default Business
