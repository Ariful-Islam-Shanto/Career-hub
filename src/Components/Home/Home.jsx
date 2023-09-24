import React from 'react';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Features from './Features/Features';
import DetailsTitle from './Features/DetailsTitle';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Features></Features>
        </div>
    );
};

export default Home;