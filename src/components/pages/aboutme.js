import React, { Component } from 'react'
import profilpic2 from './pic/pic.jpg'
import './Aboutme.css'
import Footar from '../footar'
export class Aboutme extends Component {
    render() {
        return (
            <div className='counter-container'>
                <div className="counter-containeraboutme">
                    <br />
                    <div className="image-text-container">
                        <img
                            src={profilpic2}
                            alt="Profile"
                            style={{
                                display: "flex",
                                width: "20%",
                                height: "20%",
                                marginTop: "2%",
                                marginLeft: "10%",

                                borderRadius: "0%"

                            }}
                        />

                        <div className="counter-headingaboutme1">
                            <div>

                                <h2 className='text-header'>
                                    Think Twice!!.. Code Once...
                                </h2>
                            </div>
                            <div className='text-aboutme'>

                                My name is Sagar Sedhai and I am a software developer with a passion for creating innovative and user-friendly web applications and mobile applications.

                                I have several years of experience in the industry, working on various projects and technologies such as React.js, flutter. My expertise lies in mobile  development, and I am always eager to learn new tools and technologies to improve my skillset.

                                On this about me page, you will find an overview of my professional background, my technical skills, and a selection of my most recent projects. I am a quick learner and a problem solver, and I am always looking for new challenges.

                                In my free time, I love to read about new technologies, attend meetups and conferences, and contribute to open-source projects. I am also an avid traveler and enjoy exploring new cultures and cuisines.

                                I am actively seeking new opportunities and would love to hear from you if you have a project that aligns with my skillset and interests. Feel free to contact me through the contact form on my website or connect with me on LinkedIn. Thank you for visiting my portfolio, and I look forward to hearing from you soon!

                            </div>
                        </div>

                    </div>
                </div>

                <Footar> </Footar>
            </div>
        )
    }
}

export default Aboutme