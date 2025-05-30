import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import MyNavbar from './components/MyNavbar';

export default function App() {
    return (
        <>
            <MyNavbar />
            {/* Other page content or routes here */}
            <main>
                <h1>Welcome to my portfolio</h1>
                {/* etc. */}
            </main>
        </>
    );
}

