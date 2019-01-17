import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="container-fluid" style={headerStyle}>
            <h1>Product management</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: 'white',
    padding: '10px',
    width: '100%',
    textAlign: 'center'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}
