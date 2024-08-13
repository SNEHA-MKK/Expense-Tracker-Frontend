
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react'
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import { faMoneyBillTransfer, faCircleQuestion, faCircleUser, faHouse, faPowerOff } from '@fortawesome/free-solid-svg-icons'
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';


// function Header() {

//   return (
//     <>
//       <Navbar expand="lg" className="bg-primary p-0">
//         <Container style={{height:"70px"}} >
//           <Navbar.Brand>
//           <Link to={'/home'} style={{ textDecoration: "none" }}>
//             <span style={{ color: 'white',fontSize:"30px" }}><b>Expense Tracker</b></span> </Link>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" /></Navbar.Brand>
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Link to={'/income'} style={{ textDecoration: 'none' }}>
//                 <h5 className='text-light mt-2 me-3' >Income</h5></Link>

//               <Link to={'/expenses'} style={{ textDecoration: 'none' }}>
//                 <h5 className='text-light mt-2 ms-2 me-3' href="#link">Expense</h5></Link>

//               <Link to={'/report'} style={{ textDecoration: 'none' }}>
//                 <h5 className='text-light mt-2 ms-2 me-2' href="#link">Report</h5></Link>

//               <Nav.Link className='text-light' href=""><FontAwesomeIcon icon={faCircleQuestion} className='ms-2' size='xl' title="Help" /></Nav.Link>

//               <Link to={'/home'} style={{ textDecoration: 'none' }}>
//                 <Nav.Link className='text-light' href='#home' ><FontAwesomeIcon icon={faHouse} className='ms-3' size='xl' title="Home" /></Nav.Link></Link>

//               <Nav.Link className='text-light' ><FontAwesomeIcon icon={faCircleUser} className='ms-3' size='xl' title="Profile" /></Nav.Link>

//                  <Link to={'/'} style={{ textDecoration: 'none' }}>
//                 <Nav.Link className='text-light' href='#home' ><FontAwesomeIcon icon={faPowerOff} className='ms-3' size='xl' title='Logout' /></Nav.Link></Link>


//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//     </>
//   )
// }

// export default Header/




import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleUser, faHouse, faMoneyBill, faPowerOff } from '@fortawesome/free-solid-svg-icons';




function Header() {
  return (
    <>


      <Navbar expand="lg" className="mx-3 rounded shadow navbar  mb-1 mt-3  " >
        <Container fluid className='justify-content-between align-items-center'>
          <Navbar.Brand className='fw-bolder text-info'>
            <Link to={'/home'} style={{ textDecoration: "none" }}>
              <FontAwesomeIcon icon={faMoneyBill} />  <span style={{ color: 'black', fontSize: "30px" }}><b>Expense Tracker</b></span> </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to={'/income'} style={{ textDecoration: 'none' }}>
                <h5 className='text-dark mt-2 me-3 ms-2' >Income</h5></Link>

              <Link to={'/expenses'} style={{ textDecoration: 'none' }}>
                <h5 className='text-dark mt-2 ms-2 me-3' href="#link">Expense</h5></Link>

              <Link to={'/report'} style={{ textDecoration: 'none' }}>
                <h5 className='text-dark mt-2 ms-2 me-2' href="#link">Report</h5></Link>

          

              <Link to={'/home'} style={{ textDecoration: 'none' }}>
                <Nav.Link className='text-dark' href='#home' ><FontAwesomeIcon icon={faHouse} className='ms-3' size='xl' title="Home" /></Nav.Link></Link>

              {/* <Link to={'/'} style={{ textDecoration: 'none' }}>
                <Nav.Link className='text-dark' href='#home' ><FontAwesomeIcon icon={faPowerOff} className='ms-3' size='xl' title='Logout' /></Nav.Link></Link> */}


            </Nav>
            <Nav className='ms-auto jusify-content-between'>

              {/* <Link to={'/register'} >
                <button className='btn btn-info text-light rounded-5 mx-lg-2 my-2 my-lg-0'>
                  SignUp
                </button>
              </Link> */}
              <Link to={'/'}>
                <button className='btn btn-info text-light rounded-5 mx-lg-2 my-2 my-lg-0'>
                  LogOut
                </button>
              </Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

