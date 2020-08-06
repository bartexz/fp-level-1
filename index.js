// Import stylesheets
import './style.css';
import {getResponseSize} from './app'
getResponseSize('https://jsonplaceholder.typicode.com/photos')
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;