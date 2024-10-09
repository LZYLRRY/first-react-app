// src/components/MainContent/MainContent.js
import React from 'react';
import Header from '../Header/Header';
import './MainContent.css';

function MainContent() {
    return (
        <main className="main-content">
            <Header />
            <section className="content">
                {/* Your dashboard widgets and content go here */}
                <p>Welcome to the Dashboard! Here you can manage your data.</p>
            </section>
        </main>
    );
}

export default MainContent;
