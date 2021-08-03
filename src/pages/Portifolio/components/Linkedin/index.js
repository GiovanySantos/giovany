import React from 'react'
import Iframe from 'react-iframe'

const Linkedin = () => {
    return (
        <>
            <Iframe url="https://www.linkedin.com/in/giovanysantos/"
                width="450px"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative" />
        </>
    )
}

export default Linkedin;