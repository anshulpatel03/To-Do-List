import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"; 
function TopNav() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary" style={{margin:"auto auto auto 0px",backgroundColor:"blue"}}>
      <Container >
        <Navbar.Brand href="#" style={{margin:"10px 10px"}}>MyToDodotcom</Navbar.Brand>
      </Container>
    </Navbar>
    
  );
}

export default TopNav;