import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Header(props) {
  var[textdata,setTextData] = useState('');
  let navigate = useNavigate();

  function myfunc(ev){
    ev.preventDefault();
    // // console.log('Search Form',textdata);
    if(textdata!=''){
      navigate("/search-form/"+textdata)
    }

    // if(textdata!=''){
    //   props.p1(textdata);

    // }
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
                <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/toprated-movies">Top Rated</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/upcoming-movies">Upcoming</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/contact">Contact</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to="/fakestore">Props Drill</Link>
            </Nav.Link>
            <Form inline onSubmit={myfunc}>
                <Row>
                <Col xs="auto">
                    <Form.Control
                    type="text"
                    onChange={(ev)=>{ setTextData(ev.target.value) }}
                    placeholder="Search"
                    className=" mr-sm-2"
                    />
                </Col>
                <Col xs="auto">
                    <Button type="submit">Submit</Button>
                    {textdata}
                </Col>
                </Row>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
