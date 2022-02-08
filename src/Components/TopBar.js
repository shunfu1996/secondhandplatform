import { useState } from 'react';
import { Button, Container, Form, FormControl, Modal, Nav, Navbar, NavDropdown, InputGroup } from 'react-bootstrap';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiMessageCircle } from 'react-icons/fi';
import { BsCameraFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { GoLocation } from 'react-icons/go';
import ico from '../img/ico.svg';

export default function TopBar() {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><BsCameraFill size={24} />
                        <img
                            src={ico}
                            width="30"
                            height="30"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">流行時尚</Nav.Link>
                        <Nav.Link href="#features">傢俬及家品</Nav.Link>
                        <Nav.Link href="#pricing">電子產品</Nav.Link>
                        <Nav.Link href="#pricing">興趣及遊戲</Nav.Link>
                        <Nav.Link href="#pricing">工作及服務</Nav.Link>
                        <Nav.Link href="#pricing">其他</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="My Account" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">My Account</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Setting</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Log Out</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#"><AiOutlineHeart size={24} /></Nav.Link>
                        <Nav.Link href="#"><FiMessageCircle size={24} /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Navbar bg="light" expand="lg">
                <Container >
                    <Navbar.Brand href="#home"><BsCameraFill color="red" size={32} />
                        <img
                            src={ico}
                            width="30"
                            height="30"
                        />
                    </Navbar.Brand>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <InputGroup>
                            <InputGroup.Text><GoLocation /></InputGroup.Text>
                            <FormControl
                                type="search"
                                placeholder="Location"
                                className="me-2"
                                aria-label="Search"
                            />
                        </InputGroup>
                        <Button variant="success"><BiSearch size={20} /></Button>
                    </Form>
                    <Button variant="primary" onClick={handleShow}>
                        Launch demo modal
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Container>
            </Navbar>
        </>

    )
}