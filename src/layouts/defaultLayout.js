import React from 'react';

import Header from './../components/main/Header';
import Footer from './../components/main/Footer';
import IconChat from './../components/main/IconChat';
import ScrollToTop from './../components/scrollToTop/ScrollToTop';
import dataSearch from './../data/dataPopularSearch';

function defaultLayout({children}) {
    
    return (
        <div>
            <ScrollToTop/> 
            <Header data={dataSearch}/>
            {children}
            <Footer/>
            <IconChat/>
        </div>
    );
}

export default defaultLayout;