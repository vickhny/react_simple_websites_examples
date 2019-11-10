import React, { Component } from 'react'
import { Container, Col, Image } from 'react-bootstrap'
import "./About.css"

class About extends Component {
    render() {
        return (
            <div>
                <Image src="assets/mountain-view.jpg" className="header-image" />
                <Container>
                    <Col xs={12} sm={12} smOffset={2}>
                        <Image src="assets/person-1.jpg" className="about-profile-pic" rounded />
                        <h3>Fran The Tank</h3>
                        <p>It's cold, but it's beautiful. If we're gonna walk though the woods, we need a little path. Nice little fluffy clouds laying around in the sky being lazy.</p>

                        <p>Think about a cloud. Just float around and be there. We don't want to set these clouds on fire. Decide where your cloud lives. Maybe he lives right in here.</p>

                        <p>Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning.</p>

                        <p>The only thing worse than yellow snow is green snow. We'll throw some happy little limbs on this tree. This is truly an almighty mountain. There he comes. When you do it your way you can go anywhere you choose. You've got to learn to fight the temptation to resist these things. Just let them happen. Brown is such a nice color.</p>

                        <p>We don't have to be concerned about it. We just have to let it fall where it will. Don't fight it, use what happens. Give him a friend, we forget the trees get lonely too. Of course he's a happy little stone, cause we don't have any other kind. Put your feelings into it, your heart, it's your world. There is no right or wrong - as long as it makes you happy and doesn't hurt anyone. This is gonna be a happy little seascape.</p>
                       </Col>
                </Container>
            </div>
        )
    }
}

export default About