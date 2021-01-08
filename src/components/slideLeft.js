import React, { Fragment }  from "react"
import { Tween, Timeline } from 'react-gsap'
import PropTypes from "prop-types"

const SlideLeft = ({children}) => {

    return(
        <>  
           <Timeline
                target={
                    <Fragment>
                    <div style={{ position: 'absolute', top: '0', right: '0', width: '0', height: '100%', background: '#1c1c1c', transformOrigin: 'right middle', zIndex: 2 }} />
                    <div style={{ position: 'absolute', top: '0', right: '0', width: '100%', height: '100%', background: 'white', transformOrigin: 'right middle', zIndex: 1, }} />
                    </Fragment>
                }
            >
                <Tween to={{ width: '100%', left: '0' }} ease={x =>
                    x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
                } target={0} />
                <Tween to={{ width: '0%', left: '0' }} ease={x =>
                    x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
                }/>
            </Timeline>
            {children}
        </>
    )
}

SlideLeft.propTypes = {
    children: PropTypes.node.isRequired,
}

export default SlideLeft