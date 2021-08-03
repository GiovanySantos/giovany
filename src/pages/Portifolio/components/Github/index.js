import React from 'react'
import Iframe from 'react-iframe'

const Git = () => {
    return (
        <>
            <Iframe url="https://github.com/GiovanySantos?tab=repositories"
                width="450px"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative" />
        </>
    )
}

export default Git;