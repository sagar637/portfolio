import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Skills = () => {
    const [skills ] = useState([

        { name: "Flutter", percentage: "90%" },
        { name: "JavaScript", percentage: "50%" },
        { name: "Python", percentage: "30%" },
        { name: "Java", percentage: "30%" },
        { name: "Html", percentage: "50%" },
        { name: "css", percentage: "50%" },
    ]);

    return (
        <div className="container mt-5">
          <h1 className="text-center">My Skills</h1>
          <div className="row">
            {skills.map((skill, index) => (
              <div className="col-md-6" key={index}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{skill.name}</h5>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: skill.percentage }}
                        aria-valuenow={skill.percentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {skill.percentage}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
      

};

export default Skills;
