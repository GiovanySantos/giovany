import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import './styles.scss';

const Footer = () => {
    return (
        <footer>
            <Navbar>
                <Container className="d-flex justify-content-center">
                    <p>Lostlies</p>
                </Container>
            </Navbar>
        </footer>
    )
}

export default Footer;