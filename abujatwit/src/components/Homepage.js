import React from 'react'
import {Container,Col,Row,Image,Form,Button} from 'react-bootstrap';
import Pic from '../img/img0.png'

function Hompage() {
    return (
        <div>
            <Container>
                <Row >
                <Col >
                    <Image src={Pic} rounded   style={{ width:'100px',position:"relative",left:'-300px',top:'70px'}}/>
                </Col>
                    <Col>
                    <Form style={{width:'300px',position:'relative',top:'70px'}}>
                        
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                </Row>
                
            </Container>


        </div>
    )
}

export default Hompage
