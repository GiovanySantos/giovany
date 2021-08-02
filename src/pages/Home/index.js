import React from 'react'
import { Container } from 'react-bootstrap'
import Face from '../Face'
import Port from '../Portifolio'
import './styles.scss'

const Home = () => {
    return (
        <section>
            <Container>
                <Face />
                <Port />
            </Container>
        </section>
    )
}

export default Home;