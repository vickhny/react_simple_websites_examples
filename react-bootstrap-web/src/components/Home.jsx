import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap'
import './Home.css'

class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Welcome to CodeLife.io</h2>
                    <p>This is how to build a website wth react, react-router & react-bootstrap</p>
                    <Link to="/about">
                        <Button variant="primary"> About</Button>
                    </Link>
                </Jumbotron>

                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-1.jpg" roundedCircle className="profile-pic" />
                        <h3>Frank</h3>
                        <p className="intro-text">With something so strong, a little bit can go a long way.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-2.jpg" roundedCircle className="profile-pic" />
                        <h3>Veneesa</h3>
                        <p className="intro-text">Here's something that's fun. What the devil.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-3.jpg" roundedCircle className="profile-pic" />
                        <h3>Riifes</h3>
                        <p className="intro-text">We can always carry this a step further. There's really no end to this.</p>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default Home