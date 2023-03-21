import React from 'react';

import Header from './../components/main/Header';
import Footer from './../components/main/Footer';
import IconChat from './../components/main/IconChat';


function defaultLayout({children}) {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
            <IconChat/>
        </div>
    );
}

export default defaultLayout;