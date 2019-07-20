import React from 'react';
import './styles.css';

/**
 * Try to do something like:
 *
 const content = ["Hello, my name is Joey...", "I'm cool."]
 * ...
 * return (
 *  {content.map(str => <p>${str}</p>)}
 * )
 */

export const First = () => {
    return (
        <div className="first-section">
            <main>
                <header>
                    <h1 className="sideToSide about-me">
                        About Me
                    </h1>
                </header>
                <section className="barrelRoll info">
                    <p>
                        I am a former mechanical engineer from the United States.  I graduated with a BSc in Mechanical Engineering and worked as mostly a design engineer while playing other engineering roles to suit my company as well.
                    </p>
                    <p>
                        Currently, I live in Toronto, Canada in the North York region.  After coming here, I went to a coding bootcamp to hone my skills and fine tune them in order to blossom a passion of mine that has lain decades in wait.  
                    </p>
                    <p>
                        One thing I can confidently say is that I'm always learning something new, whether it's business practices, engineering disciplines, or coding languages.  It's nice to keep yourself fresh, I believe.  Staying on your toes is a must in a technical field, regardless of what specific type is being considered.
                    </p>
                    <p>
                        My engineering skills extend to:
                    </p>
                    <ul>
                        <li>
                            Design Engineering.  Here is where I spent most of my time and my titles and roles generally pertained to this facet.  Some of the skills I picked up here include:
                            <ul>
                                <li>
                                    Solidworks
                                </li>
                                <li>
                                    AutoDesk Inventor
                                </li>
                                <li>
                                    Catia
                                </li>
                            </ul>
                        </li>
                        <li>
                            Quality Engineering.  I spent some time helping a company maintain their standards and devising solutions to combat irregularities or statistically significant variations to part dimensions that were functionally broken or insufficient.  Here, I had to pick up a variety of skills on the fly, such as:  
                            <ul>
                                <li>
                                    RCA - Root Cause Analysis
                                </li>
                                <li>
                                    Inspection
                                </li>
                                <li>
                                    Gauges
                                </li>
                                <li>
                                    Tooling
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <p>
                        My coding skills extend to:
                    </p>
                    <ul>
                        <li>
                            Ruby on Rails
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            Java
                        </li>
                        <li>
                            Python/Django
                        </li>
                    </ul>
                </section>
                <section>
                    <div className="floater" id="joke">
                        <p>
                            NOTICE HOW I NEVER SAID CSS OR HTML? OR UX FOR THAT MATTER...
                        </p>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default First;