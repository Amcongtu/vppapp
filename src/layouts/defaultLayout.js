import React from 'react';

import Header from './../components/main/Header';
import Footer from './../components/main/Footer';
import IconChat from './../components/main/IconChat';
import ScrollToTop from './../components/scrollToTop/ScrollToTop';


function defaultLayout({children}) {
    return (
        <div>
            <ScrollToTop/>
            <Header/>
            {children}
            <Footer/>
            <IconChat/>
        </div>
    );
}

export default defaultLayout;