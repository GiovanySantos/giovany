import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import dataTabs from './utils/dataTabs';
import './styles.scss'

const Port = () => {
    const [toggle, setToggleState] = useState();

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <ul className="tabs" >
                        {dataTabs.map((item) => {
                            return (
                                <a key={item.id} href={item.link} rel="noopener noreferrer" target="_blank">
                                    <li
                                        className={toggle === item.id ? "tabs active" : "tabs"}
                                        onClick={() => toggleTab(item.id)}
                                    >
                                        <img src={item.image} alt={item.image} />
                                    </li>
                                </a>
                            )
                        })}
                    </ul>
                </Col>
            </Row>
            {/* <div className="content-tabs">
                <div className={toggle === 5 ? "content  active-content" : "content"}>
                    <Youtube />
                </div>
                <div className={toggle === 6 ? "content  active-content" : "content"}>
                    <Twitch />
                </div>
            </div> */}
        </Container >
    )
}
export default Port;