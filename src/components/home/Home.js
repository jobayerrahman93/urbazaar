import React from 'react';
import MainPage from '../pages/MainPage/MainPage';

const Home = ({sidebarValue}) => {
    return (
        <>

            <MainPage sidebarValue={sidebarValue}></MainPage>
        </>
    );
};

export default Home;