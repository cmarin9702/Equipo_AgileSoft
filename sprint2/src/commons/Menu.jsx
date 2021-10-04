import React from 'react'
import { Nav } from 'react-bootstrap';
const Menu = () => {
    return (
        <Nav activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/home"> Inicio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/productos">Productos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/ventas">Ventas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/usuarios" >
                    Usuarios
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Menu
