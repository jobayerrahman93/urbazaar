import React from 'react';
import MainPage from '../pages/MainPage/MainPage';
import SharedNavigation from '../pages/SharedNavigation/SharedNavigation';

const Home = () => {
    return (
        <>
            <SharedNavigation></SharedNavigation>
            <MainPage></MainPage>
        </>
    );
};

export default Home;