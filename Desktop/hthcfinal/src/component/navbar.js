import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarex() {
  return (
    <Navbar className= "navbar" >
        <Container>
            <div className='navblock'> 
                <Nav.Link href='#' className='navlink'>Home</Nav.Link>
                <Nav.Link href='#' className='navlink'>new</Nav.Link>
                <Nav.Link href='#' className='navlink'>medicine</Nav.Link>
            </div>
        </Container>
  </Navbar>
  );
}

export default Navbarex;