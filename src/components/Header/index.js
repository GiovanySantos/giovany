import React from 'react'
import { Container, Navbar } from 'react-bootstrap';
import './styles.scss';

const Header = () => {
    return (
        <header className="shadow pt-4 pb-4">
            <Navbar>
                <Container className="d-flex justify-content-center">
                    <h1>Giovany</h1>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;