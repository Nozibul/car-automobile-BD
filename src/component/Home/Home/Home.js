import React from 'react';
import Header from '../../../shared/Header/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import TopHeader from '../TopHeader/TopHeader';

const Home = () => {
    return (
        <div>
            <TopHeader />
            <Header />
            <Banner />
            <Products />
        </div>
    );
};

export default Home;