import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faCircle,
    faLaptop,
    faLayerGroup,
    faScroll,
    faPlus,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import {
    faInstagram
} from '@fortawesome/free-brands-svg-icons'

import Container from './components/container.js'

library.add(
    faLaptop,
    faCircle,
    faLayerGroup,
    faScroll,
    faPlus,
    faTimes,
    faInstagram
);

ReactDOM.render(
    <Container />,
    document.getElementById('root')
);
