import React, { useEffect, useState } from 'react'
import home from './Homepage.module.css';
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'


library.add(fab, fas, faCheckSquare, faCoffee)






const Homepage = () => {
    let [showArrowFirst, setShowArrowFirst] = useState(false)
    let [showArrowSecond, setShowArrowSecond] = useState(false)
    let [showArrowThird, setShowArrowThird] = useState(false)

    let [showClickArrowOne, setClickArrowOne] = useState(false)



    useEffect(() => {

    }, []);

    let settingStorage = () => {
        localStorage.setItem('arrow', 'true');

        setClickArrowOne(true)
    }
    // if we are on homepage, make arrow false
    // if we are on profile, make arrow true



    return (
        <div>
            <div className={home.homeSection}>
                <div className={home.homeSectionInner}>
                    <h1>Hi, I'm Hanna</h1>
                    <p>I'm a software engineer specialized in both front-end and back-end development</p>
                </div>
            </div>

            <div className={home.sideBar}>
                <div className={home.sideBarInner}>
                    <div className={home.avatarBlock}>
                        <div className={home.avatar}>

                        </div>
                        <Link to="/" style={{ textDecoration: 'none', textDecorationColor: 'none' }}>

                            <div className={home.personContent}>
                                <h1 className={home.personTitle}>Hanna Abdulalim</h1>
                                <h2 className={home.personSubtitle}>Full Stack Engineer</h2>
                            </div>
                        </Link>

                    </div>

                    <div className={home.mainNavigation}>
                        <ul className={home.ulStyle}>
                            <Link to="/portfolio" style={{ textDecoration: 'none', textDecorationColor: 'none' }}>

                                <li className={home.liStyle} onClick={() => settingStorage()}
                                    onMouseEnter={() => setShowArrowFirst(true)}
                                    onMouseLeave={() => setShowArrowFirst(false)} >
                                    PORTFOLIO
                                {showArrowFirst && (
                                        <i><FontAwesomeIcon icon={['fas', 'caret-left']} />
                                        </i>
                                    )}
                                </li>
                                {showClickArrowOne && (
                                    <i><FontAwesomeIcon icon={['fas', 'caret-left']} />
                                    </i>
                                )}
                            </Link>

                            <Link to="/CV" style={{ textDecoration: 'none', textDecorationColor: 'none' }}>

                            <li className={home.liStyle}
                                onMouseEnter={() => setShowArrowSecond(true)}
                                onMouseLeave={() => setShowArrowSecond(false)} >
                                MY CV
                                 {showArrowSecond && (
                                    <i><FontAwesomeIcon icon={['fas', 'caret-left']} />
                                    </i>
                                )}
                            </li>
                            </Link>

                            <Link to="/contact" style={{ textDecoration: 'none', textDecorationColor: 'none' }}>

                                <li className={home.liStyle}
                                    onMouseEnter={() => setShowArrowThird(true)}
                                    onMouseLeave={() => setShowArrowThird(false)} >
                                    CONTACT ME
                                 {showArrowThird && (
                                        <i><FontAwesomeIcon icon={['fas', 'caret-left']} />
                                        </i>
                                    )}
                                </li>
                            </Link>

                        </ul>
                    </div>

                    <div className={home.mainNavigation}>
                        <ul className={home.ulStyle}>
                            <li>Get In Touch!</li>
                        </ul>
                        <div >

                        </div>
                        <div className={home.iconContainer}>
                            <div className={home.iconContainerGrid}>
                                <a href="https://github.com/Hanna98">
                                    <div className={home.icons}> <FontAwesomeIcon icon={['fab', 'github']} /> </div>
                                </a>
                                <a href="https://www.linkedin.com/in/hanna-abdulalim1998/">
                                    <div className={home.icons}> <FontAwesomeIcon icon={['fab', 'linkedin']} /> </div>
                                </a>
                                <div className={home.icons}> <FontAwesomeIcon icon={['fas', 'envelope']} /> </div>

                            </div>
                        </div>
                    </div>


                </div>

            </div>

        </div>

    );


}
export default Homepage;