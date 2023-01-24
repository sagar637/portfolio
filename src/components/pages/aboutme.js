import React, { Component } from 'react'


export class Aboutme extends Component {
    render() {
        return (
            <div className="counter-containeraboutme">
                <br />
                <div className="image-text-container">
                    <img
                        src={"https://scontent.fsif1-1.fna.fbcdn.net/v/t39.30808-6/320385987_3265291743731988_5130192946728199065_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=X5voVesMg_0AX9GuNzo&_nc_ht=scontent.fsif1-1.fna&oh=00_AfAYBJwVyrKsnPyVTYGiIQs_em6pLzW0zh_J30hxgi6jAQ&oe=63D3D5FF"}
                        alt="Profile"
                        style={{
                            width: "40%",
                            height: "40%",
                            marginLeft: "10%",
                            paddingTop: "5%",
                            borderRadius: "10%"
                            
                        }}
                    />
                    <div className="counter-headingaboutme1">
                        <div>
                            <h1>
                                Think Twice!!..
                            </h1>
                            <h2>
                                Code Once...
                            </h2>
                        </div>
                        <div>
                            
                                My name is Sagar Sedhai and I am a software developer with a passion for creating innovative and user-friendly web applications and mobile applications.

                                I have several years of experience in the industry, working on various projects and technologies such as React.js, flutter. My expertise lies in mobile  development, and I am always eager to learn new tools and technologies to improve my skillset.

                                On this about me page, you will find an overview of my professional background, my technical skills, and a selection of my most recent projects. I am a quick learner and a problem solver, and I am always looking for new challenges.

                                In my free time, I love to read about new technologies, attend meetups and conferences, and contribute to open-source projects. I am also an avid traveler and enjoy exploring new cultures and cuisines.

                                I am actively seeking new opportunities and would love to hear from you if you have a project that aligns with my skillset and interests. Feel free to contact me through the contact form on my website or connect with me on LinkedIn. Thank you for visiting my portfolio, and I look forward to hearing from you soon!
                            
                        </div>
                    </div>

                </div>

                <br />

                <div className="description">
                    <h1 className="counter-headingedu">Education Background</h1>

                    • Bachelor of Computer Information System of Pokhara University 2017 - 2022
                    <br />
                    -- Boston International College, Chitwan, Nepal
                    <br />
                    • +2 Education 2015 - 2017 <br />
                    -- International College, Chitwan, Nepal
                    <br />
                    • School Leaving Certificate (SLC) 2014 <br />
                    --  Daisy English Boarding School, Chitwan, Nepal
                </div>


                <br />
                <div className="description">
                    <h1 className="counter-headingedu">Activites</h1>
                    • Participated on CAN Hackathon Chitwan, 2018
                    <br />
                    • Runner-up of BIC Code Camp 2022
                    <br />
                    • Participated on BIC Hackathon V1.0
                </div>

            </div>
        )
    }
}

export default Aboutme