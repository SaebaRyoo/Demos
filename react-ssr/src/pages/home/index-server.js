'use strict';
const React = require('react');
const { sum } = require('../../utils/sum');
require('./home.less');

class Home extends React.Component {

    constructor() {
        super(...arguments);

        this.state = {
            Text: null
        };
    }
    

    render() {
        const addResult = sum(200, 20);
        return (
            <div className="home">
                {addResult}
                hello world
            </div>
        );
    }
}

module.exports = <Home />;