import React from 'react';
import Header from './../components/main/Header';

function defaultLayout({children}) {
    return (
        <div>
            <Header/>
            {children}
        </div>
    );
}

export default defaultLayout;