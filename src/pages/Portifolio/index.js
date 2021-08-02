import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import dataTabs from './utils/dataTabs';

import './styles.scss'


const Port = () => {
    const [toggle, setToggle] = useState()

    return (
        <Container>
            <ul className="tabs">

                {
                    dataTabs.map((item) => {
                        return (
                            <li
                                key={item.id}
                                className={toggle === item.id ? "tabs active-tab" : "tabs"}
                                onClick={
                                    () => setToggle(item.id)}
                            >
                                <img src={item.image} alt={item.image} />
                            </li>
                        )
                    })
                }
            </ul>
            <div className="content-tabs">
                <div className={toggle ? "content active-content" : "content"}></div>

            </div>
        </Container >
    )
}
export default Port;