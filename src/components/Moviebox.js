import React from 'react'
import apiPath from '../env'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


export default function Moviebox({ record, title }) {
    return (

        <Container>
            <h1 className='text-center text-uppercase'>{title}</h1>
            <Row>
                {
                    record && record.length > 0 && record.map(({ id, original_title, poster_path, release_date }) =>
                        <Col xs={6} lg={3} >
                            <Link to={"/single-movie/"+id}>
                                <img src={apiPath.imagepath + "/" + poster_path} className='img-fluid' />
                            </Link>
                            <h5>{original_title}</h5>
                            <p>Release Date : {release_date}</p>
                        </Col>
                    )
                }
            </Row>
        </Container>

    )
}
