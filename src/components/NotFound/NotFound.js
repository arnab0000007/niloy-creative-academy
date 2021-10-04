import React from 'react';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className="text-center not-found">
            <h1>404 Not Found</h1>
            <p className="text-muted text-center">The Page you are looking for is not available at the moment!</p>
        </div>
    );
};
export default NotFound;