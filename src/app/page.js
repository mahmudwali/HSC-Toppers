import AllServices from '@/components/AllServices';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Programmeall from '@/components/Programmeall';
import Study from '@/components/Study';


import React from 'react';

const page = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <Programmeall/>
            <AllServices/>
            <Study/>
            <Footer/>
        </>
    );
};

export default page;