import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home" className='logo'>Todo App</Navbar.Brand>
      <Nav className="ms-auto p-2 nav-link">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">About</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;