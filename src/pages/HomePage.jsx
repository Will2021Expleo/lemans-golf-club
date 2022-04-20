import React, { Component } from 'react';
// import Slider from '../components/homepage/slider/Slider'
import Slider from '../components/homepage/slider/Slider_';
import Informations from '../components/homepage/informations/Informations'
import NewsCards from '../components/homepage/newsPage/NewsCards'
import ShortMenu from '../components/homepage/shortMenu/ShortMenu'


class HomePage extends Component {
    render() {
        return (
            <div >
                <Slider />
                <Informations />
                <ShortMenu />
                {/* <NewsCards /> */}
            </div>
        );
    }
}

export default HomePage;