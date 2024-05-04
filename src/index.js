import React from 'react';
// ReactDOM is a package that provides DOM-specific methods that can be used at the top level of your app
// and as a part of the server rendering process. Most of your components should not need to use this module.
// Instead, consider using functional components.
// DOM : Document Object Model which basically represents the structure of the objects in the web page.
// ReactDOM is basically a DOM-specific package that is used to render the components in the DOM.
import ReactDOM from 'react-dom';
import './index.css';
// App is functionial component that is imported from App.js file.
import App from './App';
// mdb-react-ui-kit is a package that provides a lot of components that can be used to build the UI of the app.
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// reportWebVitals is a function that is imported from reportWebVitals.js file. It is used to measure the performance of the app.
import reportWebVitals from './reportWebVitals';

// ReactDOM.render() is a function that is used to render the components in the DOM.
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();