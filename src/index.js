import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from './context/context';
import App from './App';
import './index.css'
import { SpeechProvider } from '@speechly/react-client';


ReactDOM.render(
    <SpeechProvider appId= "49c61743-6406-4f9e-bb5b-938822e16095" language="en-US" >
    <Provider>
        < App /> 
    </Provider>
    </SpeechProvider>,
    document.getElementById('root'));