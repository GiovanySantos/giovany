import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import bgImg from '../../statics/img/bgImg.png'
import './styles.scss'

const Face = () => {
    return (
        <Container className="home">
            <Row>
                <Col md={6}>
                    <h2>Seu site<br />Seu jeito</h2>
                    <p>
                        Planejamos o design e as funcionalidades juntos e criamos um site que é a cara do seu negócio
                    </p>
                </Col>
                <Col md={6}>
                    {/* carrossel */}
                    <img src={bgImg} alt="background" />
                </Col>
            </Row>
        </Container>
    )
}

export default Face;