import React, { useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { addToCart } from '../actions/cartAction.js'
const Header = () => {

    const cartCount = useSelector((state) => state.addToCart)
   
   
    return (
        <header>
            <Navbar bg="dark" variant='dark' collapseOnSelect expand="lg">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>proShop</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to='/cart'>
                                <Nav.Link ><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>

                            </LinkContainer>
                            <LinkContainer to='/login'>

                                <Nav.Link ><i className='fas fa-user'></i>Sign In</Nav.Link>

                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header