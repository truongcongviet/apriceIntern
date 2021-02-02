import React, { Component } from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Banner from '../components/home/banner';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }
    render() {
        return (
            <div className="home-page">
                <div >
                    <Header />
                </div>
                <div >
                    <Banner />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default HomePage;
