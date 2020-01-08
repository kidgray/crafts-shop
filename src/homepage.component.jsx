import React from 'react';

/* Don't need state data or lifecycle methods in the
homepage, so just make it a Functional Component */

export const HomePage = () => (
    <div className='homepage'>
        {/* Container for the menu */}
        <div className='directory-menu'>
            {/* Dolls */}
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>DOLLS</h1>
                    <span className="subtitle">BROWSE SELECTION</span>
                </div>
            </div>

            {/* Handbags */}
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>HANDBAGS</h1>
                    <span className="subtitle">BROWSE SELECTION</span>
                </div>
            </div>

            {/* Scrunchies & Headbands */}
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>SCRUNCHIES & HEADBANDS</h1>
                    <span className="subtitle">BROWSE SELECTION</span>
                </div>
            </div>

            {/* Bracelets */}
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>BRACELETS</h1>
                    <span className="subtitle">BROWSE SELECTION</span>
                </div>
            </div>

            {/* Bath & Toiletry */}
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>BATH & TOILETRY</h1>
                    <span className="subtitle">Browse Selection</span>
                </div>
            </div>
        </div>
    </div>
);