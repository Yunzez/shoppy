import { Nav, Button, Container, Navbar as BsNavBar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    return (<BsNavBar sticky="top" className="p-3 shadow rounded bg-light">
        <Container className='me-auto'>

            <div className='d-flex'>
                <Nav>
                    <Nav.Link to="/" as={NavLink}>
                        <h6 >Home</h6>
                    </ Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link to="/store" as={NavLink}>
                        <h6 >Store</h6>
                    </ Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link to="/about" as={NavLink}>
                        <h6 >About</h6>
                    </ Nav.Link>
                </Nav>
            </div>
            <div className='d-flex'>
                <Nav>
                    <Nav.Link to="/user" as={NavLink}>
                        <h6 >User</h6>
                    </ Nav.Link>
                </Nav>
                {cartQuantity > 0 && (
                <Button onClick={openCart}
                    style={{ width: "50px", height: "50px", textAlign: 'center', verticalAlign: 'center', position: 'relative' }}
                    variant="outline-primary" className='rounded-circle'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <div className='rounded-circle bg-danger d-flex justify-content-center align-item-center'
                        style={{
                            color: "white", width: "20px", height: '20px', position: 'absolute', bottom: '0', right: '0',
                            transform: "translate(20%, 20%)"
                        }}>
                        <small>{cartQuantity}</small>
                    </div>
                </Button>
                )}
            </div>
        </Container>

    </BsNavBar>)
}