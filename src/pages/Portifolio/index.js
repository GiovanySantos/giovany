import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import dataTabs from './utils/dataTabs';
import Git from './components/Github'
import Linkedin from './components/Linkedin'
import Twitter from './components/Twitter'
import Insta from './components/Instagram'
import Youtube from './components/Youtube'
import Twitch from './components/Twitch'
import Clear from '../../statics/img/clear.png'
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
                            <li
                                key={item.id}
                                className={toggle === item.id ? "tabs active" : "tabs"}
                                onClick={() => toggleTab(item.id)}
                            >
                                <img src={item.image} alt={item.image} />
                            </li>
                        )
                    })
                }
                <li
                    key="7"
                    className="tabs"
                    onClick={() => toggleTab(null)}
                >
                    <img src={Clear} alt='clear' />
                </li>

            </ul>
            <div className="content-tabs">
                <div className={toggle === 1 ? "content  active-content" : "content"}>
                    <Git />
                </div>
                <div className={toggle === 2 ? "content  active-content" : "content"}>
                    <Linkedin />
                </div>
                <div className={toggle === 3 ? "content  active-content" : "content"}>
                    <Twitter />
                </div>
                <div className={toggle === 4 ? "content  active-content" : "content"}>
                    <Insta />
                </div>
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