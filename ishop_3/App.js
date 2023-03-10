import React from 'react';
import ReactDOM from 'react-dom';

import IshopComponent from './components/IshopComponent';

const shopTitle = 'Clean Deal Shop'
let carsArr= require('./cars.json');


ReactDOM.render(
    <IshopComponent
        title={shopTitle}
        cars={carsArr}

    />,
    document.getElementById('app')
);

