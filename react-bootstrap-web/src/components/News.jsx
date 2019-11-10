import React, { Component } from 'react'
import "./News.css"
import { Container, Row, Col, Image } from 'react-bootstrap'

class News extends Component {
    render() {
        return (
            <div>
                <Image src="assets/mountain-man.jpg" className="header-image" />
                <Container>
                    <h2>News</h2>
                    <Row>
                        <Col sx={12} sm={8} className="main-section">
                            <p>Let's do that again. Every day I learn. Just make little strokes like that. Nature is so fantastic, enjoy it. Let it make you happy. See there how easy that is. If you do too much it's going to lose its effectiveness. Painting should do one thing. It should put happiness in your heart.</p>

                            <p>This is truly an almighty mountain. Let your imagination just wonder around when you're doing these things.</p>

                            <p>There we are. As trees get older they lose their chlorophyll. Trees grow in all kinds of ways. They're not all perfectly straight. Not every limb is perfect. It's all a game of angles. You have freedom here. The only guide is your heart.</p>

                            <p>When you do it your way you can go anywhere you choose. It's amazing what you can do with a little love in your heart. There we go.</p>

                            <p>But they're very easily killed. Clouds are delicate. We can fix anything. Let's go up in here, and start having some fun We artists are a different breed of people. We're a happy bunch.</p>
                        </Col>

                        <Col sx={12} sm={4} className="sidebar-section">
                            <Image src="assets/side.jpg" />
                            <p>This is a happy place, little squirrels live here and play. You want your tree to have some character. Make it special.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default News