import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import dataTabs from './utils/dataTabs';
import Youtube from './components/Youtube'
import Twitch from './components/Twitch'
import './styles.scss'

const Port = () => {
    const [toggle, setToggleState] = useState();

    const toggleTab = (index) => {
        setToggleState(index);
    };


    return (
        <Container>
            <ul className="tabs">
                {
                    dataTabs.map((item) => {
                        return (
                            <a href={item.link} rel="noopener noreferrer" target="_blank">
                                <li
                                    key={item.id}
                                    className={toggle === item.id ? "tabs active" : "tabs"}
                                    onClick={() => toggleTab(item.id)}
                                >
                                    <img src={item.image} alt={item.image} />
                                </li>
                            </a>
                        )
                    })
                }

            </ul>
            <div className="content-tabs">
                <div className={toggle === 5 ? "content  active-content" : "content"}>
                    <Youtube />
                </div>
                <div className={toggle === 6 ? "content  active-content" : "content"}>
                    <Twitch />
                </div>
            </div>
        </Container >
    )
}
export default Port;