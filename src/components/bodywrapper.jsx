import React from 'react';

const BodyWrapper = ({ children }) => {
    return (
        <div id="body" className="body">
            <div className="container">
                <div className="row align-items-center height-100 text-center">
                    <div className="col align-self-center">
                    { children }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BodyWrapper
