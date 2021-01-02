import React from "react"

/** @jsx jsx */
import { jsx, Styled, Box, Grid, Label, Input,Textarea, Select } from "theme-ui"

const Contact = () => {

  return (
    <>
      <section>
        <div>
              <Grid 
                gap={2}
                columns={[null,2]}
              >
                <Box bg='muted'>
                    <Styled.h2 sx={{
                        color: 'black',
                    }}>Contact</Styled.h2>
                </Box>
                <Box as='form' sx={{mt: 3,}}>
                    <Select name='sound' mb={3}>
                        <option>Beep</option>
                        <option>Boop</option>
                        <option>Blip</option>
                    </Select>
                    <Label htmlFor='username'>Username</Label>
                    <Input
                        name='username'
                        mb={3}
                    />
                    <Label htmlFor='password'>Password</Label>
                    <Input
                        type='password'
                        name='password'
                        mb={3}
                    />
                    <Label htmlFor='comment'>Comment</Label>
                    <Textarea
                        name='comment'
                        rows='6'
                        mb={3}
                    />
                </Box>
              </Grid>
        </div>
      </section>
    </>
  )
}

export default Contact
