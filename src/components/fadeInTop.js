import React from "react"
import { Tween } from 'react-gsap';
import PropTypes from "prop-types"

const fadeInTop = ({children}) => {

    return(
        <>
            <Tween from={{ opacity: 0, transform: 'translateY(2.5rem)' }} to={{ opacity: 1, transform: 'translateY(0)'}}  duration={1} ease="out(power2)">
                {children}
            </Tween>
        </>
    )
}

fadeInTop.propTypes = {
    children: PropTypes.node.isRequired,
}

export default fadeInTop