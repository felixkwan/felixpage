import React from "react"
import { Link } from "gatsby"

/** @jsx jsx */
import { jsx, Styled, Grid, Box, Container, Divider, NavLink } from "theme-ui"

const About = () => {

  return (
    <>
        <section sx={{
            bg: "#1e1e1e",
            py: '2.5rem',
            px: '2.5rem',
        }}>
            <div>
                <Box sx={{ width: '100%',}}>
                    <Container>
                    <Divider variants='styles.hr'></Divider>
                        <Grid
                            gap={2}
                            columns={[ null,2 ]}>
                            <Box bg='muted'>
                                <Styled.h2 sx={{
                                    color: 'whiteBis',
                                }}>Vision</Styled.h2>
                            </Box>
                            <Box bg='muted'>
                                <Styled.h4 sx={{
                                    color: 'whiteBis',
                                    pt: '0.75rem',
                                }}>Belief and Crafting</Styled.h4>
                                <p>
                                We believe in the magic of think different. It is always helpful to explore unexpected answers.</p>
                            </Box>
                        </Grid>
                        <Grid
                            gap={2}
                            columns={[ null,2 ]}>
                            <Box bg='muted'>
                                <Styled.h2 sx={{
                                    color: 'whiteBis',
                                }}>Message</Styled.h2>
                            </Box>
                            <Box bg='muted'>
                            <Divider variants='styles.hr'></Divider>
                                <Styled.h4 sx={{
                                    color: 'whiteBis',
                                }}>Make Great Together</Styled.h4>
                                <p>
                                We assemble a team of passionate designer and developers with commitment to search for excellence in design. Together with our clients, we shape the digital experience.</p>
                            </Box>
                        </Grid>
                    </Container>
                </Box>
            </div>

            <div>
                <div sx={{ width: '100%',}}>
                    <Grid
                        gap={2}
                        columns={[ null,2 ]}>
                        <Box bg='muted'>
                            <Styled.h2 sx={{
                                color: 'whiteBis',
                            }}>Team</Styled.h2>
                        </Box>
                        <Box bg='muted'>
                        <Divider variants='styles.hr'></Divider>
                            <Styled.h5 sx={{
                                color: 'whiteBis',
                            }}>
                                Full-stack Engineer
                            </Styled.h5>
                            <Styled.h4 sx={{
                                color: 'whiteBis',
                            }}>Team Member</Styled.h4>
                            <p>
                            We believe in the magic of think different. It is always helpful to explore unexpected answers.</p>
                        </Box>
                    </Grid>
                    <Grid
                        gap={2}
                        columns={[ null,2 ]}>
                        <Box bg='muted'>
                        </Box>
                        <Box bg='muted'>
                        <Divider variants='styles.hr'></Divider>
                            <Styled.h5 sx={{
                                color: 'whiteBis',
                            }}>
                                UI Designer, Project Manager
                            </Styled.h5>
                            <Styled.h4 sx={{
                                color: 'whiteBis',
                            }}>Team Member</Styled.h4>
                            <p>
                            We assemble a team of passionate designer and developers with commitment to search for excellence in design. Together with our clients, we shape the digital experience.</p>
                            <NavLink to="/">Email</NavLink>
                        </Box>
                    </Grid>
                </div>
            </div>
        </section>
    </>
  )
}

export default About
