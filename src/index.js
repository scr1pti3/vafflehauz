import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
    faCircle,
    faLaptop, 
    faLayerGroup,
    faScroll,
} from '@fortawesome/free-solid-svg-icons';

import Container from './components/container.js' 

library.add(
    faLaptop,
    faCircle,
    faLayerGroup,
    faScroll,
);
ReactDOM.render(
    <Container />,
    document.getElementById('root')
);
