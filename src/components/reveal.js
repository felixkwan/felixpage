import React from "react"
import { Reveal, Tween } from 'react-gsap';

const fadeHeadline = () => {

    return(
        <>
        <Reveal repeat>
        <Tween from={{ opacity: 0 }} duration={2}>
            <h3>This headline is fading in</h3>
        </Tween>
        </Reveal>
        </>
    )
}

export default fadeHeadline