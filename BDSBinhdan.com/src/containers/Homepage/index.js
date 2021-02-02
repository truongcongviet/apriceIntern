import React, { Component } from 'react';
import './style.scss';

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
                <h1>Homepage</h1>
            </div>
        );
    }
}

export default HomePage;
