import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

function Profile(props) {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='https://www.facebook.com/lilimarie.ashleystephens/'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/ashley-lili-marie-stephens/'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://github.com/astephens-fsd'>
                            <i class="fa fa-github"></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-twitter-square'></i>
                        </a>
                        </div>
                    </div>

                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Ashley</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Enthusiastic Dev 🔴",
                                    1000,
                                    "Full Stack Developer 👩🏻‍💻",
                                    1000,
                                    "MERN Stack Dev 🤓",
                                    1000,
                                    "Cross Platform Dev 🌐",
                                    1000,
                                    "React/React Native Dev 📱",
                                    1000,
                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className="btn primary-btn">
                            {" "}
                            Hire Me{" "}
                        </button>
                        <a href='astephens.pdf' download='Ashley astephens.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Profile;