// Write your code here
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img alt="website logo" className="website-logo"
                        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png" />
                </Link>
                <Popup 
                    modal
                    trigger={
                        <button className="hamburger-btn" data-testid="hamburgerIconButton">
                            <GiHamburgerMenu className="hamburger-icon" />
                        </button>
                    }
                    className="popup-content"
                >
                    {close => (
                        <div className="nodal-container">
                            <button
                                className="trigger-button"
                                data-testid="closeButton"
                                onClick={() => close()}
                                >
                                    <IoMdClose className="close-icon" />
                            </button>

                            <ul className="items-container">
                                <li className="link-item" onClick={() => close()}>
                                    <Link className="link-item" to="/">
                                        <AiFillHome className="item-icon" />
                                        <p className="item-heading"> Home </p>
                                    </Link>
                                </li>
                                <li className="link-item" onClick={() => close()}>
                                    <Link className="link-item" to="/about">
                                        <BsInfoCircleFill className="item-icon" />
                                        <p className="item-heading"> About </p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}

                </Popup>

            </div>
        </nav>
    )
}

export default Header