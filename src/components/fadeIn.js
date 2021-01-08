import React from "react"
import { Tween } from 'react-gsap';
import PropTypes from "prop-types"

const fadeIn = ({children}) => {

    return(
        <>
            <Tween from={{ opacity: 0 }}  duration={3.5} delay=".5" ease="out(power2)">
                {children}
            </Tween>
        </>
    )
}

fadeIn.propTypes = {
    children: PropTypes.node.isRequired,
}

export default fadeIn