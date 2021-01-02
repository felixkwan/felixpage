import React from "react"
import { Link } from "gatsby"

/** @jsx jsx */
import { jsx, Styled, Grid, Box } from "theme-ui"

const About = () => {

  return (
    <>
      <section>
        <div>
            <div sx={{ width: '100%',}}>
                <Grid
                    gap={2}
                    columns={[ 2 ]}>
                    <Box bg='muted'>
                        <Styled.h2 sx={{
                            color: 'primary',
                        }}>Vision</Styled.h2>
                    </Box>
                    <Box bg='muted'>
                        <Styled.h4 sx={{
                            color: '#ccc',
                        }}>Belief and Crafting</Styled.h4>
                        <p>
                        We believe in the magic of think different. It is always helpful to explore unexpected answers.</p>
                    </Box>
                </Grid>
                <Grid
                    gap={2}
                    columns={[ 2 ]}>
                    <Box bg='muted'>
                        <Styled.h2 sx={{
                            color: 'primary',
                        }}>Message</Styled.h2>
                    </Box>
                    <Box bg='muted'>
                        <Styled.h4 sx={{
                            color: '#ccc',
                        }}>Make Great Together</Styled.h4>
                        <p>
                        We assemble a team of passionate designer and developers with commitment to search for excellence in design. Together with our clients, we shape the digital experience.</p>
                    </Box>
                </Grid>
            </div>
        </div>
      </section>

      <section>
        <div>
            <div sx={{ width: '100%',}}>
                <Grid
                    gap={2}
                    columns={[ 2 ]}>
                    <Box bg='muted'>
                        <Styled.h2 sx={{
                            color: 'primary',
                        }}>Team</Styled.h2>
                    </Box>
                    <Box bg='muted'>
                        <Styled.h5 sx={{
                            color: '#ccc',
                        }}>
                            Full-stack Engineer
                        </Styled.h5>
                        <Styled.h4 sx={{
                            color: '#ccc',
                        }}>Team Member</Styled.h4>
                        <p>
                        We believe in the magic of think different. It is always helpful to explore unexpected answers.</p>
                    </Box>
                </Grid>
                <Grid
                    gap={2}
                    columns={[ 2 ]}>
                    <Box bg='muted'>
                    </Box>
                    <Box bg='muted'>
                        <Styled.h5 sx={{
                            color: '#ccc',
                        }}>
                            UI Designer, Project Manager
                        </Styled.h5>
                        <Styled.h4 sx={{
                            color: '#ccc',
                        }}>Team Member</Styled.h4>
                        <p>
                        We assemble a team of passionate designer and developers with commitment to search for excellence in design. Together with our clients, we shape the digital experience.</p>
                    </Box>
                </Grid>
            </div>
        </div>
      </section>
    </>
  )
}

export default About
