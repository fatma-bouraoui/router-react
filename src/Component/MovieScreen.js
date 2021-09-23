import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router'

export default function MovieScreen({movies}) {
    const params=useParams();
    const movie=movies.find((el)=>el.id==params.id);
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <img style= {{ width:"100%" }} src={movie.posterurl}  />
                    </Col>
                    <Col style={{textAlign:"left"}}>
                    <h4>{movie.name}</h4>
                    <p>{movie.description}</p>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}
