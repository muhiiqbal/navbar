import React, {useState} from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

const Navbar = () => {
  const [showNavColor] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' dark bgColor='light' className='mb-2'>
        <MDBContainer fluid>
          <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
          <MDBNavbarItem>
              <MDBNavbarLink href='#'>Indonesian</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Programming</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Cocid19</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Saved</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
      </MDBContainer>
        <MDBCollapse show={showNavColor} navbar id='navbarColor02'>
          <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn-outline-success" type="submit">Search</button>
        </form>
        </MDBCollapse>
      </MDBNavbar>
    </>
  );
}

export default Navbar;