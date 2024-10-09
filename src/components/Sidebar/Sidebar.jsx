// src/components/Sidebar/Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar() {
    return (
        <aside className="sidebar">
            {/* Logo at the top */}
            <img src="/eon.webp" alt="Eon Logo" className="logo" />

            <nav>
                <ul>
                    <li><a href="#dashboard">Dashboard</a></li>
                    <li><a href="#reports">Reports</a></li>
                    <li><a href="#settings">Settings</a></li>
                    <li><a href="#profile">Profile</a></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;
