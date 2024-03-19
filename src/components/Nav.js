import React, { useContext, useEffect, useState } from 'react'
import '../css/style.css'
import { MyContext } from '../context/Context';
import Logo from '../img/Tranquil3.png'
import { Link } from 'react-router-dom';


function Nav() {

    const [noItem, setNoItem] = useState(false)
    const [width, setWidth] = useState('')
    const [cardWidth, setCardWidth] = useState(0);

    const { data } = useContext(MyContext);

    useEffect(() => {
        const screenWidth = window.innerWidth;

        if (data === '') {
            setNoItem(false);
            const calculatedWidth = screenWidth - 78;
            setCardWidth(calculatedWidth);
            setWidth(cardWidth + "px")
        } else if (data === 'open') {
            setNoItem(true);
            const calculatedWidth = screenWidth - 250;
            setCardWidth(calculatedWidth);
            setWidth(cardWidth + "px")
        }

        if (data === 'close') {
            setNoItem(false);
            const calculatedWidth = screenWidth - 78;
            setCardWidth(calculatedWidth);
            setWidth(cardWidth + "px")
        } else (
            setNoItem(false)
        )
    
    },[setNoItem, cardWidth, data])
    console.log(noItem);
    return (
        <div>
            <div className="nav" id="nav" style={{ width: width }}>
                <div className="">
                </div>
                <div className="right">
                    <ul>
                        <li> <Link to="/profile"><button className='btnNoBg'>  <i class="bx bx-user"></i>View Profile</button></Link></li>
                    </ul>
                </div>
            </div>

            <div className="">
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand nan" href="/"><img src={Logo} alt="" /> </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            {/* <span class="navbar-toggler-icon"></span> */}
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mt-3">
                                <li class="nav-item">
                                    <div className="">
                                        <i class="bx bx-grid-alt"></i>
                                        <span class="link_name">Dashboard</span>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div className="">
                                        <i class="bx bx-user"></i>
                                        <span class="link_name">User</span>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div className="">
                                        <i class="bx bx-chat"></i>
                                        <span class="link_name">Message</span>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div className="">
                                        <i class="bx bx-pie-chart-alt-2"></i>
                                        <span class="link_name">Analytics</span>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div className="">
                                        <i class="bx bx-folder"></i>
                                        <span class="link_name">File Manager</span>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div className="">
                                        <i class="bx bx-cart-alt"></i>
                                        <span class="link_name">Order</span>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <div className="">
                                        <i class="bx bx-cog"></i>
                                        <span class="link_name">Settings</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Nav