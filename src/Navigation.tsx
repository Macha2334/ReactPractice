import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import './components/pages/commonStyles.scss'
import  Form  from "react-bootstrap/Form"
import  FormControl  from "react-bootstrap/FormControl"
import { Button } from "react-bootstrap"


const Navigation=()=>{
    return (
        <Navbar bg="primary" expand="lg" variant="dark" collapseOnSelect>
            <Container>
                <Navbar.Brand>
                    <Nav.Link href="home">
                    <img id="brand-img" src={process.env.PUBLIC_URL+'brand.png'}/>
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                <Nav>
                <Nav.Link href="home"><span className="glyphicon glyphicon-envelope"></span>Home</Nav.Link>
                <Nav.Link href="cart">Cart</Nav.Link>
                <Nav.Link href="counter">Counter</Nav.Link>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-10"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      );
    }
    export default Navigation;