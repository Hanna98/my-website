
import Homepage from './Homepage';
import port from './Portfolio.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas)





const Portfolio = () => {




    return (
        <div>
            <Homepage />
            <div className={port.sideBar}>
                <div className={port.sideBarInner}>
                    <div className={port.mainNavigation}>
                        <ul>
                            <li>
                                <i><FontAwesomeIcon icon={['fas', 'caret-left']} />
                                </i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={port.rightSquare}>
                <div className={port.rightSquareContainer}>
                    <h1 className={port.portfolioText}>PORTFOLIO</h1>
                    <p>See my projects below
                    Unless explicitly stated otherwise,
                    all the back-end and front-end
                    were completed by myself</p>

                    <div className={port.gridContainer}>

                        <div className={port.timelineContainer}>
                            <div className={port.square}></div>
                            <i className={port.timeline}>
                                Now
                            </i>
                        </div>

                        <div className={port.paragraph}>
                            Currently creating the skeleton of an upcoming project
                        </div>

                        <div className={port.timelineContainer}>
                            <div className={port.square}></div>
                            <i className={port.timeline}>
                                2020-2021
                            </i>
                        </div>

                        <div className={port.paragraph}>
                            <h1 className={port.header}>MADLIT</h1>
                            <p>Story time with a twist</p>
                            <p>
                                Madlit is an interactive game where an individual replaces
                                words in a story with their own words
                            </p>
                            <ul className={port.try}>
                                <li>
                                    A place to slkfdjsd
                                </li>
                                <li>
                                    another askdfjskfj
                                </li>
                            </ul>
                            <button className={port.bigButton}>More Details</button>
                            <p>Technologies</p>
                            <button className={port.smallButton}>React</button>
                            <button className={port.smallButton}>Node.js</button>
                            <button className={port.smallButton}>SQL</button>
                        </div>

                        <div className={port.timelineContainer}>
                            <div className={port.square}></div>
                            <i className={port.timeline}>
                                2020
                            </i>
                        </div>

                        <div className={port.paragraph}>
                            <h1 className={port.header}>RECIPE APP</h1>
                            <p> A simplictic app for displaying recipes</p>
                        </div>

                        <div className={port.timelineContainer}>
                            <div className={port.square}></div>
                            <i className={port.timeline}>
                                2019
                            </i>
                        </div>


                        <div className={port.paragraph}>
                            <h1 className={port.header}>WEATHER APP</h1>
                            <p>A simple app to display the weather</p>
                            <p>sdfksffffffffffffffffffffffffffffffffffffffffffffffffffffffffff

                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Portfolio;