import React from 'react';
import ReactDOM from 'react-dom';

import IshopComponent from './components/IshopComponent';

const shopTitle = 'Clean Deal Shop'
let carsArr=require('./cars.json');


ReactDOM.render(

    React.createElement(IshopComponent, {cars:carsArr,title:shopTitle} ),
    document.getElementById('app')
);

