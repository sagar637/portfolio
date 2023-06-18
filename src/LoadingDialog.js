import React from 'react';
import './LoadingDialog.css';

const LoadingDialog = () => {
    return (
        <div className="loading-dialog">
            <div className="loading-dialog-content">
                <h2>Initializing Portfolio</h2>
                <div className="loading-spinner"></div>
                <h6>Think Twice!!..Code Once </h6>
            </div>
        </div>
    );
};

export default LoadingDialog;
