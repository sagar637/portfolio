import React from 'react';
import { Link } from 'react-router-dom';
import './Navelements.css';


const Navbar = () => {
    const handleClick = () => {
        const fileUrl = 'https://firebasestorage.googleapis.com/v0/b/student-helper-ca22a.appspot.com/o/CV%2B-%2BSagar%2BSedhai.pdf?alt=media&token=952241db-e4fc-4d5b-9ff0-8b61cdb10b33'; // Replace with the actual file path

        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const contact = () => {
        const email = 'sagarsedhai5@gmail.com';

        const url = `mailto:${email}`;

        window.open(url);
    };


    return (

        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="navbar-brand"> Sagar Sedhai</Link>
            </div>
            <div className="navbar-right">
                <button type="button" onClick={handleClick} className="button">
                    Download Resume
                </button>
                <Link to="/about" className="nav-link">About Me</Link>
                <Link to="/works" className="nav-link">Works</Link>

                <button type="button" onClick={contact} className="button">
                    Contact
                </button>

            </div>
        </nav>
    );
};

export default Navbar;
