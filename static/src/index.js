import React from 'react';
import ReactDom from 'react-dom';
import Characters from './js/character.js';

ReactDom.render(<Characters />, document.getElementById('character-cards'))
ReactDom.render(<p>Placeholder</p>, document.getElementById('filters'))
