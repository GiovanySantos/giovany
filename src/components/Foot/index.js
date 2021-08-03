import React from 'react'
import { Container } from 'react-bootstrap';
import './styles.scss';

const Foot = () => {
    return (
        <footer>
            <Container className="d-flex justify-content-center pt-2 pb-2">
                <p>Lostlies</p>
            </Container>
        </footer>
    )
}

export default Foot;