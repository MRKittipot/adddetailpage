import logo from './logo.svg';
import './App.css';
import Navbarex from './component/navbar';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <div className='all'>
       <div>
        <Navbarex/>
      </div>
      <div className='block1'>
        <div className='titlename'>
          Healtcareservice
        </div>
        <hr></hr>
        <div className='title'>
          News
          <button>Go to page</button>
        </div>
        <hr></hr>
        <div className='title'>
          Medicine
          <button>Go to page</button>
        </div>
        <hr></hr>
      </div>
    </div>
    
    

  );
}

export default App;
