import React from 'react';
import Header from "../header/Header";
import View1 from "./View_1";
import FormStep1 from "./Form_step1";
import Footer from "../footer/Footer";

const MainView = () => {
    return (
        <>
            <Header/>
            <View1/>
            <FormStep1/>
            <Footer/>
        </>
    );
};

export default MainView;