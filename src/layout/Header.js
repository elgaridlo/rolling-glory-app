import React from 'react'
import { Navbar, Container, Image } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar expand="lg" >
                <Container>
                    <Navbar.Brand href="/">
                        <Image src={'/assets/img/logo-dummy.png'} />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Header