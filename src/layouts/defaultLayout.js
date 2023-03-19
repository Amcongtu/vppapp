import React from 'react';

import Header from './../components/main/Header';
import Footer from './../components/main/Footer';


function defaultLayout({children}) {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
}

export default defaultLayout;