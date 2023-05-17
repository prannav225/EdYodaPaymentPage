import React from 'react'
import './styles/Navbar.css'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="contanier">
                <div className="leftContent">
                    <img src="../assects/EDYODA.png" alt="" width='100px' />
                    <select style={{ cursor: 'pointer' }}>
                        <option value="">Courses</option>
                    </select>
                    <select style={{ cursor: 'pointer' }}>
                        <option value="">Programs</option>
                    </select>
                </div>
                <div className="rightContent">
                    <img src="../assects/Vector.png" alt="" style={{ cursor: 'pointer' }} />
                    <button className='loginBtn'>Log In</button>
                    <button className='joinnow'>JOIN NOW</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar