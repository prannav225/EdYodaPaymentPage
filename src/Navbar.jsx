import React from 'react'
import './styles/Navbar.css'
const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="contanier">
                <div className="leftContent">
                    <img src={'images/EDYODA.png'} alt="logo" width='100px' />
                    <select style={{ cursor: 'pointer' }}>
                        <option value="">Courses</option>
                    </select>
                    <select style={{ cursor: 'pointer' }}>
                        <option value="">Programs</option>
                    </select>
                </div>
                <div className="rightContent">
                    <img src="images\Vector.png" alt="seacrh" style={{ cursor: 'pointer' }} width='20px' />
                    <button className='loginBtn'>Log In</button>
                    <button className='joinnow'>JOIN NOW</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar