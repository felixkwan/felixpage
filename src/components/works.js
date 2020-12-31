import React from "react"
import { Link } from "gatsby"

/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const Works = () => {

  return (
    <>
      <section className="hero hero-medium">
        <div className="hero-body">
            <div className="column is-half is-tablet">
                <div className="columns">
                    <Styled.h1 sx={{
                        color: 'primary',
                    }}>Works</Styled.h1>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Works
